export type Publication = {
  title: string;
  authors: string[];
  venue: string;
  year: number | string;
  status?: string;
  links?: { label: string; url: string }[];
  bibtex?: string;
  summary?: string;
};

// Name variants rendered in bold in author lists.
export const me = ['H. Z. Islam'];

export const publications: Publication[] = [
  {
    title: 'Muzzle-Based Cattle Identification System Using Artificial Intelligence (AI)',
    authors: [
      'H. Z. Islam', 'S. Khan', 'S. K. Paul', 'S. I. Rahi', 'F. H. Sifat',
      'M. M. H. Sany', 'M. S. A. Sarker', 'T. Anam', 'I. H. Polas',
    ],
    venue: 'arXiv preprint arXiv:2407.06096',
    year: 2024,
    summary:
      'A muzzle-print biometric pipeline: YOLO-based muzzle detection followed by FaceNet-style metric embeddings. Trained on 32,374 images of 826 cattle, reaching 96.49% accuracy and a 97.33% F1 score.',
    links: [
      { label: 'arXiv', url: 'https://arxiv.org/abs/2407.06096' },
      { label: 'PDF', url: 'https://arxiv.org/pdf/2407.06096' },
    ],
    bibtex: `@article{islam2024muzzle,
  title   = {Muzzle-Based Cattle Identification System Using Artificial Intelligence (AI)},
  author  = {Islam, H. Z. and Khan, S. and Paul, S. K. and Rahi, S. I. and Sifat, F. H. and
             Sany, M. M. H. and Sarker, M. S. A. and Anam, T. and Polas, I. H.},
  journal = {arXiv preprint arXiv:2407.06096},
  year    = {2024}
}`,
  },
  {
    title:
      'Possible use of seaweed (Gracilaria tenuistipitata var. liui) to the reduction of enteric methane emissions from dairy cattle',
    authors: ['M. S. A. Sarker', 'M. S. Anwar', 'H. Z. Islam', 'M. R. Alam', 'H. I. Reefat'],
    venue: 'Veterinary Research Notes, 2(11): 78–85',
    year: 2022,
    links: [{ label: 'DOI', url: 'https://doi.org/10.5455/vrn.2022.b18' }],
    bibtex: `@article{sarker2022seaweed,
  title   = {Possible use of seaweed (Gracilaria tenuistipitata var. liui) to the reduction of enteric methane emissions from dairy cattle},
  author  = {Sarker, M. S. A. and Anwar, M. S. and Islam, H. Z. and Alam, M. R. and Reefat, H. I.},
  journal = {Veterinary Research Notes},
  volume  = {2},
  number  = {11},
  pages   = {78--85},
  year    = {2022},
  doi     = {10.5455/vrn.2022.b18}
}`,
  },
];

export const inPreparation = [
  {
    title: 'Manuscript on diagnosing branch under-utilization in multimodal fusion',
    note: 'From my M.Sc. thesis. In preparation; details shared on request.',
  },
];
