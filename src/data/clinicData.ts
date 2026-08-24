import { Treatment, ClinicalCase, Doctor, Testimonial, FAQItem, TechHighlight } from '../types';

export const CLINIC_INFO = {
  name: "3 Colinas Odontologia",
  tagline: "Precisão Digital & Odontologia de Alto Padrão",
  headline: "Odontologia pensada nos mínimos detalhes.",
  subheadline: "Ortodontia digital com alinhadores invisíveis, escaneamento 3D de alta precisão e estética biológica em um ambiente calmo e acolhedor.",
  phone: "(11) 98961-8018",
  phoneDisplay: "+55 (11) 98961-8018",
  whatsappNumber: "5511989618018",
  email: "contato@3colinasodontologia.com.br",
  address: "Av. Principal, 1200 — Sala 804 • Jardim das Colinas",
  city: "São Paulo — SP",
  zipCode: "01452-000",
  hours: "Segunda a Sexta: 08h às 19h | Sábados: 08h às 13h (Com agendamento prévio)",
  technicalResponsible: "Dra. Elisa G. da Rocha — CRO/SP 123.456",
  googleMapsUrl: "https://maps.google.com",
};

export const WHATSAPP_BOOKING_MESSAGE = `Seja bem-vindo(a) a 3 Colinas Odontologia! 

Para agilizarmos o seu atendimento responda cada pergunta a baixo! 

- Você é paciente da clínica ou seria primeira vez ? 
-  Qual seria o motivo da consulta ?
-  Nome completo 
-  Nome do convênio OU se é particular 
- Data de nascimento 
- CPF
 
Devido ao grande número de mensagens e outros afazeres do consultório, pode ser que demore para respondê-lo!😁

Observações 
Da 12h as 13h30 estamos fechados em horário de almoço!`;

export const getWhatsAppBookingUrl = (customMessage?: string) => {
  const msg = customMessage || WHATSAPP_BOOKING_MESSAGE;
  return `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`;
};

export const PILLARS_DATA = [
  {
    number: "01",
    title: "Diagnóstico Digital 3D",
    subtitle: "Precisão sem moldagens convencionais",
    description: "Utilizamos escaneamento intraoral tridimensional de última geração (iTero Element). O paciente visualiza o planejamento e a projeção do resultado do sorriso antes mesmo de iniciar o tratamento.",
    icon: "Scan",
    detail: "Mapeamento em alta definição que elimina pastas desconfortáveis e oferece fidelidade micrométrica."
  },
  {
    number: "02",
    title: "Arquitetura & Biologia",
    subtitle: "Naturalidade e preservação da estrutura",
    description: "Cada sorriso é único. Criamos tratamentos com proporções áureas faciais, respeitando a biologia dentária, a saúde gengival e a função mastigatória sem desgastes agressivos desnecessários.",
    icon: "Sparkles",
    detail: "Estética refinada que não parece artificial. Sorrisos harmônicos e funcionais de longa durabilidade."
  },
  {
    number: "03",
    title: "Experiência Humanizada",
    subtitle: "Atendimento acolhedor e sem pressa",
    description: "Ambiente sensorial planejado para proporcionar calma e tranquilidade. Consultas com tempo dedicado exclusivamente a você, escuta atenta e total clareza em todas as etapas.",
    icon: "HeartHandshake",
    detail: "Cuidado centrado na pessoa, com protocolos de conforto que transformam a ida ao dentista em um momento de bem-estar."
  }
];

