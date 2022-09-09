const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "/",
  title: "Kizito007",
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Kizito",
  kizitoo: "/img/kizitoo.jpg",
  role: "copy ninja of the web {1, 2, 3 ...5}",
  description: {
    expertise: `
      With years of experience in building products that run on the Web. 
      I use JavaScript as my main tool for building solutions and I'm also enthusiatic in upgrading tech.
      As a master of copy pasting and with my logical skills I tend to come up with reasonable algorithims overtime that brings a solution.
      `,
  },
  resume: "https://serene-bastion-81946.herokuapp.com/",
  social: {
    linkedin: "https://linkedin.com/in/kizito-nwaka-b369691a7",
    github: "https://github.com/Kizito007",
    twitter: "https://twitter.com/kelechithe3rd",
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "Dozies portfolio",
    description:
      "Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",
    stack: ["Styled Components", "CSS", "React"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
  },
  {
    name: "Image repository API",
    description:
      "Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",
    stack: ["Express.js", "Cloudinary", "MongoDb"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
  },
  {
    name: "NFT Marketplace",
    description:
      "Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",
    stack: ["Node.js", "ejs", "Google APIs"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
  },
  {
    name: "Boltfliz Media",
    description:
      "Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",
    stack: ["Node.js", "ejs", "Google APIs"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
  },
  {
    name: "Smartcheck Dashboard",
    description:
      "Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",
    stack: ["Node.js", "ejs", "Google APIs"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
  },
  {
    name: "Cloudie",
    description:
      "Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",
    stack: ["Node.js", "ejs", "Google APIs"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
  },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  "HTML",
  "CSS",
  "JavaScript",
  "Solidity",
  "web3",
  "React",
  "Redux",
  "Hardhat",
  "Bootstrap",
  "Material UI",
  "Git",
  "Github",
  "CI/CD",
  "Microsoft Office",
  "Google Apps",
  "Node.js",
  "express.js",
  "MongoDb",
  "Mongoose",
  "Postman",
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "nwakakelechi49@gmail.com",
};

export { header, about, projects, skills, contact };
