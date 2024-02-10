import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  mongodb,
  git,
  figma,
  threejs,
  //
  nextjsimg,
  retailwagon,
  freelancer,
  nextjs,
  reactlogo,
  tailwindlogo,
  htmlcssjslogo,
  hoobank,
  backroads,
  ecommerce,
  unsplash,
  mixmaster,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Next js Developer",
    icon: nextjsimg,
  },
  {
    title: "React js Developer",
    icon: reactlogo,
  },
  {
    title: "Tailwind Developer",
    icon: tailwindlogo,
  },
  {
    title: "Html/CSS/Javascript Developer",
    icon: htmlcssjslogo,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Next.js",
    icon: nextjs,
  },
  //////////////////////////////////////////////////////////
  // change made here
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "retailwagon",
    icon: retailwagon,
    iconBg: "#383E56",
    date: "March 2021 - April 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Next.JS Developer",
    company_name: "Freelancer",
    icon: freelancer,
    iconBg: "#E6DEDD",
    date: "April 2023 - Now",
    points: [
      "Developing and maintaining web applications using Next.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "  Learning new technologies",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but this person proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients'  like this guy does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After you optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Banking UI/UX",
    description:
      " HooBank is the best business landing page. Fully Responsive modern UI/UX website in Reactjs and Tailwind CSS.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: hoobank,
    source_code_link: "https://bankingsolution.netlify.app",
  },
  {
    name: "tour plan",
    description:
      "Web application that enables users to plan their tours with variety of option available to them  .",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: backroads,
    source_code_link: "https://tourplann.netlify.app",
  },
  {
    name: "Unsplash Image generator",
    description:
      " Search the images from unsplash and change the site's theme according to browser's selected theme",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "unsplash Api",
        color: "pink-text-gradient",
      },
    ],
    image: unsplash,
    source_code_link: "https://unspashimage113.netlify.app",
  },
  {
    name: "MixMaster",
    description: " search the cocktails and their recipes ",
    tags: [
      {
        name: "reactjs #react-router ",
        color: "blue-text-gradient",
      },
      {
        name: "cocktailDb api #react-query",
        color: "green-text-gradient",
      },
      {
        name: "styled component",
        color: "pink-text-gradient",
      },
    ],
    image: mixmaster,
    // source_code_link: "https://mixmaster113.netlify.app/",
    //made change here
    source_code_link: "https://mixmaster113.netlify.app/",
  },
  {
    name: "E-commerce site",
    description:
      "  E-Commerce Project, where I'm building a online store named Comfy Sloth. In this web application we can filter the products, add them to cart , pay online for the product  and order them  ",
    tags: [
      {
        name: "react-js",
        color: "blue-text-gradient",
      },
      {
        name: "OAuth",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    // source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
