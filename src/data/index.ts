import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";

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
    image: darkSaasLandingPage,
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
    text: "Emily is amazing at guiding teams. She has a talent for breaking down complicated tasks and fostering effective collaboration. When team members like myself needed support, she provided clear guidance and assistance, ensuring everyone stayed on track while maintaining a positive environment. I particularly admire her ability to lead with both confidence and empathy, and I learned a great deal from her approach to problem-solving.",
    avatar: memojiAvatar1,
  },
  {
    name: "Jenny Kim",
    position: "Full-Stack Developer @ Brainstation",
    text: "Emily's technical skills are impressive, and she consistently demonstrated a strong ability to solve problems efficiently and effectively. Beyond her coding skills, her communication, leadership, and collaboration abilities made her an invaluable part of our group project. She was always proactive in sharing ideas and offering support, ensuring the team stayed focused and on track toward our goals.",
    avatar: memojiAvatar2,
  },
];
