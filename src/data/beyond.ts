export const pursuits: {
  key: string;
  title: string;
  headline: string;
  body: string;
  video?: { id: string; title: string };
  photo?: boolean;
}[] = [
  {
    key: 'cube',
    title: "Rubik's Cube",
    headline: 'National Champion, 2014',
    body: "I won the Bangladesh National Rubik's Cube Championship in 2014 and set a national record. Speedcubing taught me that a hard problem is mostly a search over well-practised sub-problems.",
  },
  {
    key: 'chess',
    title: 'Chess',
    headline: '2100+ rapid on Chess.com',
    body: 'My rapid rating on Chess.com is above 2100. Opening preparation feels a lot like reading related work; the middlegame is where the experiments happen.',
  },
  {
    key: 'olympiad',
    title: 'Olympiads & contests',
    headline: '40+ competition awards',
    body: 'From divisional math olympiads as a schoolboy to datathons and IEEE challenges today, competitions have been my favourite way to learn fast.',
  },
  {
    key: 'music',
    title: 'Music',
    headline: 'Playing for the joy of it',
    body: 'Guitar, piano, flute, ukulele, harmonica, and mandolin, each one picked up on my own. The photo is from a concert I performed in, and the video is a short piano recording.',
    video: { id: 'nWiwbRfENNE', title: 'Himel playing the piano' },
    photo: true,
  },
];

export const leadership = [
  { role: 'Associate General Secretary', org: 'Satyen Bose Science Club, BUET', period: '2017 – 2018' },
  { role: 'Academic Team Member', org: 'Bangladesh Mathematical Olympiad Committee', period: '2015 – 2016' },
  { role: 'President', org: 'Ideal Science and Technology Aiming Research Council', period: '2012 – 2013' },
];
