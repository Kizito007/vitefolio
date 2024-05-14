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
    name: "Prophetic Prayers for children",
    description: "A prayer journal build for the army of david ministires",
    stack: ["Figma", "FLutter"],
    sourceCode: "https://github.com/thejosh1/prophetic-prayers",
    livePreview: "https://play.google.com/store/apps/details?id=com.zirite.prophetic_prayers&pcampaignid=web_share",
  },
  {
    name: "Ruach",
    description: "Ruach app, is designed to be an app that empowers a believers by providing an array of spiritual messages and sounds in order to equip a believer with a simlitude of fellowship by means of modern technology.",
    stack: ["Figma", "FLutter"],
    livePreview: "https://play.google.com/store/apps/details?id=com.zirite.prophetic_prayers&pcampaignid=web_share",
  }
  {
    name: "Adeppo-Group",
    description: "A static website for an oil and gas company",
    stack: ["Html", "Css", "Javascript"],
    sourceCode: "https://github.com/thejosh1/Adeppo",
    livePreview: "https://lighthearted-beignet-5a4c8a.netlify.app/#",
  },
  {
    name: "Food Delivery Demo",
    description:
      "A personal food delivery app.. a hobby project",
    stack: ["FLutter", "Laravel(php)"],
    livePreview: "https://github.com/thejosh1/Food_Delivery_demo",
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
