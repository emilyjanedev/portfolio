import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import whiskerWatchLandingPage from "@/assets/images/whisker-watch-landingpage.png";
import jennyImage from "@/assets/images/jenny.jpg";
import mariaImage from "@/assets/images/maria.jpg";
import brainstationImage from "@/assets/images/brainstation.png";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import Html5Icon from "@/assets/icons/html5.svg";
import Css3Icon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GitHubIcon from "@/assets/icons/github.svg";
import TailwindIcon from "@/assets/icons/tailwind.svg";
import NextIcon from "@/assets/icons/next.svg";
import NodeIcon from "@/assets/icons/node.svg";
import MySqlIcon from "@/assets/icons/mysql.svg";

export const portfolioProjects = [
  {
    company: "Brainstation",
    year: "2024",
    title: "WhiskerWatch",
    results: [
      {
        title: "Tech Stack: React, Express, MySQL",
      },
      { title: "APIs: Google Maps, Firebase Auth" },
      {
        title: "Reconnecting lost pets and owners",
      },
    ],
    link: "https://whiskerwatch.netlify.app/",
    image: whiskerWatchLandingPage,
    isDeployed: true,
  },
  {
    company: "Brainstation",
    year: "2024",
    title: "Instock: Inventory Management",
    results: [
      { title: "Tech Stack: Reach, Express, MySQL" },
      { title: "Developed collaboratively in a team" },
      { title: "Agile Development, GitFlow, Jira" },
    ],
    link: "https://github.com/emilyjanedev/instock",
    image: lightSaasLandingPage,
    isDeployed: false,
  },
  {
    company: "Brainstation",
    year: "2024",
    title: "Brainflix",
    results: [
      { title: "React, Express, REST API" },
      { title: "Video sharing web app" },
      { title: "Blob management with multer" },
    ],
    link: "https://github.com/emilyjanedev/emily-schur-brainflix",
    image: aiStartupLandingPage,
    isDeployed: false,
  },
];

export const testimonials = [
  {
    name: "Maria Jose Cilloniz",
    position: "Software Engineer @ Brainstation",
    text: "Emily is amazing at guiding teams. She has a talent for breaking down complicated tasks and fostering effective collaboration. When team members like myself needed support, she provided clear guidance and assistance, ensuring everyone stayed on track while maintaining a positive environment.",
    avatar: mariaImage,
  },
  {
    name: "Jenny Kim",
    position: "Full-Stack Developer @ Brainstation",
    text: "Emily's technical skills are impressive, and she consistently demonstrated a strong ability to solve problems efficiently and effectively. Beyond her coding skills, her communication, leadership, and collaboration abilities made her an invaluable part of our group project.",
    avatar: jennyImage,
  },
  {
    name: "Former Teacher",
    position: "Educator @ Brainstation",
    text: "Emily is a strong and confident developer who has demonstrated exceptional team leadership skills as well as great communication skills. She has the ability to jump into any new technical challenge and excel, with great attention to detail.",
    avatar: brainstationImage,
  },
];

export const toolbox = [
  {
    title: "JavaScript",
    iconType: JavaScriptIcon,
  },
  {
    title: "HTML5",
    iconType: Html5Icon,
  },
  {
    title: "CSS3",
    iconType: Css3Icon,
  },
  {
    title: "Tailwind",
    iconType: TailwindIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Next.js",
    iconType: NextIcon,
  },
  {
    title: "Node.js",
    iconType: NodeIcon,
  },
  {
    title: "MySQL",
    iconType: MySqlIcon,
  },
  {
    title: "GitHub",
    iconType: GitHubIcon,
  },
];

export const hobbies = [
  {
    title: "Cycling",
    emoji: "🚴🏻‍♀️",
    left: "5%",
    top: "5%",
  },
  {
    title: "Photography",
    emoji: "📸",
    left: "50%",
    top: "5%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "35%",
    top: "40%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "10%",
    top: "35%",
  },
  {
    title: "Hiking",
    emoji: "🥾",
    left: "70%",
    top: "45%",
  },
  {
    title: "Fitness",
    emoji: "🏃🏻‍♀️",
    left: "5%",
    top: "65%",
  },
  {
    title: "Cats",
    emoji: "🐱",
    left: "45%",
    top: "70%",
  },
];

export const footerLinks = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/emilyjschur/",
  },
  {
    title: "GitHub",
    href: "https://github.com/emilyjanedev",
  },
  {
    title: "Email",
    href: "mailto:ejschur@gmail.com",
  },
];
