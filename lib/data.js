export const personalInfo = {
  firstName: "Kevin",
  lastName: "Mahendra",
  fullName: "Kevin Mahendra",
  role: "Full Stack Developer",
  email: "kevinmahendra.idn@gmail.com",
  phone: "+68 12 3955 3510",
  waFormat: "6281239553510",
  textMessage:
    "Hello Kevin, I found your portfolio and would like to get in touch with you.",
  location: "Samarinda, East Kalimantan, Indonesia",
  tagline: "Building real-world web applications from end to end",

  // Summary paragraphs
  summary: [
    `I’m a self-taught Full Stack Developer focused on building production-grade systems — especially in payments, booking flows, and backend reliability.`,
    `I’ve built and deployed real-world applications, including a booking system with Midtrans payments (webhooks, idempotency), a digital bookstore with Stripe and secure file delivery, and an AI-powered assistant using contextual product data.`,
    `I work primarily with Next.js, React, TypeScript, and PostgreSQL, with a focus on building reliable, secure, and scalable systems.`,
    `Explore my projects below.`,
  ],

  // Social Links
  social: {
    linkedin: "https://www.linkedin.com/in/kevinmahendra1997/",
    github: "https://github.com/thekevinkun?tab=repositories",
  },

  // Languages
  languages: [
    { name: "Indonesia", level: 5 },
    { name: "English", level: 4 },
  ],
};

export const skills = [
  // Frontend
  { name: "Next.js", level: 90, category: "frontend" },
  { name: "React.js", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "JavaScript", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 80, category: "frontend" },

  // Backend
  { name: "Node.js", level: 85, category: "backend" },
  { name: "PostgreSQL", level: 85, category: "backend" },
  { name: "MongoDB", level: 75, category: "backend" },
  { name: "Redis", level: 80, category: "backend" },

  // Core Backend / Systems (HIGH VALUE)
  { name: "Payment Integration", level: 85, category: "core" },
  { name: "Webhooks & Event Handling", level: 85, category: "core" },
  { name: "REST API Design", level: 85, category: "core" },
  { name: "Authentication & Authorization", level: 85, category: "core" },

  // Systems / CS Foundation
  { name: "C/C++", level: 70, category: "systems" },

  // Tools
  { name: "Supabase", level: 85, category: "tools" },
  { name: "Git", level: 85, category: "tools" },

  // Web3
  { name: "Solidity", level: 70, category: "web3" },
  { name: "Ethereum", level: 70, category: "web3" },
];

export const experience = [
  {
    id: 1,
    title: "Independent Full Stack Developer",
    company: "Self-Employed / Personal Projects",
    location: "Remote",
    startDate: "Jan 2019",
    endDate: "Present",
    current: true,
    description: [
      "Built and deployed production-style full-stack applications with a focus on payments, booking systems, backend reliability, and real-time data handling.",
      "Worked on real-world scenarios involving transaction safety, API integration, and secure data access, treating each project as a production system rather than a prototype.",
    ],
    highlights: [
      "Designed and implemented a real-time booking system with Midtrans payments, including webhook validation, payment verification, and idempotency handling to prevent duplicate transactions",
      "Built a digital product platform with Stripe integration and secure file delivery, ensuring only verified users can access purchased content",
      "Developed an AI-powered assistant using contextual product data, enabling dynamic and relevant user interactions within the application",
      "Implemented real-time data synchronization using Supabase subscriptions for live admin dashboard updates",
      "Integrated external APIs such as Google Maps (search, directions) and TMDb, optimizing performance and user experience",
      "Applied Redis caching and efficient data-fetching strategies to improve performance and scalability",
      "Built and deployed multiple full-stack applications using Next.js, TypeScript, and PostgreSQL with a focus on maintainable and scalable architecture",
    ],
  },
];

