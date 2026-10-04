import alpr from '../assets/alpr.png';
import type { ImageMetadata } from 'astro';

export type Category = 'Vision' | 'Signals & IoT' | 'LLM & MLOps' | 'Research';

export type Project = {
  title: string;
  category: Category;
  where: string;
  year: string;
  blurb: string;
  impact?: string;
  stack: string[];
  image?: ImageMetadata;
  links?: { label: string; url: string }[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: 'Bangla Automatic License-Plate Recognition',
    category: 'Vision',
    where: 'ACI Ltd.',
    year: '2023–25',
    blurb:
      'Detects trucks at factory gates, localizes the plate, and reads Bangla district, class, and digits to log every entry and exit automatically.',
    impact: 'Deployed at 35+ factory sites',
    stack: ['Object detection', 'Bangla OCR', 'OpenCV', 'IP cameras'],
    image: alpr,
    links: [{ label: 'Demo video', url: 'https://youtu.be/gR-CBS8Jvbo' }],
    featured: true,
  },
  {
    title: 'Real-Time Retail Face Recognition',
    category: 'Vision',
    where: 'ACI Ltd.',
    year: '2023–25',
    blurb: 'A web service that detects, embeds, and matches faces in real time for customer recognition in retail outlets.',
    impact: 'Deployed at 5 Yamaha outlets',
    stack: ['FaceNet', 'Face detection', 'Web service'],
    featured: true,
  },
  {
    title: 'Muzzle-Based Cattle Identification',
    category: 'Research',
    where: 'Adorsho Pranisheba',
    year: '2022–24',
    blurb:
      'Muzzle prints are unique like fingerprints. CLAHE enhancement, YOLO muzzle detection, and metric embeddings identify individual cattle for insurance.',
    impact: '826 cattle · 96.5% accuracy',
    stack: ['YOLO', 'FaceNet', 'Metric learning'],
    links: [{ label: 'arXiv', url: 'https://arxiv.org/abs/2407.06096' }],
    featured: true,
  },
  {
    title: 'Dashcam Accident-Risk Classification',
    category: 'Research',
    where: 'AVA MIPR IEEE Challenge',
    year: '2024',
    blurb: 'Predicts whether a dashcam clip is heading toward a risky event, using an ensemble of video transformers and 3-D CNNs.',
    impact: '2nd place',
    stack: ['TimeSformer', 'ViViT', '3D-CNN', 'Ensembles'],
  },
  {
    title: 'Semantic Search for MyGP',
    category: 'LLM & MLOps',
    where: 'Grameenphone',
    year: '2025–',
    blurb: 'Semantic retrieval for a super-app, served by on-premises LLM inference behind production search backends.',
    impact: '22M+ user ecosystem',
    stack: ['LLMs', 'Ollama', 'Embeddings', 'RAG'],
  },
  {
    title: 'Churn Prediction & Pack Recommendation',
    category: 'LLM & MLOps',
    where: 'Grameenphone',
    year: '2025–',
    blurb: 'Customer-level models that flag churn risk and recommend telecom packs, with monitoring across the model lifecycle.',
    stack: ['Classification', 'Recommenders', 'Monitoring', 'CI/CD'],
  },
  {
    title: 'AI Call-Center Assistant',
    category: 'LLM & MLOps',
    where: 'Telenor Global Hackathon',
    year: '2025',
    blurb: 'Scores calls on ASR quality, tone, politeness, and empathy, and adds sign-language video calls with an avatar responder.',
    impact: '1st runner-up',
    stack: ['ASR', 'Speech analytics', 'Avatars'],
  },
  {
    title: 'Bangla Document OCR',
    category: 'Vision',
    where: 'ACI Ltd.',
    year: '2023–25',
    blurb: 'Fine-tuned PaddleOCR to read Bangla official documents.',
    stack: ['PaddleOCR', 'Fine-tuning'],
  },
  {
    title: 'Cattle Rumination Monitoring',
    category: 'Signals & IoT',
    where: 'Adorsho Pranisheba',
    year: '2021–22',
    blurb: 'A jaw-mounted bolus with three 1-D sensors streams signals that sequence models classify into rumination behavior. A companion unit tracks barn temperature, humidity, methane, and CO₂.',
    stack: ['1D-CNN', 'LSTM', 'Embedded firmware', 'Sensors'],
  },
  {
    title: 'Sales Forecasting & Field-Force Analytics',
    category: 'Signals & IoT',
    where: 'ACI Ltd.',
    year: '2023–25',
    blurb: 'Forecasts sales targets and tracks field-force performance to support planning.',
    stack: ['Time series', 'Forecasting'],
  },
];
