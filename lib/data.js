export const personalInfo = {
  firstName: "Kevin",
  lastName: "Mahendra",
  fullName: "Kevin Mahendra",
  role: "Full Stack Developer",
  email: "kevinmahendra.idn@gmail.com",
  phone: "+68 12 3955 3510",
  waFormat: "6281239553510",
  textMessage: "Hello Kevin, I found your portfolio and would like to get in touch with you.",
  location: "Samarinda, East Kalimantan, Indonesia",
  tagline: "Building real-world web applications from end to end",

  // Summary paragraphs
  summary: `Self-taught Full Stack Developer passionate about building real-world web applications from end to end.
    I focus on creating intuitive, user-friendly interfaces and reliable backends using Next.js, React, TypeScript, and Tailwind CSS.
    Adaptable quickly and organized well. Interested in learning the latest web technologies.
    My future goal is to have a Job as Developer.`,

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
  { name: "Next.js", level: 90, category: "frontend" },
  { name: "React.js", level: 90, category: "frontend" },
  { name: "Javascript", level: 85, category: "frontend" },
  { name: "Typescript", level: 80, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Node.js", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "PostgreSQL", level: 70, category: "backend" },
  { name: "Git", level: 85, category: "tools" },
  { name: "Redux", level: 75, category: "tools" },
  { name: "Prisma", level: 70, category: "tools" },
  { name: "Supabase", level: 70, category: "tools" },
];

export const experience = [
  {
    id: 1,
    title: "Independent Developer",
    company: "Open Source & Personal Development",
    location: "Remote",
    startDate: "Jan 2019",
    endDate: "Present",
    current: true,
    description:
      "Self-directed learning journey focused on mastering modern web development through hands-on project building. Developed 5+ production-ready applications showcasing full-stack capabilities, all deployed live and accessible to users. Specialized in React ecosystem (Next.js, TypeScript) with emphasis on performance optimization, responsive design, and scalable architecture. Actively engaged with developer communities, learning industry best practices through real-world application development.",
    highlights: [
      "Built full-stack applications with authentication, database integration (MongoDB, PostgreSQL), and RESTful API development",
      "Implemented advanced performance optimization techniques including Redis caching and infinite scroll pagination",
      "Integrated third-party APIs (TMDb, Google Maps/Places, Google Directions) to deliver feature-rich user experiences",
      "Developed algorithm-based applications demonstrating computer science fundamentals (Minimax algorithm for game AI)",
      "Designed responsive, accessible interfaces with smooth animations using Framer Motion and modern CSS frameworks",
      "Applied TypeScript for type-safe development and better code maintainability across multiple projects",
    ],
  },
];

export const education = {
  degree: "Self-Taught Developer",
  field: "Computer Science and Web Development",
  school: "Independent Learning (Self-Taught)",
  startDate: "Jan 2019",
  endDate: "Present",
  activities: "Built personal projects alongside online learning communities.",
  description: [
    "Began my journey into software development in 2019 with no prior experience.",
    "Completed CS50: Introduction to Computer Science from Harvard University, gaining a strong foundation in programming logic and computer science concepts through C, algorithms, and data structures.",
    "Progressed to freeCodeCamp, where I learn to mastering HTML, CSS, JavaScript, React, and backend development.",
    "Today, I focus on building real-world web apps using Next.js, React, TypeScript, applying what I learned through self-driven projects.",
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
  achievements: [
    "CS50 (Harvard University): Completed comprehensive computer science fundamentals - programming logic, algorithms, data structures, and problem-solving using C",
    "freeCodeCamp: Mastered full-stack web development curriculum including HTML, CSS, JavaScript, React, and backend technologies",
    "Modern Stack Mastery: Self-learned Next.js 15 (App Router), TypeScript, Tailwind CSS, and current industry best practices",
    "Production Experience: Built and deployed 5+ live applications demonstrating full-stack capabilities and real-world problem-solving",
    "Continuous Learning: Actively stay current with latest web technologies, frameworks updates, and development patterns through hands-on projects",
  ],
};

export const projects = [
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
    featured: true,
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
    featured: true,
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
    tech: ["Next.js", "React", "JavaScript", "CSS", "Lottie React", "React Intersection Observer", "React Responsive"],
    links: {
      github: "https://github.com/thekevinkun/cat-breeds",
      live: "https://thekevinkun-cat-breeds.vercel.app/",
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
];