export const education = {
  degree: "Independent Computer Science & Web Development Education",
  startDate: "Jan 2019",
  endDate: "Present",
  description: [
    "Self-directed education in computer science and modern web development, built through structured coursework and hands-on project development.",
  ],
  courses: [
    {
      name: "CS50 Harvard",
      image: "/images/logos/cs50-logo.png",
      color: "primary",
    },
    {
      name: "freeCodeCamp",
      image: "/images/logos/freecodecamp-logo.png",
      color: "secondary",
    },
    {
      name: "Modern Stack",
      image: "/images/logos/modern-stack-logo.png",
      color: "tertiary",
    },
  ],
  relevantLearning: [
    {
      title: "CS50: Introduction to Computer Science (Harvard University)",
      description:
        "Strong foundation in programming, algorithms, and data structures using C",
    },
    {
      title: "freeCodeCamp",
      description:
        "Full-stack web development covering HTML, CSS, JavaScript, React, and backend fundamentals",
    },
    {
      title: "Modern Web Stack (Self-Directed)",
      description:
        "Next.js, TypeScript, PostgreSQL, and real-world application architecture",
    },
  ],
  appliedLearning: [
    "Full-stack system design",
    "Payment integration and backend validation",
    "Real-time data handling",
    "API integration and performance optimization",
  ],
};

