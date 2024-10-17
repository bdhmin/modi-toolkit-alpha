export interface Member {
  name: string;
  title: string;
  shortBio: string;
  longBio: string;
  profilePic: string;
  links: {
    name: string;
    url: string;
  }[];
};

export const members: Member[] = [
  {
    name: 'Haijun Xia',
    title: 'Assistant Professor',
    shortBio: 'Cognitive Science and Design Lab',
    longBio: `Haijun Xia is an Assistant Professor in the Cognitive Science, Design Lab, and Computer Science & Engineering at the University of California, San Diego. He also directs the Creativity Lab. His research area is Human-Computer Interaction, in which he focuses on augmenting our productivity and creativity. He approaches this through the development of novel representations and interaction techniques. His work has received in total 9 Best Paper Awards or Honorable Mentions at ACM CHI, UIST, and IEEE VIS conferences.\n\nHe received his Master and Ph.D. from the DGP Lab at the Department of Computer Science, University of Toronto, and Bachelor in Computer Science from Tsinghua University, China.`,
    profilePic: '/profile-pics/haijun.jpg',
    links: [],
  },
  {
    name: 'Bryan Min',
    title: 'PhD Student',
    shortBio: 'Malleable interfaces',
    longBio: 'Bryan Min is a PhD student in the Creativity Lab. He is interested in giving end-users more control over their interface. End-users should be able to easily, expressively, and broadly customize their interface, without complex code or searching for settings in a bloated settings panel. Bryan explores novel interaction techniques in foundational design patterns that gives end-users this control to customize their interface. These techniques could either be supported by direct manipulation or natural language queries to AI. Bryan studied computer science in UC San Diego as an undergraduate student.',
    profilePic: '/profile-pics/bryan.jpeg',
    links: [],
  }
]