export const INSTAGRAM_HIGHLIGHTS = [
  {
    id: "invisalign",
    title: "Invisalign",
    subtitle: "Ortodontia Invisível",
    badge: "Invisalign Doctor",
    iconType: "tooth-ring",
    targetId: "invisalign"
  },
  {
    id: "preenchimento",
    title: "Preenchimento",
    subtitle: "Harmonização Orofacial",
    badge: "Ácido Hialurônico",
    iconType: "tooth-ring",
    targetId: "preenchimento-facial"
  },
  {
    id: "tox-botulinica",
    title: "Tox. Botulínica",
    subtitle: "Botox® Terapêutico",
    badge: "Estética & Bruxismo",
    iconType: "tooth-ring",
    targetId: "toxina-botulinica"
  },
  {
    id: "destaques",
    title: "Destaques",
    subtitle: "Clínica & Momentos",
    badge: "Atendimentos",
    iconType: "team-photo",
    image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=400&q=80",
    targetId: "equipe"
  },
  {
    id: "clareamento",
    title: "Clareamento",
    subtitle: "Laser & Supervisionado",
    badge: "Estética do Sorriso",
    iconType: "tooth-ring",
    targetId: "clareamento-dental"
  },
  {
    id: "protese",
    title: "Prótese",
    subtitle: "Reabilitação & Lentes",
    badge: "Cerâmica & Função",
    iconType: "tooth-ring",
    targetId: "proteses-dentarias"
  },
  {
    id: "profilaxia",
    title: "Profilaxia",
    subtitle: "Limpeza & Prevenção",
    badge: "Saúde Bucal 3D",
    iconType: "tooth-ring",
    targetId: "profilaxia-preventiva"
  }
];

