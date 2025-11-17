export const personalInfo = {
  firstName: "Kevin",
  lastName: "Mahendra",
  fullName: "Kevin Mahendra",
  role: "Full Stack Developer",
  email: "kevinmahendra.idn@gmail.com",
  phone: "+68 12 3955 3510",
  location: "Samarinda, East Kalimantan, Indonesia",
  tagline: "Building real-world web applications from end to end",

  // Summary paragraphs
  summary: [
    "Self-taught Full Stack Developer passionate about building real-world web applications from end to end.",
    "I focus on creating intuitive, user-friendly interfaces and reliable backends using Next.js, React, TypeScript, and Tailwind CSS.",
    "Adaptable quickly and organized well. Interested in learning the latest web technologies. My future goal is to have a Job as Developer.",
  ],

  // Social Links
  social: {
    linkedin: "https://www.linkedin.com/in/kevin-mahendra-b96153396/",
    github: "https://github.com/thekevinkun?tab=repositories",
  },

  // Languages
  languages: [
    { name: "Indonesia", level: 5 },
    { name: "English", level: 4 },
  ],
};

export const skills = {
  frontend: [
    "Next.js",
    "React.js",
    "Javascript",
    "Typescript",
    "Tailwind CSS",
    "Redux",
    "Framer Motion",
  ],
  backend: ["Node.js", "MongoDB", "PostgreSQL", "Prisma", "Supabase", "Redis"],
  tools: ["Git", "Vercel", "VS Code"],
};

export const education = {
  degree: "Self-Taught Developer",
  field: "Computer Science and Web Development",
  school: "Independent Learning (Self-Taught)",
  startDate: "Jan 2019",
  endDate: "Present",
  description: [
    "Began my journey into software development in 2019 with no prior experience.",
    "Completed CS50: Introduction to Computer Science from Harvard University, gaining a strong foundation in programming logic and computer science concepts through C, algorithms, and data structures.",
    "Progressed to freeCodeCamp, where I learn to mastering HTML, CSS, JavaScript, React, and backend development.",
    "Today, I focus on building real-world web apps using Next.js, React, TypeScript, applying what I learned through self-driven projects.",
  ],
  activities: "Built personal projects alongside online learning communities.",
};

export const projects = [
  {
    id: 1,
    name: "PacoMovies",
    type: "Full Stack",
    description:
      "Modern movie discovery web app built with Next.js (App Router), TypeScript, Tailwind CSS, and TMDb API. Features real-time search, infinite scroll, global trailer modal player, and a MongoDB watchlist. Redis caching used server-side for performance.",
    image: "/images/pacomovies.png",
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
    id: 2,
    name: "Carikopi",
    type: "Full Stack",
    description:
      "Location-based coffee finder built with Next.js and Google Maps/Places APIs. Features automatic geolocation, place autocomplete, map pins with cards, directions, and favorites saved per user. Focus on UX for discovery and responsiveness on mobile.",
    image: "/images/carikopi.png",
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
    id: 3,
    name: "Mahakam Gate Residence",
    type: "Frontend",
    description:
      "A modern UI/UX landing page, featuring a fully responsive design, SEO optimization, and an integrated Mortgage Calculator (Kalkulator KPR Indonesia) to help potential buyers estimate payments in real time.",
    image: "/images/makhakam-gate-residence.png",
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
    id: 4,
    name: "Virtual Reality",
    type: "Frontend",
    description:
      "A Figma design conversion of modern landing page of Virtual Reality with smooth animations",
    image: "/images/virtual-reality.png",
    tech: ["Next.js", "React", "Typescript", "Tailwind CSS", "Framer Motion"],
    links: {
      github: "https://github.com/thekevinkun/virtual-reality",
      live: "https://thekevinkun-virtual-reality.vercel.app/",
    },
    featured: false,
  },
  {
    id: 5,
    name: "Tic Tac Toe",
    type: "Game",
    description:
      "A simple web app game of TicTacToe that could be play vs Computer or Two Players. This game is a training of using Minmax algorithms to setup Computer as players.",
    image: "/images/tic-tac-toe.png",
    tech: ["React", "Vite", "Redux", "Tailwind CSS"],
    links: {
      github: "https://github.com/thekevinkun/tic-tac-toe",
      live: "https://thekevinkun.github.io/tic-tac-toe/",
    },
    featured: false,
  },
];