export const projects = [
  {
    id: "fullstack-5",
    name: "Kundesk",
    type: "Full Stack",
    description:
      "A multi-tenant AI customer service SaaS platform for Indonesian SMEs. It enables business owners to upload documents such as menus, FAQs, and price lists to train KUN, an AI assistant that answers customer questions 24/7 in Bahasa Indonesia through chat links, embeddable widgets, and QR codes.",
    image: "/images/projects/kundesk.png",
    tech: [
      "Next.js 16",
      "TypeScript",
      "Neon (PostgreSQL) + Drizzle ORM",
      "Clerk",
      "gpt-4o-mini + text-embedding-3-small + pgvector",
      "Upstash Redis",
      "AWS S3",
      "Posthog",
      "Sentry",
      "Vitest",
      "Playwright",
      "Github Actions (CI/CD)",
      "Resend + React Email",
      "Midtrans (Indonesian payment gateway)",
      "Tailwind CSS",
      "Framer Motion",
    ],
    links: {
      github: "https://github.com/thekevinkun/kundesk",
      live: "https://kundesk.vercel.app/",
    },
    featured: true,
  },
  {
    id: "fullstack-4",
    name: "Kun Bookshop",
    type: "Full Stack",
    description:
      "A full-stack digital bookstore built with the MERN stack and TypeScript. Users can browse, preview, purchase, and read digital books (PDF/EPUB) directly in the browser — and get help from KUN, an AI-powered virtual assistant that can search books, manage your cart, and answer questions in real time. Admins get a full dashboard for managing the entire store.",
    image: "/images/projects/kun-bookshop.png",
    tech: [
      "MERN Stack",
      "TypeScript",
      "OpenAI",
      "Stripe",
      "Docker",
      "Zod",
      "Winston",
      "Tailwind CSS",
      "JSON Web Token",
      "Cloudinary",
      "Helmet",
      "Handlebars",
      "Multer",
      "GraphQL (Apollo Server)",
    ],
    links: {
      github: "https://github.com/thekevinkun/kun-bookshop",
      live: "https://kunbookshop.up.railway.app/",
    },
    featured: true,
  },
  {
    id: "fullstack-3",
    name: "Padel Batu Alam Permai",
    type: "Full Stack",
    description:
      "A full-featured web platform designed for padel court owners and players. Users can browse availability, book courts, and manage their reservations, while owners get a dashboard with real-time insights on revenue, bookings, payments, and court usage.",
    image: "/images/projects/padelbap.png",
    tech: [
      "Next.js 15",
      "TypeScript",
      "Supabase (PostgreSQL)",
      "Supabase Auth",
      "Supabase Realtime (WebSockets)",
      "Midtrans (Indonesian payment gateway)",
      "Upstash Redis",
      "Resend + React Email",
      "Tailwind CSS",
      "Framer Motion",
    ],
    links: {
      github: "https://github.com/thekevinkun/padel-court",
      live: "https://padelbatualampermai.vercel.app/",
    },
    featured: true,
  },
  {
    id: "fullstack-2",
    name: "Carikopi",
    type: "Full Stack",
    description:
      "Location-based coffee finder built with Next.js and Google Maps/Places APIs. Features automatic geolocation, place autocomplete, map pins with cards, directions, and favorites saved per user. Focus on UX for discovery and responsiveness on mobile.",
    image: "/images/projects/carikopi.png",
    tech: [
      "Next.js 14",
      "React 18",
      "TypeScript",
      "Material UI",
      "Leaflet",
      "JWT",
      "MongoDB",
      "Redis",
      "Google Places API",
      "Framer Motion",
    ],
    links: {
      github: "https://github.com/thekevinkun/cari-kopi",
      live: "https://carikopiapp.vercel.app/",
    },
    featured: false,
  },
  {
    id: "fullstack-1",
    name: "PacoMovies",
    type: "Full Stack",
    description:
      "Modern movie discovery web app built with Next.js (App Router), TypeScript, Tailwind CSS, and TMDb API. Features real-time search, infinite scroll, global trailer modal player, and a MongoDB watchlist. Redis caching used server-side for performance.",
    image: "/images/projects/pacomovies.png",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Keen Slider",
      "TMDB API",
      "Redis",
      "MongoDB",
    ],
    links: {
      github: "https://github.com/thekevinkun/paco-movies",
      live: "https://pacomovies.vercel.app/",
    },
    featured: false,
  },
  {
    id: "web3-2",
    name: "Chainkuns",
    type: "Web3",
    description:
      "a Web3 event ticketing platform where tickets are minted as NFTs and owned by users. Each event runs on its own smart contract, enabling on-chain validation and a resale marketplace with automatic royalties. It combines SIWE authentication, Supabase, and blockchain webhooks to sync on-chain and off-chain data.",
    image: "/images/projects/chainkuns.png",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Solidity",
      "Wagmi",
      "Hardhat",
      "Upstash Redis",
      "Alchemy",
      "Viem",
      "Pinata (IPFS)",
      "OpenAI API",
      "RainbowKit",
    ],
    links: {
      github: "https://github.com/thekevinkun/chainkuns",
      live: "https://chainkuns.vercel.app/",
    },
    featured: true,
  },
  {
    id: "web3-1",
    name: "DarkMint",
    type: "Web3",
    description:
      "An AI-powered Web3 certificate minter with a purple/pink cyberpunk aesthetic. Generate custom certificates with AI, store them on IPFS, and mint them as NFTs on the blockchain.",
    image: "/images/projects/darkmint.png",
    tech: [
      "Next.js",
      "TypeScript",
      "Plain CSS",
      "Solidity",
      "Hardhat",
      "OpenAI API",
      "Pinata (IPFS)",
      "Wagmi",
      "Alchemy",
      "RainbowKit",
      "Upstash Redis",
    ],
    links: {
      github: "https://github.com/thekevinkun/darkmint",
      live: "https://darkmint-web.vercel.app/",
    },
    featured: false,
  },
  {
    id: "frontend-4",
    name: "Mahakam Gate Residence",
    type: "Frontend",
    description:
      "A modern UI/UX landing page, featuring a fully responsive design, SEO optimization, and an integrated Mortgage Calculator (Kalkulator KPR Indonesia) to help potential buyers estimate payments in real time.",
    image: "/images/projects/mahakam-gate-residence.png",
    tech: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Formik",
      "Yup",
      "Leaflet",
      "Framer Motion",
    ],
    links: {
      github: "https://github.com/thekevinkun/mahakam-gate-residence",
      live: "https://mahakamgateresidence.vercel.app/",
    },
    featured: true,
  },
  {
    id: "frontend-3",
    name: "Virtual Reality",
    type: "Frontend",
    description:
      "A Figma-to-Code conversion of a stunning Virtual Reality landing page design. It demonstrates professional frontend development skills including responsive design, showcases advanced animation techniques, optimal performance practices, and pixel-perfect design implementation.",
    image: "/images/projects/virtual-reality.png",
    tech: ["Next.js", "React", "Typescript", "Tailwind CSS", "Framer Motion"],
    links: {
      github: "https://github.com/thekevinkun/vr-futureplay",
      live: "https://vr-futureplay.vercel.app/",
    },
    featured: false,
  },
  {
    id: "frontend-2",
    name: "Cat Breeds",
    type: "Frontend",
    description:
      "A modern, interactive web application showcasing detailed information about various cat breeds from around the world. Built with Next.js 15 and enhanced with smooth animations, parallax scroll effect, and an elegant user interface.",
    image: "/images/projects/cat-breeds.png",
    tech: [
      "Next.js",
      "React",
      "JavaScript",
      "CSS",
      "Lottie React",
      "React Intersection Observer",
      "React Responsive",
    ],
    links: {
      github: "https://github.com/thekevinkun/cat-breeds",
      live: "https://catbreedsencyclopedia.vercel.app/",
    },
    featured: false,
  },
  {
    id: "frontend-1",
    name: "Travel Indonesia",
    type: "Frontend",
    description:
      "A beautiful landing page of Indonesian favourite destination built with ReactJS with an interactive Framer Motion and Embla Slider. I design it myself with the help of many template on internet as inspiration.",
    image: "/images/projects/travel-indonesia.png",
    tech: ["React.js", "CSS", "Framer Motion", "Embla Slider"],
    links: {
      github: "https://github.com/thekevinkun/travel-indonesia",
      live: "https://thekevinkun.github.io/travel-indonesia/",
    },
    featured: false,
  },
  {
    id: "game-1",
    name: "Tic Tac Toe",
    type: "Game",
    description:
      "A simple web app game of TicTacToe that could be play vs Computer or Two Players. This game is a training of using Minmax algorithms to setup Computer as players.",
    image: "/images/projects/tic-tac-toe.png",
    tech: ["React", "Vite", "Redux", "Tailwind CSS"],
    links: {
      github: "https://github.com/thekevinkun/tic-tac-toe",
      live: "https://thekevinkun.github.io/tic-tac-toe/",
    },
    featured: false,
  },
  {
    id: "c-3",
    name: "Bank Management System",
    type: "C/C++",
    description:
      "A command-line banking application built in C++ featuring secure user authentication, transaction management, and persistent data storage using SQLite3.",
    image: "/images/projects/bank-management-system.png",
    tech: ["C++", "SQLite3", "OpenSSL (libcrypto)", "GNU Make"],
    links: {
      github: "https://github.com/thekevinkun/bank-management-system",
    },
    featured: true,
  },
  {
    id: "c-2",
    name: "Contact Management System",
    type: "C/C++",
    description:
      "A command-line contact management application built in C, featuring a custom hash table implementation for efficient contact storage and retrieval, with CSV file persistence.",
    image: "/images/projects/contact-management-system.png",
    tech: ["C", "Hash Table", "CSV Parsing", "GNU Make"],
    links: {
      github: "https://github.com/thekevinkun/contact-management-system",
    },
    featured: true,
  },
  {
    id: "c-1",
    name: "Tic Tac Toe",
    type: "C/C++",
    description:
      "An unbeatable Tic Tac Toe game built in C, featuring an AI opponent powered by the Minimax algorithm. Play against a perfect AI that never loses, or challenge a friend in two-player mode.",
    image: "/images/projects/c-tic-tac-toe.png",
    tech: ["C", "Minimax Algorithm"],
    links: {
      github: "https://github.com/thekevinkun/c-tic-tac-toe",
    },
    featured: true,
  },
];