export const TREATMENTS: Treatment[] = [
  {
    id: "invisalign",
    category: "invisalign",
    title: "Invisalign® & Ortodontia Digital",
    subtitle: "Alinhamento dentário previsível com discrição absoluta",
    badge: "Invisalign Doctor",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=85",
    summary: "Correção de apinhamentos, espaçamentos e mordidas através de alinhadores transparentes sob medida, planejados digitalmente com o scanner 3D.",
    fullDescription: "A ortodontia digital transformou o alinhamento dentário. Por meio do escaneamento intraoral 3D e softwares de simulação biomecânica, cada movimentação é meticulosamente planejada. Sem fios metálicos, sem restrições alimentares e com consultas mais ágeis e confortáveis.",
    highlights: [
      "Sem fios ou braquetes metálicos que machucam a boca",
      "Removível para comer e fazer a higiene bucal com facilidade",
      "Simulação prévia 3D: veja a evolução do seu sorriso antes de começar",
      "Consultas mais rápidas e com maior previsibilidade de tempo"
    ],
    durationEstimate: "6 a 18 meses (conforme o plano)",
    technologyUsed: ["Scanner Intraoral 3D iTero", "Software ClinCheck® 3D", "SmartTrack® Alinhadores"],
    forWhom: "Adultos e jovens que desejam alinhar os dentes com discrição total, sem alterar sua rotina profissional ou social."
  },
  {
    id: "preenchimento-facial",
    category: "preenchimento",
    title: "Preenchimento Facial & Labial",
    subtitle: "Harmonização orofacial e sustentação com ácido hialurônico",
    badge: "Harmonização Orofacial",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=85",
    summary: "Escultura e volumização labial, suporte de comissuras e preenchimento harmônico para valorizar as proporções do seu sorriso e rosto.",
    fullDescription: "O preenchimento orofacial com ácido hialurônico de alta pureza integra a moldura labial aos dentes. Indicado para restaurar volume perdido, hidratar os lábios, definir o contorno labial e atenuar sulcos (como o bigode chinês) com sutileza, sofisticação e total biossegurança.",
    highlights: [
      "Lábios esculpidos com naturalidade, sem efeito exagerado",
      "Restauração do suporte labial e rejuvenescimento perioral",
      "Procedimento rápido, confortável e com anestesia local",
      "Substância 100% biocompatível e reabsorvível"
    ],
    durationEstimate: "1 sessão de 45 a 60 minutos (com retorno em 15 dias)",
    technologyUsed: ["Ácido Hialurônico Reticulado Premium", "Microcânulas de Precisão", "Anestesia Confortável"],
    forWhom: "Pacientes que desejam contorno labial definido, hidratação profunda, equilíbrio de volume ou rejuvenescimento da região ao redor do sorriso."
  },
  {
    id: "toxina-botulinica",
    category: "tox-botulinica",
    title: "Toxina Botulínica (Botox®)",
    subtitle: "Controle de bruxismo, dores na ATM e refinamento estético",
    badge: "Terapêutico & Estético",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=85",
    summary: "Aplicação precisa para alívio de tensões de mastigação, controle de bruxismo, correção de sorriso gengival e atenuação de rugas de expressão.",
    fullDescription: "A toxina botulínica possui ampla indicação na odontologia moderna. No âmbito terapêutico, relaxa a musculatura hipertônica (músculo masseter e temporal), aliviando dores de cabeça tensionais e desgastes de dentes causados pelo bruxismo. Na estética, suaviza linhas de expressão e harmoniza o sorriso gengival.",
    highlights: [
      "Alívio potente para dores causadas pelo apertamento e bruxismo",
      "Correção elegante do sorriso gengival (exposição excessiva da gengiva)",
      "Suavização de linhas de expressão na testa e ao redor dos olhos",
      "Aplicação rápida, precisa e praticamente indolor"
    ],
    durationEstimate: "Sessão de 30 minutos (efeito duradouro de 4 a 6 meses)",
    technologyUsed: ["Toxina Botulínica de Grau Farmacêutico Tipo A", "Agulhas Ultrafinas", "Mapeamento Muscular Facial"],
    forWhom: "Quem sofre com bruxismo, dores na face ao acordar, sorriso gengival acentuado ou busca prevenção e tratamento de marcas de expressão."
  },
  {
    id: "clareamento-dental",
    category: "clareamento",
    title: "Clareamento Dental Avançado",
    subtitle: "Luminosidade e brancura natural com proteção ao esmalte",
    badge: "Estética do Sorriso",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=85",
    summary: "Protocolos combinados de consultório e caseiro supervisionado com agentes dessensibilizantes para um clareamento potente e confortável.",
    fullDescription: "Nosso clareamento dental alia géis de última geração com fórmulas ricas em nitrato de potássio e flúor, garantindo máxima remoção de manchas e pigmentações sem provocar sensibilidade incômoda. O tom é planejado para que o resultado final ilumine seu rosto com naturalidade.",
    highlights: [
      "Dentes visivelmente mais claros e brilhantes em poucas sessões",
      "Fórmula especial com agentes protetores contra sensibilidade",
      "Protocolo seguro que não desgasta nem enfraquece o esmalte",
      "Supervisão clínica contínua da Dra. Elisa durante todo o processo"
    ],
    durationEstimate: "2 a 3 semanas (conforme o protocolo escolhido)",
    technologyUsed: ["Géis Clareadores de pH Neutro", "Moldeiras Flexíveis Individualizadas 3D", "Luz Aceleradora Terapêutica"],
    forWhom: "Pessoas com dentes amarelados pelo tempo, café, chá ou vinho que desejam rejuvenescer a estética do sorriso com rapidez e segurança."
  },
  {
    id: "proteses-dentarias",
    category: "protese",
    title: "Próteses Dentárias & Reabilitação Cerâmica",
    subtitle: "Facetas, lentes de contato cerâmicas, coroas e próteses fixas",
    badge: "Reabilitação Cerâmica",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=85",
    summary: "Restaurações cerâmicas puras (E.max e zircônia) e próteses sobre implantes que recuperam anatomia, mastigação firme e beleza impecável.",
    fullDescription: "Tratamento integral para substituir dentes perdidos, reparar dentes fraturados ou remodelar sorrisos inteiros. Trabalhamos com cerâmicas feldspáticas e dissilicato de lítio livres de metal (metal-free), que oferecem biocompatibilidade superior e mimetizam a translucidez do dente natural.",
    highlights: [
      "Próteses e coroas 100% cerâmicas livres de metal (sem borda escura)",
      "Recuperação completa da função mastigatória e equilíbrio da mordida",
      "Lentes de contato ultrafinas e facetas de altíssima longevidade",
      "Planejamento digital com testes prévios de formato e cor"
    ],
    durationEstimate: "2 a 4 consultas de confecção e ajuste milimétrico",
    technologyUsed: ["Cerâmica Pura Feldspática / E.max", "Zircônia Translúcida", "Escaneamento Intraoral 3D"],
    forWhom: "Pacientes que necessitam repor dentes ausentes, substituir restaurações antigas e escuras ou transformar cor e forma dos dentes."
  },
  {
    id: "profilaxia-preventiva",
    category: "profilaxia",
    title: "Profilaxia & Saúde Periodontal",
    subtitle: "Limpeza profunda guiada, ultrassom delicado e prevenção contínua",
    badge: "Saúde Bucal 3D",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=85",
    summary: "Remoção ultrassônica suave de biofilme e tártaro, jateamento com micropartículas e avaliação preventiva completa.",
    fullDescription: "A base de qualquer sorriso bonito é uma gengiva saudável e dentes livres de bactérias patogênicas. Nossa profilaxia utiliza ultrassom piezoelétrico delicado e polimento terapêutico com microgrânulos, eliminando manchas superficiais e prevenindo gengivite e periodontite com conforto absoluto.",
    highlights: [
      "Remoção suave e sem dor de tártaro, placa bacteriana e manchas",
      "Jateamento profilático com bicarbonato extrafino e água aquecida",
      "Diagnóstico precoce de cáries e microinfiltrações com câmera HD",
      "Orientação personalizada de higiene bucal para o seu dia a dia"
    ],
    durationEstimate: "Sessão individualizada de 45 a 60 minutos",
    technologyUsed: ["Ultrassom Piezoelétrico Suave", "Jato de Bicarbonato Micronizado", "Câmera Intraoral HD 3D"],
    forWhom: "Indispensável para todos os pacientes a cada 6 meses, usuários de alinhadores, portadores de próteses ou implantes e gestantes."
  }
];

