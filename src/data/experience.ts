export type Role = {
  org: string;
  orgNote?: string;
  url?: string;
  role: string;
  period: string;
  location: string;
  summary?: string;
  points: string[];
};

export const experience: Role[] = [
  {
    org: 'Grameenphone Ltd.',
    orgNote: 'Telenor Group',
    url: 'https://www.grameenphone.com/',
    role: 'AI Engineer / Senior Executive',
    period: 'Apr 2025 – Present',
    location: 'Dhaka, Bangladesh',
    summary: "Productionizing and governing ML systems at Bangladesh's largest telecom operator.",
    points: [
      'AI-powered semantic search for the MyGP ecosystem (22M+ users), built on on-premises LLM inference with Ollama.',
      'Churn prediction and prevention models that identify high-risk customers.',
      'Recommendation models for telecom packs, plus campaign, behavioral, and forecasting analytics.',
      'Deployment, scalable inference, monitoring, and CI/CD for the production model lifecycle.',
      'Integration of retrieval-augmented generation (RAG) and conversational AI services.',
    ],
  },
  {
    org: 'ACI Ltd.',
    url: 'https://www.aci-bd.com/',
    role: 'Machine Learning Engineer',
    period: 'Sep 2023 – Mar 2025',
    location: 'Dhaka, Bangladesh',
    summary: 'Turned computer-vision prototypes into systems running on factory floors and in shops.',
    points: [
      'Bangla automatic license-plate recognition, deployed for vehicle entry and exit at 35+ factory sites.',
      'Real-time face recognition (FaceNet embeddings, web service) deployed at 5 Yamaha outlets operated by ACI.',
      'Fine-tuned PaddleOCR for Bangla official-document recognition.',
      'Sales forecasting and field-force performance monitoring; theft-detection and video-analytics proofs of concept.',
    ],
  },
  {
    org: 'Analytics for Cyber Defense (ACyD) Lab',
    orgNote: 'Florida International University',
    role: 'Graduate Research Assistant',
    period: 'Mar 2023 – Jun 2023',
    location: 'Miami, FL, USA',
    points: ['Adversarial attacks on distributed deep-learning models running on edge devices.'],
  },
  {
    org: 'Adorsho Pranisheba Ltd.',
    role: 'IoT Engineer / Embedded Software Developer',
    period: 'Jul 2021 – Nov 2022',
    location: 'Dhaka, Bangladesh',
    summary: 'Where sensing, embedded systems, and machine learning first came together for me.',
    points: [
      'Rumination detection from a jaw-mounted bolus with three 1-D sensors, using RNN, LSTM, and 1D-CNN models.',
      'Barn environment monitoring of temperature, humidity, methane, and CO₂.',
      'Muzzle-based cattle identification for livestock insurance, which became an arXiv preprint.',
    ],
  },
];

export const earlier = [
  { role: 'Intern', org: 'Sajida Foundation', period: 'Sep 2020 – Dec 2020' },
  { role: 'Embedded System Developer', org: 'Pi Labs Bangladesh Ltd.', period: '2018 – 2019' },
];

export const education = [
  {
    degree: 'M.Sc. in Computer Science & Engineering',
    school: 'East West University',
    period: 'Jan 2026 – Present (expected Dec 2026)',
    details: [
      'Track: Data Science & Artificial Intelligence',
      'CGPA: 3.89 / 4.00',
      'Thesis: modality under-utilization in multimodal fusion',
    ],
  },
  {
    degree: 'B.Sc. in Electrical & Electronic Engineering',
    school: 'Bangladesh University of Engineering and Technology (BUET)',
    period: '2016 – 2021',
    details: ['Major: Communication & Signal Processing'],
  },
];

export const skills = [
  { group: 'Languages', items: ['Python', 'SQL', 'C / C++', 'MATLAB'] },
  { group: 'Deep learning', items: ['PyTorch', 'TensorFlow', 'scikit-learn', 'CNNs', 'Transformers / ViT', 'TimeSformer / ViViT', 'GNNs', 'RNN / LSTM', 'Metric learning'] },
  { group: 'Vision & signals', items: ['OpenCV', 'YOLO', 'FaceNet', 'PaddleOCR', 'Spectrogram models', 'Time-series modeling'] },
  { group: 'MLOps & systems', items: ['Docker', 'FastAPI', 'Flask', 'CI/CD', 'Model monitoring', 'ONNX', 'Ollama', 'RAG'] },
  { group: 'Embedded', items: ['Microcontroller firmware', 'Sensor systems', 'Atmel Studio', 'Proteus'] },
];
