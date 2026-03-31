
import {
  logo,
  backend,
  wipro,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";


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
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ui UX Designer",
    icon: creator,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "gsap",
    icon: gsap,
  },
  {
    name: "framer",
    icon: framer,
  },

 
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
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
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [

  {
    title: "Developer",
    company_name: "Wipro Limited",
    icon: wipro,
    iconBg: "#FFFFFF",
    date: "Feb 2026 - Present",
    points: [
      "Provided first-level IT support across enterprise systems, resolving hardware, software, and network issues while maintaining SLA compliance and ensuring minimal downtime for end users.",
      "Managed user accounts and access controls using Active Directory and related tools, handling onboarding/offboarding workflows, permission assignments, and security policy enforcement across the organization.",
      "Monitored and maintained system health by tracking performance metrics, escalating critical incidents to L2/L3 teams, and documenting resolutions in ticketing systems such as ServiceNow or Remedy to build a robust knowledge base.",
    ],
  },

  {
    title: "Full-Stack Developer",
    company_name: "Freelance",
    icon: tekisky,
    iconBg: "#383E56",
    date: "Jan 2023 - present",
    points: [
      "Developing and maintaining web applications using MERN & Java technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "We thought it was impossible to make a website as beautiful as our product, but Tuhin proved us wrong.",
    name: "Northern Hues",
    designation: "Travel Agency",
    company: "NH Travel",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Tuhin does.",
    name: "Dhara Boutique",
    designation: "Ecommerce Business",
    company: "DB",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Tuhin optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Souhardya Ghosal",
    designation: "CE0",
    company: "NH",
    image: thirdTestimonial,
  },
];

const resumeLink = "https://drive.google.com/file/d/1mTksYdv9boMJU0lDsVnJZa8BSF7oCd5h/view?usp=sharing";

const projects = [
  {
    name: "College Enquiry AI Assistant",
    description:
      "A conversational AI assistant designed to help college students with their enquiry needs, providing instant responses and personalized recommendations.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: 
        "mysql",
        color: "white-text-gradient",
      },
      
 
    ],
    image: project2,
    source_code_link: "https://github.com/TuhinB10/college-enquiry-ai-assistant",
  },
  {
    name: "Hotel Booking Website",
    description:
      "A hotel booking website design that allows users to search for hotels, view details, and make reservations online. The website features a user-friendly interface and secure payment options.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "white-text-gradient",
      },
    ],
    image: gearXpert,
    source_code_link: "https://github.com/TuhinB10/welcomeback-MERN",
  },
  {
    name: "Khata App",
    description:
      "KhataApp is a Vite + React application that enables store owners to manage customer dues in real time and send WhatsApp notifications for outstanding balances.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "white-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/TuhinB10/KhataApp",
  },
];

export { services, technologies, experiences, testimonials, projects, resumeLink };