export const TECH_HIGHLIGHTS: TechHighlight[] = [
  {
    id: "itero-scanner",
    name: "Scanner Intraoral 3D iTero",
    subtitle: "Mapeamento digital em alta definição",
    description: "Captura mais de 6.000 fotos por segundo para criar um modelo 3D colorido e fidedigno da sua arcada dentária em menos de 5 minutos.",
    patientBenefit: "Fim das incômodas massas de moldagem e visualização imediata da simulação do seu tratamento na tela.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=85",
    metric: "100%",
    metricLabel: "Digital e livre de moldes de gesso"
  },
  {
    id: "digital-smile-design",
    name: "Planejamento Facial & Mock-Up",
    subtitle: "Design do sorriso integrado às proporções do seu rosto",
    description: "Análise milimétrica de linhas faciais, exposição gengival e dinâmica do sorriso em movimento através de fotografia e vídeo clínico.",
    patientBenefit: "Você experimenta uma simulação física do seu novo sorriso nos seus próprios dentes antes de qualquer procedimento definitivo.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=85",
    metric: "0.1mm",
    metricLabel: "Precisão na confecção das lentes"
  },
  {
    id: "comfort-sanctuary",
    name: "Ambiente Sensorial & Controle de Ansiedade",
    subtitle: "Conforto acústico e atendimento sem pressa",
    description: "Espaço projetado com iluminação suave, fones com cancelamento de ruído e consultórios privativos para desmistificar o medo de dentista.",
    patientBenefit: "Uma consulta relaxante onde você é ouvido com total respeito, gentileza e tranquilidade.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=85",
    metric: "1 Paciente",
    metricLabel: "Por horário para atenção integral"
  }
];

