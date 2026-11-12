import { ICode, IApi, IUi, IDb, IBlock, IMobile, ISearch, ILayers, IChat, IRocket } from '../components/Icons';

export const SKILLS = [
  { name:"NEXT.JS",     logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name:"REACT.JS",    logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name:"TYPESCRIPT",  logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name:"JAVASCRIPT",  logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name:"NODE.JS",     logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name:"EXPRESS.JS",  logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name:"TAILWIND CSS",logo:"https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
  { name:"MONGODB",     logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name:"MYSQL",       logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name:"PRISMA",      logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" },
  { name:"LARAVEL",     logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
  { name:"SOLIDITY",    logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg" },
  { name:"SHOPIFY",     logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopify/shopify-original.svg" },
  { name:"GIT",         logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
];

export const SERVICES = [
  { Icon:ICode,   title:"Full-Stack Web Development",    desc:"Building scalable Next.js and MERN stack applications with clean component architecture, secure authentication, and high-performance SSR/SSG." },
  { Icon:IApi,    title:"RESTful API & Backend Systems", desc:"Designing fast, secure, and well-documented backend services and REST APIs using Node.js, Express.js, and Laravel." },
  { Icon:IUi,     title:"Modern UI/UX Implementation",   desc:"Transforming complex designs into responsive, accessible, and pixel-perfect interfaces using React.js, Tailwind CSS, and shadcn/ui." },
  { Icon:IDb,     title:"Database Design & ORM Modeling",desc:"Architecting efficient MongoDB, MySQL, and PostgreSQL databases optimized with Prisma ORM for maximum data integrity and speed." },
  { Icon:IBlock,  title:"Blockchain DApp Development",   desc:"Building decentralized applications with Solidity smart contracts, MetaMask integration, and Ethereum-based on-chain title tracking." },
  { Icon:IMobile, title:"E-Commerce & CRO Solutions",    desc:"Developing custom e-commerce web applications, Shopify setups, and conversion rate optimization (CRO) architectures." },
];

export const EXPERIENCE = [
  {
    role:"Full-Stack Web Developer", company:"TechnoBlick (SMC-Private) Limited",
    period:"2026 – PRESENT", location:"Islamabad & Lahore, Pakistan", type:"FULL-TIME",
    points:[
      "Architecting and deploying scalable enterprise web platforms, custom dashboards, and e-commerce apps using Next.js, React, TypeScript, and Node.js.",
      "Engineered production web applications for international and local clients including Zaivar Jewellery, Trio Energy UK, FundMil, and ListPak.",
      "Implementing technical SEO architectures, internationalization (i18n) localization, and performance optimizations to maximize conversion metrics.",
    ],
  },
  {
    role:"Full Stack Intern", company:"Octaloop IT&NS",
    period:"FEB 2026 – 2026", location:"Islamabad, Pakistan", type:"INTERNSHIP",
    points:[
      "Contributed to full-stack web application development using the MERN stack in a professional software house environment.",
      "Built and maintained secure RESTful APIs using Node.js and Express.js backed by MongoDB databases.",
      "Developed responsive React.js frontends following modular component architectures and modern state management patterns.",
    ],
  },
  {
    role:"Web Development Intern", company:"AJK IT Board",
    period:"JULY 2025 – SEP 2025", location:"Muzaffarabad, AJK", type:"INTERNSHIP",
    points:[
      "Completed a rigorous web engineering internship focusing on frontend interfaces and structured backend CRUD workflows.",
      "Built interactive web applications utilizing HTML5, CSS3, JavaScript, PHP, and MySQL administration.",
      "Streamlined administrative digital workflows and maintained version control standards using Git and GitHub.",
    ],
  },
];

export const ALL_PROJECTS = [
  {
    cat:"WebApp", type:"AGENCY PLATFORM", color:"#2dd4bf", badge:"Flagship Project",
    title:"TechnoBlick Digital Agency Platform",
    desc:"The official enterprise web platform for TechnoBlick (SMC-Private) Limited, featuring responsive UI components, service showcases, portfolio case studies, and optimized performance architecture.",
    tags:["Next.js","React","TypeScript","Tailwind CSS","Vercel"],
    link:"https://technoblick.com",
    points:[
      "Engineered full-stack responsive web platform architecture with high-performance routing.",
      "Implemented technical SEO metadata and structured content layouts for agency visibility.",
      "Designed clean modular UI components to present enterprise development services.",
    ],
  },
  {
    cat:"WebApp", type:"ECOMMERCE & WEBAPP", color:"#14b8a6", badge:"Production Launch",
    title:"Zaivar Jewellery E-Commerce Platform",
    desc:"A high-end production e-commerce web platform built for Zaivar Jewellery (zaivar.store), featuring seamless product browsing, secure checkout workflows, and fully optimized performance on Vercel.",
    tags:["Next.js","React","Tailwind CSS","Node.js","Vercel"],
    link:"https://zaivar.store",
    points:[
      "Deployed production-ready store architecture with custom domain configuration on Vercel.",
      "Implemented responsive product grid layouts and optimized asset loading for fast Core Web Vitals.",
      "Engineered smooth category filtering and cart state management workflows.",
    ],
  },
  {
    cat:"WebApp", type:"ENTERPRISE WEBAPP", color:"#8b5cf6", badge:"Client Project",
    title:"Trio Energy B2B Utilities Consultancy Portal",
    desc:"A custom B2B web platform engineered for Trio Energy Limited based in Nottingham, UK, streamlining complex utility consultancy workflows, client data capture, and service management.",
    tags:["React.js","Next.js","TypeScript","Tailwind CSS","Node.js"],
    link:"https://trioenergy.co.uk/",
    points:[
      "Developed custom client onboarding pipelines and interactive business inquiry forms.",
      "Built secure dashboard components tailored for UK corporate energy management.",
      "Optimized site responsiveness and mobile usability for field agents and clients.",
    ],
  },
  {
    cat:"WebApp", type:"BLOCKCHAIN DAPP", color:"#38bdf8", badge:"Final Year Project",
    title:"Etherra Land Record Management System",
    desc:"A decentralized application (DApp) for land registry on the Ethereum blockchain — ensuring immutable, fraud-proof property records with MetaMask authentication and smart contract verification.",
    tags:["React.js","Node.js","Solidity","Ethereum","MetaMask","Tailwind CSS"],
    link:"https://github.com/mohsanali2734",
    points:[
      "Built decentralized land registry to prevent property fraud using Ethereum smart contracts.",
      "Integrated MetaMask for secure on-chain transactions and user authentication.",
      "Engineered smart contracts for real-time title verification and transparent history tracking.",
    ],
  },
  {
    cat:"WebApp", type:"FINANCIAL PORTAL", color:"#f97316", badge:"Market Intelligence",
    title:"FundMil Financial News & Intelligence Portal",
    desc:"A specialized financial intelligence and news web portal designed to deliver real-time market data, structured financial updates, and analytics insights in a clean, high-performance UI.",
    tags:["Next.js","React","Tailwind CSS","REST APIs","Node.js"],
    link:"https://fundmil.com/",
    points:[
      "Designed data-dense financial dashboards with clear visual categorization.",
      "Optimized server-side rendering (SSR) for lightning-fast news article indexing and delivery.",
    ],
  },
  {
    cat:"WebApp", type:"HEALTHCARE PLATFORM", color:"#10b981", badge:"Medical Tech",
    title:"eHealth PK Home Healthcare Services",
    desc:"A web platform built for in-home medical healthcare providers operating across Pakistan, allowing patients to seamlessly browse medical care packages and request professional home visits.",
    tags:["React.js","Node.js","Express","MongoDB","Tailwind CSS"],
    link:"https://ehealthpk.com/",
    points:[
      "Created an accessible booking interface for patients seeking home-based medical care.",
      "Structured backend data management for nurse and physician appointment coordination.",
    ],
  },
  {
    cat:"WebApp", type:"MARKETPLACE & DIRECTORY", color:"#ec4899", badge:"Directory Platform",
    title:"Paklisted Business Directory & Marketplace",
    desc:"A comprehensive business directory, local services marketplace, and professional network portal indexing verified service providers and local business listings across Pakistan.",
    tags:["Next.js","TypeScript","Tailwind CSS","Prisma","MySQL"],
    link:"https://paklisted.com/",
    points:[
      "Built advanced search and filtering filters for local businesses and categories.",
      "Structured efficient database schemas using Prisma ORM for rapid location and keyword queries.",
    ],
  },
];

export const WORKFLOW = [
  { num:"1", Icon:ISearch, bg:"#1e3a8a", title:"Discovery & Audit",   desc:"Deep dive into your business goals, technical requirements, and target audience to map out the optimal architecture." },
  { num:"2", Icon:ILayers, bg:"#134e4a", title:"Strategy & Design",   desc:"Planning component structures, database schemas, and responsive UI wireframes before writing code." },
  { num:"3", Icon:IChat,    bg:"#3b0764", title:"Full-Stack Build",    desc:"Developing your application using clean Next.js/MERN stack code, continuous testing, and regular progress updates." },
  { num:"4", Icon:IRocket, bg:"#431407", title:"Launch & Support",    desc:"Handling production deployment, SEO optimization, and ongoing maintenance to guarantee peak performance." },
];

export const FAQS = [
  { q:"What is your typical project timeline?",                 a:"A professional landing page takes 1–2 weeks. A full-stack Next.js or MERN stack application typically spans 3–6 weeks depending on feature complexity." },
  { q:"Do you offer post-launch maintenance?",                  a:"Yes — I provide ongoing bug fixes, performance monitoring, feature expansions, and technical support post-launch." },
  { q:"Can you work with my existing UI/UX designs or Figma?",   a:"Absolutely. I translate Figma, Adobe XD, or custom design files pixel-perfectly into responsive, high-performance web apps." },
  { q:"Will my project be mobile responsive and SEO-friendly?",  a:"Every project is built mobile-first, fully responsive across all devices, and optimized with best-practice technical SEO." },
  { q:"What technologies do you specialize in?",                a:"Next.js, React, TypeScript, Node.js, Express, MongoDB, MySQL/Prisma, Laravel, Solidity/Ethereum, and Tailwind CSS." },
];