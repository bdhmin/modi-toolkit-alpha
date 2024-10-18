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
    longBio: `Haijun Xia is an Assistant Professor in the Cognitive Science, Design Lab, and Computer Science & Engineering at the University of California, San Diego. He also directs the Creativity Lab. His research area is Human-Computer Interaction, in which he focuses on augmenting our productivity and creativity. He approaches this through the development of novel representations and interaction techniques. His work has received in total 9 Best Paper Awards or Honorable Mentions at ACM CHI, UIST, and IEEE VIS conferences.\nHe received his Master and Ph.D. from the DGP Lab at the Department of Computer Science, University of Toronto, and Bachelor in Computer Science from Tsinghua University, China.`,
    profilePic: '/profile-pics/haijun.jpg',
    links: [],
  },
  {
    name: 'Brian Hempel',
    title: 'Postdoc',
    shortBio: 'Graphical interfaces for stuff you thought you had to do with code',
    longBio: 'I am a postdoc working on a GUI+code interface for plotting with Sorin Lerner at UCSD. This is a stepping stone towards the long-term vision of elevating graphical interfaces for computation up to a global, operating system-wide functionality. You should be able to compute on everything you see.\nI enjoy discussing programming UIs, programming pain points, and the future of programming.',
    profilePic: '/profile-pics/brian.jpg',
    links: [],
  },
  {
    name: 'Matthew Beaudouin-Lafon',
    title: 'PhD Student',
    shortBio: 'Creativity and productivity support tools',
    longBio: `I'm interested in developing tools that helps users understand the medium in which they work. My recent work includes Color Field, a visualization tool for color filters that helps novices "see" like experts.\nI am also developing a modeling language and notation to help designers think about user interfaces as a medium.\nBefore graduate school, I worked at Skydio where I worked on the Beacon user interface, 3D Scan, and Keyframe Mode.`,
    profilePic: '/profile-pics/matt.jpg',
    links: [],
  },
  {
    name: 'Rima (Yining) Cao',
    title: 'PhD Student',
    shortBio: 'Visual content creation',
    longBio: `I am currently a fourth year Ph.D. student in Cognitive Science at University of California, San Deigo, working with Professor Haijun Xia.\nI build intelligent interactive system to support visual thinking, storytelling, and human creativity in general.\nPriviously, I was a master student at University of Michigan, Ann Arbor, majoring in Data Analasis and Human-Computer Interaction. I worked with Professor Eytan Adar . I got my Bachelor's degree from Tsinghua University, China.`,
    profilePic: '/profile-pics/rima.jpg',
    links: [],
  },
  {
    name: 'Devamardeep Hayatpur',
    title: 'PhD Student',
    shortBio: 'Designing visual programming languages and tools',
    longBio: `I design tools to extend our creative abilities, with the goal of bringing us closer to a future where digital interfaces seamlessly bridge the gap between imagination and creation. At the moment, I'm addressing challenges programmers face in realizing their ideas. Have a look at my curriculum vitae for a complete list of my research and professional experiences.`,
    profilePic: '/profile-pics/devamar.jpg',
    links: [],
  },
  {
    name: 'Peiling Jiang',
    title: 'PhD Student',
    shortBio: 'Information space',
    longBio: `I am a 2nd-year PhD student working on Human-Computer Interaction, advised by Haijun Xia at Creativity Lab, UC San Diego. I design systems that help navigate, manage, and understand information.`,
    profilePic: '/profile-pics/peiling.jpg',
    links: [],
  },
  {
    name: 'Fuling Sun',
    title: 'PhD Student',
    shortBio: 'Data visualization',
    longBio: `My research interests are information visualization and Human-Computer Interaction.\nI received my master's degree from College of Design and Innovation, Tongji University, when I studied and worked at the iDVx Lab with Prof. Nan Cao and Prof. Qing Chen. I received my B.S. from the University of Electronic Science and Technology of China (UESTC) in 2019.`,
    profilePic: '/profile-pics/fuling.jpg',
    links: [],
  },
  {
    name: 'Qisen Yang',
    title: 'PhD Student',
    shortBio: 'Visualization, creation tools, AR',
    longBio: `I am a first-year Ph.D. student at UC San Diego Creativity Lab, advised by Prof. Haijun Xia. My research interests focus on the intersection of Visualization and Human-Computer Interaction, especially how to use visualization techniques to facilitate the process of data fetching and data analysis.\nPreviously, I entered Turing Class( Chu Kochen Honors College ), Zhejiang University and obtained my Bachelor’s degree in CS. During my undergraduate, I work closely with Prof. Zhutian Chen at VCG, Prof. Yingcai Wu at ZJUIDG, Prof. Huamin Qu at HKUST VisLab.`,
    profilePic: '/profile-pics/qisen.jpg',
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