export const CLINICAL_CASES: ClinicalCase[] = [
  {
    id: "caso-alinhador-apinhamento",
    title: "Alinhamento com Alinhadores Invisíveis",
    category: "Ortodontia Digital",
    description: "Correção de apinhamento anterior severo e expansão suave de arcada realizada 100% com placas transparentes.",
    beforeImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
    duration: "10 meses de tratamento",
    procedures: ["Escaneamento 3D iTero", "Alinhadores Transparentes", "Clareamento Supervisionado"],
    testimonialSnippet: "Trabalho em reuniões constantes com clientes e ninguém percebeu que eu estava usando alinhador. O resultado superou qualquer expectativa."
  },
  {
    id: "caso-lentes-ceramica",
    title: "Harmonização com 6 Lentes Cerâmicas",
    category: "Estética Cerâmica",
    description: "Fechamento de diastemas centrais e restabelecimento de proporção estética com cerâmicas ultrafinas sem desgaste invasivo.",
    beforeImage: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    duration: "3 semanas (3 consultas)",
    procedures: ["DSD Planejamento Digital", "Mock-up em boca", "Lentes Feldspáticas"],
    testimonialSnippet: "Eu tinha vergonha de sorrir em fotos. As lentes ficaram tão naturais que parecem dentes que sempre pertenceram ao meu rosto."
  },
  {
    id: "caso-reabilitacao-funcional",
    title: "Reabilitação Oral & Oclusão em Paciente com Bruxismo",
    category: "Reabilitação Oral",
    description: "Recuperação da altura dos dentes anteriores desgastados e proteção articular com restaurações cerâmicas e placa rígida noturna.",
    beforeImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    duration: "4 meses de planejamento e execução",
    procedures: ["Aumento de Dimensão Vertical", "Facetas e Onlays Cerâmicas", "Placa Miorrelaxante 3D"],
    testimonialSnippet: "Além do sorriso recuperado, acabaram as minhas dores de cabeça matinais ao acordar. A mastigação voltou a ser firme e confortável."
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: "dra-elisa-rocha",
    name: "Dra. Elisa G. da Rocha",
    title: "Cirurgiã-Dentista • Diretora Clínica",
    cro: "CRO/SP 123.456",
    role: "Especialista em Ortodontia Digital & Harmonização do Sorriso",
    bio: "Com vasta experiência clínica e paixão pela odontologia guiada por tecnologia, a Dra. Elisa lidera a 3 Colinas com o propósito de unir precisão digital milimétrica a um atendimento acolhedor, transparente e profundamente humano. É certificada internacionalmente nos principais fluxos de alinhadores invisíveis e fluxo digital 3D.",
    specialties: [
      "Ortodontia Digital & Alinhadores Invisíveis",
      "Planejamento 3D com iTero Element",
      "Estética do Sorriso & Lentes Cerâmicas",
      "Odontologia Minimamente Invasiva"
    ],
    image: "/src/assets/images/dra_elisa_aligner_1787614197787.jpg",
    philosophy: "“O sorriso mais bonito é aquele que preserva a identidade de quem o carrega. A tecnologia é a nossa ferramenta de precisão, mas o olhar humano e a escuta paciente são o coração do nosso trabalho.”"
  },
  {
    id: "equipe-multidisciplinar",
    name: "Corpo Clínico Integrado",
    title: "Especialistas em Cirurgia, Prótese & Periodontia",
    cro: "Equipe Registrada no CRO/SP",
    role: "Abordagem Integrada e Multidisciplinar",
    bio: "Na 3 Colinas Odontologia, cada caso complexo é discutido colegiadamente entre especialistas em implantodontia guiada, reabilitação oclusal, endodontia microscópica e periodontia, garantindo que o seu plano de tratamento seja completo e seguro.",
    specialties: [
      "Implantodontia & Cirurgia Guiada",
      "Reabilitação Oral & Oclusão",
      "Periodontia & Saúde Gengival",
      "Endodontia de Precisão"
    ],
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=85",
    philosophy: "“Uma clínica completa onde todas as especialidades conversam entre si para que você realize todo o seu tratamento com a mesma equipe de confiança.”"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    patientName: "Mariana Silveira",
    age: 34,
    treatment: "Alinhadores Invisíveis iTero",
    quote: "A experiência na 3 Colinas é incomparável. Desde o escaneamento 3D sem massinha até a gentileza da Dra. Elisa, tudo foi impecável.",
    fullStory: "Sempre tive receio de colocar aparelho fixo na vida adulta por causa do meu trabalho. Quando a Dra. Elisa me mostrou na tela do computador como ficaria meu sorriso antes de fechar o tratamento, me senti totalmente segura. Em 9 meses meus dentes estavam perfeitos e ninguém percebeu o alinhador.",
    rating: 5,
    date: "Avaliação verificada no Google"
  },
  {
    id: "2",
    patientName: "Rodrigo Mendonça",
    age: 42,
    treatment: "Lentes de Contato Cerâmicas & Clareamento",
    quote: "Não parece uma clínica tradicional de dentista; o ambiente transmite uma paz incrível e o resultado das minhas lentes ficou absurdamente natural.",
    fullStory: "Eu tinha muito medo de ficar com 'dentes artificiais e brancos demais'. O cuidado com que a equipe planejou a cor, textura e formato respeitou exatamente a anatomia do meu rosto. Recomendo de olhos fechados.",
    rating: 5,
    date: "Avaliação verificada no Google"
  },
  {
    id: "3",
    patientName: "Camila Duarte",
    age: 29,
    treatment: "Check-up Preventivo & Ortodontia Digital",
    quote: "Pontualidade britânica, tecnologia surpreendente e um carinho genuíno com o paciente. A 3 Colinas elevou o padrão da odontologia.",
    fullStory: "Pela primeira vez na vida sinto vontade de ir às consultas de rotina. O atendimento é individualizado, sem correria de sala cheia. Você se sente verdadeiramente acolhida e cuidada.",
    rating: 5,
    date: "Avaliação verificada no Google"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    category: "alinhadores",
    question: "Como funciona a primeira avaliação para alinhadores invisíveis?",
    answer: "Na sua primeira consulta, realizamos uma anamnese detalhada e o escaneamento intraoral tridimensional com o scanner iTero Element. O scanner mapeia seus dentes em tempo real e já gera uma simulação 3D instantânea mostrando como seus dentes podem se movimentar até a posição ideal. Você tira todas as dúvidas diretamente com a Dra. Elisa e recebe uma previsão clara de tempo e investimento."
  },
  {
    id: "faq-2",
    category: "alinhadores",
    question: "Alinhador invisível funciona para qualquer tipo de problema ortodôntico?",
    answer: "A tecnologia dos alinhadores evoluiu expressivamente. Hoje tratamos desde pequenos desalinhamentos e diastemas até casos complexos de apinhamento, mordida aberta, mordida cruzada e sobremordida. Durante a avaliação digital, confirmamos a indicação exata para o seu caso."
  },
  {
    id: "faq-3",
    category: "lentes",
    question: "É obrigatório desgastar muito os dentes para colocar lentes de contato cerâmicas?",
    answer: "Não! Na 3 Colinas seguimos uma filosofia biológica e minimamente invasiva. As lentes cerâmicas contemporâneas são extremamente finas (de 0,2mm a 0,5mm) e, em muitos casos, o preparo é microscópico ou até nulo. Priorizamos sempre a máxima preservação do seu esmalte dental natural."
  },
  {
    id: "faq-4",
    category: "conforto",
    question: "Tenho medo de dentista e sinto ansiedade em consultas. Como é o atendimento?",
    answer: "Essa é uma das nossas maiores prioridades. Nosso espaço foi arquitetado para não ter cheiro ou sons estressantes de consultórios tradicionais. O atendimento é feito com tempo de sobra, sem pressa, com explicações prévias de cada passo, pausas sempre que você desejar e recursos de conforto sensorial (fones de ouvido, iluminação indireta e anestesia computadorizada suave quando indicada)."
  },
  {
    id: "faq-5",
    category: "avaliacao",
    question: "Qual o tempo médio de duração de cada consulta?",
    answer: "Dedicamos entre 50 a 90 minutos para a primeira consulta de avaliação e planejamento, garantindo um diagnóstico aprofundado, escaneamento completo e conversa sem pressa. Não fazemos atendimentos simultâneos."
  },
  {
    id: "faq-6",
    category: "financeiro",
    question: "Como funcionam as formas de pagamento e parcelamento?",
    answer: "Apresentamos o plano de tratamento completo com transparência absoluta após o diagnóstico digital. Oferecemos opções facilitadas de parcelamento direto ou em cartão de crédito, além de condições especiais para pagamentos à vista e etapas programadas conforme o andamento do tratamento."
  }
];

export const CLINIC_SPACES = [
  {
    id: "sala-avaliacao",
    title: "Sala de Planejamento Digital & Scanner 3D",
    tag: "Tecnologia 3D",
    description: "Equipada com o scanner intraoral iTero Element e monitores de alta fidelidade para que você acompanhe seu diagnóstico em tempo real.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=85"
  },
  {
    id: "consultorio-conforto",
    title: "Suíte de Atendimento Clínico",
    tag: "Conforto & Biologia",
    description: "Cadeiras ergonômicas de conforto prolongado, isolamento acústico e iluminação indireta para um procedimento suave.",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=85"
  },
  {
    id: "lounge-sensorial",
    title: "Recepção & Lounge Sensorial",
    tag: "Acolhimento",
    description: "Ambiente acolhedor com café especial, água aromatizada e atmosfera tranquila, projetado para você se sentir em casa.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=85"
  }
];

export const TREATMENTS_DATA = TREATMENTS;
export const DOCTORS_DATA = DOCTORS;
