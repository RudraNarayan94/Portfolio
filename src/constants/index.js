import project1 from "../assets/projects/project1.jpg";
import project2 from "../assets/projects/project2.jpg";
import project3 from "../assets/projects/project3.jpg";
import project4 from "../assets/projects/project4.jpg";
import project5 from "../assets/projects/project5.jpg";

export const HERO_CONTENT = `I’m Rudra, a backend enthusiast and competitive programmer who turns data into dependable systems. I blend clean architecture with Python, Django, and FastAPI to solve problems at scale. Dive in to see how I build resilient APIs that make ideas come alive.`;

export const ABOUT_TEXT = `I’m Rudra Narayan Sahoo—a final‑year Computer Science undergrad who lives and breathes backend systems and DevOps magic. In the past two years, I’ve architected and shipped five production‑ready apps—from a real‑time multiplayer typing arena to an AI‑powered lab‑report assistant—using Django, FastAPI, PostgreSQL, Redis, and WebSockets. Beyond code, I’ve containerized pipelines with Docker, automated deployments with GitHub Actions and Terraform, and kept our servers humming with Kubernetes. When I’m not optimizing load balancers or solving LeetCode puzzles, you’ll find me mentoring, exploring the latest cloud tools, or contributing to open‑source.`;

export const EXPERIENCES = [
  // {
  //   year: "2023 - Present",
  //   role: "Senior Full Stack Developer",
  //   company: "Google Inc.",
  //   description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
  //   technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  // },
  // {
  //   year: "2022 - 2023",
  //   role: "Frontend Developer",
  //   company: "Adobe",
  //   description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
  //   technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  // },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
    {
    year: "Aug 2025 - Present",
    role: "Backend Developer Intern",
    company: "MultiLipi",
    description: `As a Backend Developer Intern, I focused on system stabilization and scalability for client websites. I significantly improved backend script reliability, resulting in smoother and more consistent page rendering. My work included fixing a large backlog of logged errors, which enhanced overall system stability. I also implemented crucial security checks on load balancers to filter suspicious API traffic and redesigned parts of the database to support multi-language search and global adaptability.`,
    technologies: [
      "Python",
      "JavaScript",
      "Django REST Framework",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "AWS",
      "Docker",
    ],
  },
  // {
  //   year: "June 2025 - July 2025",
  //   role: "DevOps intern",
  //   company: "Ingenious Tech World",
  //   description: `At Ingenious Tech World, I stepped into the world of cloud-native infrastructure. Over the course of the internship, I learned how to build, ship, and manage containerized applications using Docker and Kubernetes. I worked closely on setting up CI/CD pipelines with GitHub Actions, and explored infrastructure as code using Terraform. It was here I developed a deep appreciation for scalable, reliable systems—skills I now carry into every project I build.`,

  //   technologies: [
  //     "AWS",
  //     "Docker",
  //     "Kubernetes",
  //     "GitHub Actions",
  //     "Terraform",
  //   ],
  // },
  // {
  //   year: "June 2024 - July 2024",
  //   role: "Django Developer intern",
  //   company: "CodeBeat",
  //   description: `My time at CodeBeat was all about turning ideas into real, usable web products. I contributed to building a social media platform, managing user data with Django ORM, and ensuring a seamless flow through Django Templates. Alongside that, I crafted a fully functional quiz application. This experience taught me not just Django, but how to turn complexity into clean, maintainable code.`,
  //   technologies: [
  //     "Python",
  //     "Django",
  //     "Django REST Framework",
  //     "Django-ORM",
  //     "Sqlite",
  //     "Django-Templates",
  //   ],
  // },
];

export const PROJECTS = [
  {
    title: "Master Of Keys",
    image: project1,
    link: "https://github.com/RudraNarayan94/MOK",
    description:
      "A multiplayer typing arena where users can challenge friends and compete for the top spot or pratice daily and track the performance.",
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
    image: project3,
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
    image: project5,
    link: "https://github.com/RudraNarayan94/Portfolio",
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwind CSS"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+917749825043",
  email: "rudranarayans10@outlook.com",
};
