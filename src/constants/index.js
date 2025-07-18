import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I’m Rudra, a backend enthusiast and competitive programmer who turns data into dependable systems. From crafting  multiplayer platforms to automating medical insights, I blend clean architecture with Python, Django, and FastAPI to solve problems at scale. Dive in to see how I build resilient APIs that make ideas come alive.`;

export const ABOUT_TEXT = `I’m Rudra Narayan Sahoo—a final‑year Computer Science undergrad who lives and breathes backend systems and DevOps magic. In the past two years, I’ve architected and shipped five production‑ready apps—from a real‑time multiplayer typing arena to an AI‑powered lab‑report assistant—using Django, FastAPI, PostgreSQL, Redis, and WebSockets. Beyond code, I’ve containerized pipelines with Docker, automated deployments with GitHub Actions and Terraform, and kept our servers humming with Kubernetes. When I’m not optimizing load balancers or solving LeetCode puzzles, you’ll find me mentoring, exploring the latest cloud tools, or contributing to open‑source.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Master Of Keys",
    image: project1,
    link: "https://github.com/RudraNarayan94/MOK",
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["React", "Django", "DRF", "Redis", "Celery", "PostgreSQL"],
  },
  {
    title: "MurffyLab",
    image: project2,
    link: "https://github.com/RudraNarayan94/MurffyLab",
    description:
      "MurffyLab is a FastAPI-based backend service for the Kinkare medical AI application. It simplifies complex medical reports by providing AI-powered analysis, text-to-speech conversion, and multilingual support.",
    technologies: ["React", "FastAPI", "Pydantic", "Murf.ai", "Twillo"],
  },
  {
    title: "Echoes",
    image: project4,
    link: "https://github.com/RudraNarayan94/Echoes",
    description: "A social media platform for sharing pictures and messages.",
    technologies: ["HTML", "CSS", "Bostrap", "Django"],
  },
  {
    title: "Blogbuster",
    image: project4,
    link: "https://github.com/RudraNarayan94/Blogbuster",
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, and user profiles.",
    technologies: ["React", "Tailwind CSS", "Appwrite"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    link: "https://github.com/RudraNarayan94/Portfolio",
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwind CSS"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
