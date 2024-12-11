import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";

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
