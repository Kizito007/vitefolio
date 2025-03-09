const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "/",
  title: "Devjosh",
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Joshua",
  role: "also known as devjosh",
  description: {
    expertise: ` 
      I am a web developer and mobile applications developer. I have adequate experience building real world applications 
      With my logical skills I tend to come up with reasonable algorithims overtime that brings a solution.
      `,
  },
  // resume: "https://serene-bastion-81946.herokuapp.com/",
  social: {
    linkedin: "https://www.linkedin.com/in/joshua-awom-8a8182177",
    github: "https://github.com/theJosh1",
    twitter: "https://twitter.com/jocalex8",
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "CKash",
    description: "A loan and real estate app",
    stack: ["Figma", "FLutter"],
    sourceCode: "https://github.com/ceeno007/ckashng.git",
    livePreview: "https://appetize.io/app/b_lnyi26ru5iwkpctuyjgymfmj4u",
  },
  {
    name: "RichbonApp",
    description: "This App includes the management of Stock Items for the Sales and Inventory department of Richbon Nigeria Ltd. Creation, Modifying and Sales of Items are done using this App",
    stack: ["Figma", "FLutter"],
    livePreview: "https://play.google.com/store/apps/details?id=com.richbonerp.richbonapp&pcampaignid=web_share",
  },
  {
    name: "Adeppo-Group",
    description: "A static website for an oil and gas company",
    stack: ["Html", "Css", "Javascript"],
    sourceCode: "https://github.com/thejosh1/Adeppo",
    livePreview: "https://lighthearted-beignet-5a4c8a.netlify.app/#",
  },
  {
    name: "GIIN",
    description: "A social impact website",
    stack: ["C#", "MySql"],
    //sourceCode: "https://giin.org.ng",
    livePreview: "https://giin.org.ng",
  },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  "HTML",
  "CSS",
  "Javascript",
  "Flutter",
  "React",
  "Redux",
  "Bootstrap",
  "Git",
  "Github",
  "CI/CD",
  "Microsoft Office",
  "Google Apps",
  "Postman",
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "joshuaawom062@gmail.com",
};

export { header, about, projects, skills, contact };
