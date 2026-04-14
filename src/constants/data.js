import { ICode, IApi, IUi, IDb, IBlock, IMobile, ISearch, ILayers, IChat, IRocket } from '../components/Icons';

export const SKILLS = [
  { name:"REACT.JS",     logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name:"NODE.JS",      logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name:"JAVASCRIPT",   logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name:"EXPRESS.JS",   logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name:"MONGODB",      logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name:"HTML5",        logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name:"CSS3",         logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name:"TAILWIND CSS", logo:"https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
  { name:"GIT",          logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name:"SQL",          logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name:"SOLIDITY",     logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg" },
];

export const SERVICES = [
  { Icon:ICode,   title:"Full-Stack Web Development",     desc:"Building scalable MERN stack applications with clean architecture, secure authentication, and production-ready code tailored to your needs." },
  { Icon:IApi,    title:"RESTful API Development",        desc:"Designing fast, secure, and well-documented RESTful APIs using Node.js & Express.js for seamless frontend-backend communication." },
  { Icon:IUi,     title:"Modern UI/UX Implementation",    desc:"Transforming designs into responsive, accessible, and high-performance interfaces using React.js and Tailwind CSS." },
  { Icon:IDb,     title:"Database Design & Optimization", desc:"Architecting efficient MongoDB and SQL schemas with optimized queries to ensure data integrity and application speed." },
  { Icon:IBlock,  title:"Blockchain DApp Development",    desc:"Building decentralized applications with Solidity smart contracts, MetaMask integration, and Ethereum-based on-chain authentication." },
  { Icon:IMobile, title:"Responsive Web Applications",    desc:"Developing pixel-perfect, cross-device web apps with React Hooks and a modular, maintainable component architecture." },
];

export const EXPERIENCE = [
  {
    role:"Full Stack Intern", company:"Octaloop IT&NS",
    period:"FEB 2026 – PRESENT", location:"Islamabad, Pakistan", type:"INTERNSHIP",
    points:[
      "Contributing to full-stack web application development using the MERN stack in a professional team environment.",
      "Building and maintaining RESTful APIs using Node.js and Express.js with MongoDB for data persistence.",
      "Developing responsive React.js frontends following component-based architecture and modern best practices.",
      "Collaborating with senior developers through code reviews, sprint planning, and agile development workflows.",
    ],
  },
  {
    role:"Web Development Intern", company:"AJK IT Board",
    period:"JULY 2025 – SEP 2025", location:"Muzaffarabad, AJK", type:"INTERNSHIP",
    points:[
      "Completed a structured internship focusing on modern frontend and backend web technologies.",
      "Built interactive web interfaces using HTML, CSS, JavaScript, and React.js.",
      "Gained hands-on experience with responsive design principles and version control using Git/GitHub.",
    ],
  },
];

export const ALL_PROJECTS = [
  {
    cat:"WebApp", type:"WEBSITE/WEBAPP", color:"#2dd4bf", badge:"Final Year Project",
    title:"Land Record Management System",
    desc:"A decentralized application (DApp) for land registry on the Ethereum blockchain — ensuring immutable, fraud-proof property records with MetaMask authentication and smart contract title verification.",
    tags:["React.js","Node.js","Solidity","Ethereum","MetaMask","Tailwind CSS"],
    points:[
      "Built decentralized land registry to prevent property fraud using Ethereum smart contracts.",
      "Integrated MetaMask for secure on-chain transactions and decentralized user authentication.",
      "Engineered smart contracts for real-time title verification and transparent ownership history.",
      "React/Node.js dashboard for high-speed retrieval and visualization of property titles.",
    ],
  },
  {
    cat:"WebApp", type:"WEBSITE/WEBAPP", color:"#8b5cf6", badge:"Personal Project",
    title:"Portfolio Website",
    desc:"A high-performance React.js portfolio showcasing technical projects and professional experience with responsive layouts, smooth-scroll navigation, and optimized modular architecture.",
    tags:["React.js","CSS Flexbox","React Hooks","Responsive Design"],
    points:[
      "Built with React.js using modular, maintainable component architecture.",
      "Designed responsive layouts using CSS Flexbox and Grid for all screen sizes.",
      "Integrated smooth-scroll navigation and interactive UI for enhanced UX.",
    ],
  },
  {
    cat:"WebApp", type:"WEBSITE/WEBAPP", color:"#f97316", badge:"Practice Project",
    title:"Family Golf Website Clone",
    desc:"A pixel-perfect website clone featuring an interactive UI built with HTML and CSS, with JavaScript handling dynamic frontend behavior and simulated backend functionalities.",
    tags:["HTML","CSS","JavaScript"],
    points:[
      "Used HTML and CSS for interactive design and polished user interface.",
      "Implemented JavaScript for dynamic content and frontend functionalities.",
    ],
  },
];

export const WORKFLOW = [
  { num:"1", Icon:ISearch, bg:"#1e3a8a", title:"Discovery & Audit",  desc:"Deep dive into your goals, target audience, and project challenges to define a clear technical strategy." },
  { num:"2", Icon:ILayers, bg:"#134e4a", title:"Strategy & Design",  desc:"Planning the technical roadmap and designing responsive UI wireframes before writing a single line of code." },
  { num:"3", Icon:IChat,   bg:"#3b0764", title:"Full-Stack Build",   desc:"Developing your solution with clean MERN stack code, regular progress updates, and performance tracking." },
  { num:"4", Icon:IRocket, bg:"#431407", title:"Launch & Support",   desc:"Handling deployment, performance optimisation, and post-launch maintenance to ensure smooth operation." },
];

export const FAQS = [
  { q:"What is your typical project timeline?",              a:"A landing page takes 1–2 weeks. A full MERN stack web application typically spans 3–6 weeks depending on features and complexity." },
  { q:"Do you offer post-launch maintenance?",               a:"Yes — I provide ongoing bug fixes, feature additions, and performance optimisations after launch." },
  { q:"Can you work with my existing UI/UX designs?",        a:"Absolutely. I can implement Figma, Adobe XD, or any design file pixel-perfectly into a functional React.js application." },
  { q:"Will my project be mobile responsive?",                a:"Every project I build is fully responsive across all devices and follows modern performance best practices." },
  { q:"What technologies do you specialise in?",             a:"MERN stack (MongoDB, Express, React, Node.js), Tailwind CSS, Solidity/Ethereum for blockchain, and RESTful API development." },
];