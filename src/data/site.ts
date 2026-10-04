// Central profile data. Edit text here; pages read from these exports.

export const profile = {
  name: 'Hasan Zohirul Islam',
  nickname: 'Himel',
  title: 'ML Engineer & Graduate Researcher',
  tagline: 'Multimodal learning · Computer vision · Signal processing · MLOps',
  affiliation: [
    { role: 'M.Sc. student, CSE', org: 'East West University', url: 'https://www.ewubd.edu/' },
    { role: 'MLOps Engineer', org: 'Grameenphone (Telenor Group)', url: 'https://www.grameenphone.com/' },
  ],
  location: 'Dhaka, Bangladesh',
  email: 'hzihimel@gmail.com',
  description:
    'Hasan Zohirul Islam (Himel) is an ML engineer and graduate researcher working on multimodal learning, computer vision, and signal processing, with 4+ years of production AI experience.',
};

export const links = {
  email: `mailto:${profile.email}`,
  cv: '/cv.pdf',
  scholar: 'https://scholar.google.com/citations?user=6kzfsccAAAAJ&hl=en',
  github: 'https://github.com/hziHimel',
  linkedin: 'https://www.linkedin.com/in/hzihimel/',
  arxiv: 'https://arxiv.org/abs/2407.06096',
};

export const nav = [
  { href: '/', label: 'About' },
  { href: '/research/', label: 'Research' },
  { href: '/publications/', label: 'Publications' },
  { href: '/experience/', label: 'Experience' },
  { href: '/projects/', label: 'Projects' },
  { href: '/beyond/', label: 'Beyond Work' },
];

export const interests = [
  'Multimodal learning & fusion',
  'Representation learning',
  'Optimization dynamics',
  'Computer vision',
  'Biomedical signal processing',
  'Trustworthy & diagnosable AI',
  'Edge AI & robotics perception',
];

export const highlights = [
  { value: '4+', label: 'years building production ML' },
  { value: '35+', label: 'factory sites running my ALPR system' },
  { value: '22M+', label: 'users on the platform I support' },
  { value: '3.89', label: 'M.Sc. CGPA out of 4.00' },
];

// Newest first. Dates are shown as written.
export const news = [
  { date: 'Jan 2026', text: 'Started the M.Sc. in Computer Science & Engineering at East West University, focusing on data science and AI.' },
  { date: '2025', text: 'Our AI call-center assistant won <strong>1st runner-up</strong> at the Telenor Global Hackathon.' },
  { date: 'Apr 2025', text: 'Joined Grameenphone (Telenor Group) as an MLOps Engineer.' },
  { date: '2024', text: 'Our team ACI_ServerDown won the <strong>Robi Axiata Datathon 3.0</strong> among 1,000+ teams.' },
  { date: '2024', text: 'Placed <strong>2nd</strong> in the 2nd AVA MIPR IEEE Video Classification Challenge.' },
  { date: 'Jul 2024', text: 'Preprint on muzzle-based cattle identification released on <a href="https://arxiv.org/abs/2407.06096">arXiv</a>.' },
];
