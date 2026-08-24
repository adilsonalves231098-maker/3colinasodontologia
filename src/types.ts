export interface Treatment {
  id: string;
  category: 'invisalign' | 'preenchimento' | 'tox-botulinica' | 'clareamento' | 'protese' | 'profilaxia' | string;
  title: string;
  subtitle: string;
  summary: string;
  fullDescription: string;
  badge: string;
  image: string;
  highlights: string[];
  durationEstimate: string;
  technologyUsed: string[];
  forWhom: string;
}

export interface ClinicalCase {
  id: string;
  title: string;
  category: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  duration: string;
  procedures: string[];
  testimonialSnippet?: string;
}

export interface Doctor {
  id: string;
  name: string;
  title: string;
  cro: string;
  role: string;
  bio: string;
  specialties: string[];
  image: string;
  philosophy: string;
}

export interface Testimonial {
  id: string;
  patientName: string;
  age?: number;
  treatment: string;
  quote: string;
  fullStory: string;
  rating: number;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'alinhadores' | 'lentes' | 'avaliacao' | 'conforto' | 'financeiro';
}

export interface TechHighlight {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  patientBenefit: string;
  image: string;
  metric: string;
  metricLabel: string;
}
