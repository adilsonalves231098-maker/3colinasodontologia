import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Eye, Layers, Sparkles, RotateCcw, Scan, Zap, Activity, Info, CheckCircle2 } from 'lucide-react';

interface Dental3DViewerProps {
  initialMode?: 'realistic' | 'scanner' | 'aligner' | 'xray';
  interactive?: boolean;
  height?: string;
  showControls?: boolean;
  onToothSelect?: (toothName: string) => void;
}

export const InteractiveDental3DViewer: React.FC<Dental3DViewerProps> = ({
  initialMode = 'scanner',
  interactive = true,
  height = '460px',
  showControls = true,
  onToothSelect,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [renderMode, setRenderMode] = useState<'realistic' | 'scanner' | 'aligner' | 'xray'>(initialMode);
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [selectedTooth, setSelectedTooth] = useState<string | null>('Incisivos Centrais');
  const [alignmentStage, setAlignmentStage] = useState(100); // 0 = initial crooked, 100 = aligned
  const [autoRotate, setAutoRotate] = useState(true);

  // References for Three.js state
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const teethGroupRef = useRef<THREE.Group | null>(null);
  const alignerMeshRef = useRef<THREE.Mesh | null>(null);
  const scanLaserRef = useRef<THREE.Mesh | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const materialsRef = useRef<{ [key: string]: THREE.Material }>({});

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const width = container.clientWidth;
    const heightPx = container.clientHeight || 460;

    // 1. Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(42, width / heightPx, 0.1, 1000);
    camera.position.set(0, 4.5, 7.5);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // 3. Renderer with antialias and alpha
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, heightPx);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight1.position.set(5, 10, 7);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x48c0ba, 0.8); // Teal rim light
    dirLight2.position.set(-6, -4, -5);
    scene.add(dirLight2);

    const pointLight = new THREE.PointLight(0x8c7e6a, 0.6, 20); // Warm gold accent
    pointLight.position.set(0, 2, 4);
    scene.add(pointLight);

    // 5. Build Procedural High-Precision Dental Arch & Teeth
    const teethGroup = new THREE.Group();
    teethGroupRef.current = teethGroup;
    scene.add(teethGroup);

    // Materials definition
    const realisticToothMat = new THREE.MeshPhysicalMaterial({
      color: 0xfcfbfa,
      roughness: 0.15,
      metalness: 0.05,
      clearcoat: 0.9,
      clearcoatRoughness: 0.1,
      transmission: 0.15, // Subtle enamel translucency
      ior: 1.55,
      reflectivity: 0.9,
    });

    const scannerToothMat = new THREE.MeshStandardMaterial({
      color: 0x111827,
      roughness: 0.3,
      metalness: 0.8,
      wireframe: true,
      wireframeLinewidth: 1.2,
      emissive: 0x10b981,
      emissiveIntensity: 0.4,
    });

    const xrayToothMat = new THREE.MeshPhysicalMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.45,
      roughness: 0.1,
      metalness: 0.2,
      transmission: 0.8,
      ior: 1.2,
      emissive: 0x0284c7,
      emissiveIntensity: 0.3,
    });

    const realisticGumMat = new THREE.MeshStandardMaterial({
      color: 0xd9777f,
      roughness: 0.4,
      metalness: 0.05,
    });

    const scannerGumMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      wireframe: true,
      emissive: 0x065f46,
      emissiveIntensity: 0.2,
    });

    materialsRef.current = {
      realisticTooth: realisticToothMat,
      scannerTooth: scannerToothMat,
      xrayTooth: xrayToothMat,
      realisticGum: realisticGumMat,
      scannerGum: scannerGumMat,
    };

    // Construct Gum Parabolic Arch Curve
    const archCurvePoints: THREE.Vector3[] = [];
    const numTeeth = 14;
    const archWidth = 3.2;
    const archDepth = 3.4;

    for (let i = 0; i <= 30; i++) {
      const t = (i / 30) * Math.PI - Math.PI / 2;
      const x = Math.sin(t) * archWidth;
      const z = Math.cos(t) * archDepth * 0.85 - 1.2;
      archCurvePoints.push(new THREE.Vector3(x, -0.2, z));
    }
    const archCurve = new THREE.CatmullRomCurve3(archCurvePoints);

    // Gum Mesh
    const gumGeo = new THREE.TubeGeometry(archCurve, 40, 0.45, 12, false);
    const gumMesh = new THREE.Mesh(gumGeo, realisticGumMat);
    gumMesh.name = 'gum';
    gumMesh.scale.set(1, 0.8, 1);
    gumMesh.position.y = -0.3;
    teethGroup.add(gumMesh);

    // Anatomical Tooth Definitions
    const teethData = [
      { name: 'Molar Superior Direito 2', scale: [0.55, 0.58, 0.55], t: 0.08, type: 'molar', initialOffset: [0.1, 0, 0.15] },
      { name: 'Molar Superior Direito 1', scale: [0.52, 0.6, 0.52], t: 0.15, type: 'molar', initialOffset: [0, 0, 0.05] },
      { name: 'Pré-molar Direito 2', scale: [0.42, 0.62, 0.42], t: 0.23, type: 'premolar', initialOffset: [-0.05, 0, -0.05] },
      { name: 'Pré-molar Direito 1', scale: [0.4, 0.64, 0.4], t: 0.31, type: 'premolar', initialOffset: [0.08, 0, 0.04] },
      { name: 'Canino Direito', scale: [0.42, 0.72, 0.42], t: 0.39, type: 'canine', initialOffset: [-0.12, 0, 0.18] },
      { name: 'Incisivo Lateral Direito', scale: [0.38, 0.68, 0.32], t: 0.45, type: 'incisor', initialOffset: [0.15, 0, -0.1] },
      { name: 'Incisivo Central Direito', scale: [0.44, 0.75, 0.34], t: 0.49, type: 'incisor', initialOffset: [-0.08, 0, 0.12] },
      { name: 'Incisivo Central Esquerdo', scale: [0.44, 0.75, 0.34], t: 0.51, type: 'incisor', initialOffset: [0.09, 0, 0.08] },
      { name: 'Incisivo Lateral Esquerdo', scale: [0.38, 0.68, 0.32], t: 0.55, type: 'incisor', initialOffset: [-0.14, 0, -0.08] },
      { name: 'Canino Esquerdo', scale: [0.42, 0.72, 0.42], t: 0.61, type: 'canine', initialOffset: [0.1, 0, 0.15] },
      { name: 'Pré-molar Esquerdo 1', scale: [0.4, 0.64, 0.4], t: 0.69, type: 'premolar', initialOffset: [-0.06, 0, 0.05] },
      { name: 'Pré-molar Esquerdo 2', scale: [0.42, 0.62, 0.42], t: 0.77, type: 'premolar', initialOffset: [0.05, 0, -0.04] },
      { name: 'Molar Superior Esquerdo 1', scale: [0.52, 0.6, 0.52], t: 0.85, type: 'molar', initialOffset: [0, 0, 0.06] },
      { name: 'Molar Superior Esquerdo 2', scale: [0.55, 0.58, 0.55], t: 0.92, type: 'molar', initialOffset: [-0.08, 0, 0.12] },
    ];

    teethData.forEach((td, idx) => {
      const pt = archCurve.getPoint(td.t);
      const tangent = archCurve.getTangent(td.t);

      // Create organic curved tooth geometry
      let toothGeo: THREE.BufferGeometry;
      if (td.type === 'molar') {
        toothGeo = new THREE.BoxGeometry(1, 1.1, 1, 4, 4, 4);
      } else if (td.type === 'canine') {
        toothGeo = new THREE.ConeGeometry(0.7, 1.3, 16, 4);
        toothGeo.rotateX(Math.PI);
      } else {
        // Incisor / Premolar: streamlined crown
        toothGeo = new THREE.CylinderGeometry(0.65, 0.5, 1.2, 16, 4);
      }

      // Smooth rounding
      const posAttr = toothGeo.attributes.position;
      for (let j = 0; j < posAttr.count; j++) {
        const vx = posAttr.getX(j);
        const vy = posAttr.getY(j);
        const vz = posAttr.getZ(j);
        // Taper root and round crown
        if (vy > 0) {
          posAttr.setX(j, vx * (1 - vy * 0.2));
          posAttr.setZ(j, vz * (1 - vy * 0.15));
        }
      }
      toothGeo.computeVertexNormals();

      const toothMesh = new THREE.Mesh(toothGeo, realisticToothMat);
      toothMesh.name = `tooth-${idx}`;
      toothMesh.userData = {
        name: td.name,
        type: td.type,
        targetPos: new THREE.Vector3(pt.x, pt.y + 0.35, pt.z),
        initialOffset: new THREE.Vector3(td.initialOffset[0], td.initialOffset[1], td.initialOffset[2]),
        scale: td.scale,
      };

      // Position aligned initially
      toothMesh.position.copy(toothMesh.userData.targetPos);
      toothMesh.scale.set(td.scale[0], td.scale[1], td.scale[2]);

      // Orient tangent to arch
      const normal = new THREE.Vector3(-tangent.z, 0, tangent.x).normalize();
      toothMesh.lookAt(toothMesh.position.clone().add(normal));

      teethGroup.add(toothMesh);
    });

    // 6. Translucent Clear Aligner Mesh (Invisalign Tray)
    const alignerGeo = new THREE.TubeGeometry(archCurve, 50, 0.65, 16, false);
    const alignerMat = new THREE.MeshPhysicalMaterial({
      color: 0xe0f7f6,
      transparent: true,
      opacity: 0.55,
      roughness: 0.05,
      metalness: 0.1,
      transmission: 0.95,
      ior: 1.48, // Medical grade polyurethane index
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      reflectivity: 0.85,
    });
    const alignerMesh = new THREE.Mesh(alignerGeo, alignerMat);
    alignerMesh.position.y = 0.35;
    alignerMesh.name = 'aligner';
    alignerMesh.visible = initialMode === 'aligner';
    alignerMeshRef.current = alignerMesh;
    teethGroup.add(alignerMesh);

    // 7. Holographic 3D Laser Scanning Plane
    const scanLaserGeo = new THREE.PlaneGeometry(7.5, 0.08);
    const scanLaserMat = new THREE.MeshBasicMaterial({
      color: 0x48c0ba,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.85,
    });
    const scanLaser = new THREE.Mesh(scanLaserGeo, scanLaserMat);
    scanLaser.rotation.x = Math.PI / 2;
    scanLaser.position.y = 0.5;
    scanLaser.visible = false;
    scanLaserRef.current = scanLaser;
    teethGroup.add(scanLaser);

    // 8. Scanner Point Cloud Particles
    const particleCount = 600;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const t = Math.random() * Math.PI - Math.PI / 2;
      const r = 2.8 + (Math.random() - 0.5) * 0.8;
      const x = Math.sin(t) * r;
      const y = (Math.random() - 0.5) * 1.5;
      const z = Math.cos(t) * r * 0.85 - 1.0;

      particlePositions[i * 3] = x;
      particlePositions[i * 3 + 1] = y;
      particlePositions[i * 3 + 2] = z;

      particleColors[i * 3] = 0.28; // Cyan
      particleColors[i * 3 + 1] = 0.75;
      particleColors[i * 3 + 2] = 0.72;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.04,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    particles.visible = initialMode === 'scanner';
    particlesRef.current = particles;
    teethGroup.add(particles);

    // 9. Interactive Mouse / Touch Drag Orbit
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const onMouseDown = (e: MouseEvent) => {
      if (!interactive) return;
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging || !teethGroupRef.current) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      teethGroupRef.current.rotation.y += deltaX * 0.008;
      teethGroupRef.current.rotation.x = Math.max(-0.6, Math.min(0.8, teethGroupRef.current.rotation.x + deltaY * 0.008));

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    // Touch Support
    const onTouchStart = (e: TouchEvent) => {
      if (!interactive || e.touches.length === 0) return;
      isDragging = true;
      previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging || !teethGroupRef.current || e.touches.length === 0) return;
      const deltaX = e.touches[0].clientX - previousMousePosition.x;
      const deltaY = e.touches[0].clientY - previousMousePosition.y;

      teethGroupRef.current.rotation.y += deltaX * 0.008;
      teethGroupRef.current.rotation.x = Math.max(-0.6, Math.min(0.8, teethGroupRef.current.rotation.x + deltaY * 0.008));

      previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const onTouchEnd = () => {
      isDragging = false;
    };

    const dom = renderer.domElement;
    dom.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    dom.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    // 10. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Idle Rotation
      if (teethGroupRef.current && autoRotate && !isDragging) {
        teethGroupRef.current.rotation.y = Math.sin(elapsedTime * 0.4) * 0.35;
        teethGroupRef.current.rotation.x = 0.25 + Math.cos(elapsedTime * 0.3) * 0.08;
      }

      // Point cloud sparkle
      if (particlesRef.current && particlesRef.current.visible) {
        particlesRef.current.rotation.y = elapsedTime * 0.1;
      }

      // Scan Laser Animation
      if (scanLaserRef.current && scanLaserRef.current.visible) {
        const scanZ = Math.sin(elapsedTime * 2.5) * 2.5;
        scanLaserRef.current.position.z = scanZ;
      }

      renderer.render(scene, camera);
    };

    animate();

    // 11. Handle Resize
    const handleResize = () => {
      if (!containerRef.current || !rendererRef.current || !cameraRef.current) return;
      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight || 460;
      cameraRef.current.aspect = newWidth / newHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      dom.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      dom.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      renderer.dispose();
    };
  }, []);

  // Update Render Mode
  useEffect(() => {
    if (!teethGroupRef.current || !materialsRef.current) return;
    const mats = materialsRef.current;
    const group = teethGroupRef.current;

    group.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        if (child.name.startsWith('tooth-')) {
          if (renderMode === 'realistic') {
            child.material = mats.realisticTooth;
          } else if (renderMode === 'scanner') {
            child.material = mats.scannerTooth;
          } else if (renderMode === 'aligner') {
            child.material = mats.realisticTooth;
          } else if (renderMode === 'xray') {
            child.material = mats.xrayTooth;
          }
        } else if (child.name === 'gum') {
          if (renderMode === 'scanner' || renderMode === 'xray') {
            child.material = mats.scannerGum;
          } else {
            child.material = mats.realisticGum;
          }
        }
      }
    });

    if (alignerMeshRef.current) {
      alignerMeshRef.current.visible = renderMode === 'aligner';
    }

    if (particlesRef.current) {
      particlesRef.current.visible = renderMode === 'scanner' || renderMode === 'xray';
    }
  }, [renderMode]);

  // Update Alignment Morph
  useEffect(() => {
    if (!teethGroupRef.current) return;
    const group = teethGroupRef.current;
    const t = alignmentStage / 100; // 0 = fully crooked, 1 = perfectly aligned

    group.traverse((child) => {
      if (child instanceof THREE.Mesh && child.name.startsWith('tooth-')) {
        const u = child.userData;
        if (u && u.targetPos && u.initialOffset) {
          // Linear interpolation between initial crooked and aligned
          const crookedX = u.targetPos.x + u.initialOffset.x * 2.2;
          const crookedZ = u.targetPos.z + u.initialOffset.z * 2.2;
          const currentX = THREE.MathUtils.lerp(crookedX, u.targetPos.x, t);
          const currentZ = THREE.MathUtils.lerp(crookedZ, u.targetPos.z, t);
          child.position.x = currentX;
          child.position.z = currentZ;

          // Rotation twist if crooked
          child.rotation.y = THREE.MathUtils.lerp(u.initialOffset.x * 3.0, 0, t);
        }
      }
    });
  }, [alignmentStage]);

  // Trigger Laser Scan Simulation
  const handleTriggerScan = () => {
    setIsScanning(true);
    setScanProgress(0);
    if (scanLaserRef.current) scanLaserRef.current.visible = true;

    let progress = 0;
    const interval = setInterval(() => {
      progress += 4;
      setScanProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsScanning(false);
          if (scanLaserRef.current) scanLaserRef.current.visible = false;
        }, 400);
      }
    }, 45);
  };

  const handleResetCamera = () => {
    if (teethGroupRef.current) {
      teethGroupRef.current.rotation.set(0.2, 0, 0);
    }
  };

  return (
    <div className="relative w-full bg-gradient-to-b from-[#111827]/95 via-[#0F172A] to-[#1E293B] rounded-2xl overflow-hidden border border-white/10 shadow-2xl text-white select-none">
      
      {/* Top HUD Telemetry Bar */}
      <div className="absolute top-0 left-0 right-0 z-20 px-4 py-3 bg-[#0B0F19]/80 backdrop-blur-md border-b border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2.5">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#48C0BA] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#48C0BA]"></span>
          </span>
          <span className="font-mono text-[11px] uppercase tracking-wider text-white/90">
            Render 3D • iTero Element 5D Studio
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 font-mono text-[10px] text-teal-300">
            Fidelidade: 20μm
          </span>
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            className={`px-2.5 py-1 rounded text-[10px] font-medium tracking-wide uppercase transition-colors ${
              autoRotate ? 'bg-[#48C0BA]/20 text-[#48C0BA] border border-[#48C0BA]/40' : 'bg-white/5 text-white/60 hover:text-white'
            }`}
          >
            {autoRotate ? 'Auto-Giro Ativo' : 'Giro Pausado'}
          </button>
          <button
            onClick={handleResetCamera}
            title="Resetar Posição da Câmera"
            className="p-1 rounded bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 3D WebGL Canvas Container */}
      <div
        ref={containerRef}
        style={{ height }}
        className="w-full cursor-grab active:cursor-grabbing relative"
      />

      {/* Real-Time Laser Scan Progress Banner */}
      {isScanning && (
        <div className="absolute top-16 left-4 right-4 z-20 bg-teal-950/80 backdrop-blur-md border border-teal-500/40 p-3 rounded-lg flex items-center justify-between text-xs animate-fade-in">
          <div className="flex items-center gap-2.5">
            <Activity className="w-4 h-4 text-teal-400 animate-spin" />
            <span className="font-mono text-teal-200 text-[11px]">
              Escaneamento Óptico Intraoral em tempo real: <strong className="text-white">{scanProgress}%</strong>
            </span>
          </div>
          <span className="text-[10px] font-mono text-teal-300">
            6.000 fotos/segundo
          </span>
        </div>
      )}

      {/* Interactive Controls Overlay */}
      {showControls && (
        <div className="p-4 bg-[#0B0F19]/90 backdrop-blur-md border-t border-white/10 flex flex-col gap-3">
          
          {/* Render Mode Switcher */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
              <button
                type="button"
                onClick={() => setRenderMode('scanner')}
                className={`px-3 py-1.5 rounded-md text-xs font-medium flex items-center gap-1.5 transition-all ${
                  renderMode === 'scanner'
                    ? 'bg-[#48C0BA] text-slate-950 font-bold shadow-lg shadow-[#48C0BA]/20'
                    : 'bg-white/5 text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <Zap className="w-3.5 h-3.5" />
                <span>Scanner 3D</span>
              </button>

              <button
                type="button"
                onClick={() => setRenderMode('aligner')}
                className={`px-3 py-1.5 rounded-md text-xs font-medium flex items-center gap-1.5 transition-all ${
                  renderMode === 'aligner'
                    ? 'bg-[#48C0BA] text-slate-950 font-bold shadow-lg shadow-[#48C0BA]/20'
                    : 'bg-white/5 text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Alinhador Invisalign®</span>
              </button>

              <button
                type="button"
                onClick={() => setRenderMode('realistic')}
                className={`px-3 py-1.5 rounded-md text-xs font-medium flex items-center gap-1.5 transition-all ${
                  renderMode === 'realistic'
                    ? 'bg-[#48C0BA] text-slate-950 font-bold shadow-lg shadow-[#48C0BA]/20'
                    : 'bg-white/5 text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Fotorealista</span>
              </button>

              <button
                type="button"
                onClick={() => setRenderMode('xray')}
                className={`px-3 py-1.5 rounded-md text-xs font-medium flex items-center gap-1.5 transition-all ${
                  renderMode === 'xray'
                    ? 'bg-[#48C0BA] text-slate-950 font-bold shadow-lg shadow-[#48C0BA]/20'
                    : 'bg-white/5 text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Raio-X & Estrutura</span>
              </button>
            </div>

            {/* Laser Scan Trigger */}
            <button
              type="button"
              disabled={isScanning}
              onClick={handleTriggerScan}
              className="px-3.5 py-1.5 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 font-bold text-xs rounded-md shadow-md flex items-center gap-2 transition-all disabled:opacity-50"
            >
              <Scan className="w-3.5 h-3.5" />
              <span>{isScanning ? 'Escaneando...' : 'Simular Laser 3D'}</span>
            </button>
          </div>

          {/* Dynamic Alignment Stage Slider */}
          <div className="pt-2 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono uppercase text-white/70">
                Simulação de Movimentação Dentária:
              </span>
              <span className="px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 font-mono text-[11px] font-bold">
                {alignmentStage === 100 ? 'Sorriso Perfeito Alinhado' : `Estágio Alinhador: ${Math.round((alignmentStage / 100) * 24)}/24`}
              </span>
            </div>

            <div className="flex items-center gap-3 flex-1 max-w-xs">
              <span className="text-[10px] text-white/50">Inicial</span>
              <input
                type="range"
                min="0"
                max="100"
                value={alignmentStage}
                onChange={(e) => setAlignmentStage(Number(e.target.value))}
                className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#48C0BA]"
              />
              <span className="text-[10px] text-[#48C0BA] font-bold">Final</span>
            </div>
          </div>

        </div>
      )}

      {/* Floating Interactive Guide */}
      <div className="absolute bottom-24 right-4 z-10 hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-[10px] text-white/70">
        <Info className="w-3 h-3 text-[#48C0BA]" />
        <span>Arraste para girar a arcada em 360°</span>
      </div>

    </div>
  );
};
