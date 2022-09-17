const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "/",
  title: "Kizito007",
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Kizito",
  role: "copy ninja of the web {1, 2, 3 ...}",
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
    description: "Partnered with the UI Designer to build his portfolio",
    stack: ["Figma", "Styled Components", "CSS", "React"],
    sourceCode: "https://github.com/Kizito007/for-dozie",
    livePreview: "https://dozie.design",
  },
  {
    name: "Image repository API",
    description: "An image store and multi-querying api with Cloudinary ",
    stack: ["Express.js", "Cloudinary", "MongoDb"],
    sourceCode: "https://github.com",
    livePreview: "https://documenter.getpostman.com/view/9887316/TVzViGQR",
  },
  {
    name: "NFT Marketplace",
    description: "A decentralized NFT trading smart contract",
    stack: ["Node.js", "Solidity", "Hardhat", "The Graph", "Next.js"],
    sourceCode: "https://github.com/Kizito007/hardhat-nft-marketplace-fcc",
  },
  {
    name: "Boltfliz Media",
    description:
      "Collaborated with a team of awesome individuals to build a media download platform",
    stack: ["Node.js", "Typescript", "Next.js"],
    livePreview: "https://boltfliz.media",
  },
  {
    name: "Smartcheck Dashboard",
    description: "A live statistics dashboard UI",
    stack: ["React.js", "MUI"],
    sourceCode: "https://github.com/Kizito007/smartcheck-dashboard",
    livePreview: "https://smartcheck-dashboard.netlify.app",
  },
  {
    name: "City Wide Stores API",
    description: "An e-commerce API for the merchandise of iPhone products",
    stack: ["Node.js", "Express.js", "MongoDb"],
    sourceCode: "https://github.com/Kizito007/city-w.s-backend",
    livePreview: "https://documenter.getpostman.com/view/9887316/2s7YfR7sn7",
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
