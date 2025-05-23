const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "/",
  title: "Kizito007",
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Kizito",
  role: "expert in  building software solutions",
  description: {
    expertise: `
      Experienced Software Engineer specializing in delivering innovative software solutions | Passionate about technology, logic, and continuous improvement. 
      A Manchester United Fan Who Loves Anime, Gaming, Tourism and Yes, Even Beans! 🤓🚀
      `,
  },
  // resume: "https://serene-bastion-81946.herokuapp.com/",
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
    livePreview: "https://dozie-nwaka.netlify.app/",
  },
  {
    name: "Image repository API",
    description: "An image store and multi-querying api with Cloudinary ",
    stack: ["Express.js", "Cloudinary", "MongoDb"],
    // sourceCode: "https://github.com",
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
    livePreview: "https://boltfliz.vercel.app/",
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
  {
    name: "Campus Life",
    description: "Solving accomodation challenges for students in campus",
    stack: ["React.js", "Node.js", "Express.js", "MongoDb"],
    livePreview: "https://campus-life-test.netlify.app/",
  },
  {
    name: "Fastrash",
    description: "Open sourced with my friends and colleagues on this solution challenge to aid recycling",
    stack: ["Node.js", "Express.js", "MongoDb"],
    livePreview: "https://fastrash.vercel.app/",
  },
  {
    name: "GIF Finder",
    description: "Have fun and search for your favorite GIF",
    stack: ["React.js", "GIPHY API"],
    livePreview: "https://giff-finder.netlify.app/",
  },
  {
    name: "Paystack Integration Article",
    description: "Creating a Simple Payment System in Node.js and MongoDb Using Paystack: A Step-by-Step Guide 💳💸",
    stack: ["Node.js", "Paystack API",],
    livePreview: "https://dev.to/kizito007/creating-a-simple-payment-system-in-nodejs-and-mongodb-using-paystack-a-step-by-step-guide-2mc4",
  },
  {
    name: "An Employee Attendance Management System",
    description: "A simple employee attendance management system which allows you to track employee attendance (in and out) with Facial Recognition A.I and generate reports.",
    stack: ["Nest.js", "Face++", "Next.js", "MongoDb", "Tailwind CSS"],
    livePreview: "https://employee-mgmt-weld.vercel.app/login",
  },
  {
    name: "An Ecommerce Admin Panel",
    description: "An Ecommerce Admin panel built on zero trust architecture & role based authorization access.",
    stack: ["Nest.js", "Face++", "Next.js", "MongoDb", "Tailwind CSS"],
    livePreview: "https://cyb-admin.vercel.app/admin/login",
  },
];

const companies = [
  {
    name: "Kuraway",
    description: "Source with confidence, explore millions of products from thousands of verified merchants and manufacturers worldwide.",
    livePreview: "https://kuraway.com",
  },
  {
    name: "Ghast",
    description: "Optimize Your Connection For Minecraft PvP.",
    livePreview: "https://ghast.io",
  },
  {
    name: "Realance",
    description: "The AI-Powered CRM for Realtors in Africa.",
    livePreview: "https://www.realance.co",
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  "HTML",
  "CSS",
  "Javascript",
  "Typescript",
  "C#",
  "Solidity",
  "React",
  "Redux",
  "Next.js",
  "Hardhat",
  "Bootstrap",
  "Material UI",
  "Git",
  "Github",
  "CI/CD",
  "Microsoft Office",
  "Google Apps",
  "Node.js",
  "Nest.js",
  "MongoDb",
  "Mongoose",
  "Postman",
  "Go",
  "Gin",
  "Azure",
  "AWS"
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "nwakakelechi49@gmail.com",
};

export { header, about, projects, skills, contact, companies };
