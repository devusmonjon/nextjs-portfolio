import MyPicture from "/public/images/photo_2025-09-12 14.56.52.jpeg";

import LogoJavascript from "/public/images/logos/icon-javascript.svg";
import LogoTypescript from "/public/images/logos/icon-typescript.svg";
import LogoReact from "/public/images/logos/icon-react.svg";
import LogoNextjs from "/public/images/logos/icon-nextjs.svg";
import LogoNodejs from "/public/images/logos/icon-nodejs.svg";
import LogoExpress from "/public/images/logos/icon-express.svg";
import LogoExpressLight from "/public/images/logos/icon-express-light.svg";
import LogoNest from "/public/images/logos/icon-nest.svg";
import LogoMongoDB from "/public/images/logos/icon-mongodb.svg";
import LogoSass from "/public/images/logos/icon-sass.svg";
import LogoTailwindcss from "/public/images/logos/icon-tailwindcss.svg";
import LogoGit from "/public/images/logos/icon-git.svg";

import InnosoftSystemsLogo from "/public/images/logos/innosoft-systems.png";

// import ProjectTravel from "/public/images/project-travel.png";
import ProjectTelegram from "/public/images/project-telegram.png";
import ProjectMovie from "/public/images/project-movie.png";
import ProjectMesmer from "/public/images/project-mesmer.png";
import ProjectUzfiltr from "/public/images/project-uzfiltr.png";

import AvatarKrisztian from "/public/images/avatar-krisztian.png";
import AvatarEugen from "/public/images/avatar-eugen.png";
import AvatarDummy from "/public/images/avatar-dummy.svg";

import {
  IExperienceDetails,
  INavLinks,
  IProjectDetails,
  ISkills,
  ITestimonialDetails,
  IUserData,
} from "@/interfaces/constatnts";

const navLinks: INavLinks[] = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Work",
    href: "#work",
  },
  {
    name: "Testimonials",
    href: "#testimonials",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

const userData: IUserData = {
  name: "Usmonjon",
  bio: "I’m a middle-level JavaScript developer specializing in full-stack web development. I work with the MERN stack (MongoDB, Express.js, React.js, Node.js), as well as Next.js and NestJS. I have experience with both relational and non-relational databases, including PostgreSQL and MySQL. I’m also familiar with Docker, CI/CD pipelines using GitHub Actions, and DevOps fundamentals, focusing on building scalable, maintainable, and production-ready applications.",
  location: "Tashkent, Uzbekistan",
  status: "Aviable for projects",
  photo: MyPicture,
  email: "usmonjonhasanov777@gmail.com",
  phone: "+998-(91)-036-8860",
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/devusmonjon",
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='lucide lucide-github'
        >
          <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4'></path>
          <path d='M9 18c-4.51 2-5-2-7-2'></path>
        </svg>
      ),
    },
    {
      name: "Telegram",
      url: "https://devusmonjon.t.me",
      icon: (
        <svg
          viewBox='0 0 192 192'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          stroke='#ffffff'
        >
          <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
          <g
            id='SVGRepo_tracerCarrier'
            stroke-linecap='round'
            stroke-linejoin='round'
          ></g>
          <g id='SVGRepo_iconCarrier'>
            <path
              stroke='#ffffff'
              stroke-width='12'
              d='M23.073 88.132s65.458-26.782 88.16-36.212c8.702-3.772 38.215-15.843 38.215-15.843s13.621-5.28 12.486 7.544c-.379 5.281-3.406 23.764-6.433 43.756-4.54 28.291-9.459 59.221-9.459 59.221s-.756 8.676-7.188 10.185c-6.433 1.509-17.027-5.281-18.919-6.79-1.513-1.132-28.377-18.106-38.214-26.404-2.649-2.263-5.676-6.79.378-12.071 13.621-12.447 29.891-27.913 39.728-37.72 4.54-4.527 9.081-15.089-9.837-2.264-26.864 18.483-53.35 35.835-53.35 35.835s-6.053 3.772-17.404.377c-11.351-3.395-24.594-7.921-24.594-7.921s-9.08-5.659 6.433-11.693Z'
            ></path>
          </g>
        </svg>
      ),
    },
  ],
};

const skills: ISkills[] = [
  {
    label: "Javascript",
    logo: LogoJavascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    label: "Typescript",
    logo: LogoTypescript,
    url: "https://www.typescriptlang.org/",
  },
  {
    label: "React",
    logo: LogoReact,
    url: "https://react.dev/",
  },
  {
    label: "Next.js",
    logo: LogoNextjs,
    url: "https://nextjs.org/",
  },
  {
    label: "Node.js",
    logo: LogoNodejs,
    url: "https://nodejs.org/en",
  },
  {
    label: "Express.js",
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: "https://expressjs.com/",
  },
  {
    label: "Nest.js",
    logo: LogoNest,
    url: "https://nestjs.com/",
  },
  {
    label: "MongoDB",
    logo: LogoMongoDB,
    url: "https://www.mongodb.com/",
  },
  {
    label: "Sass/Scss",
    logo: LogoSass,
    url: "https://sass-lang.com/",
  },
  {
    label: "Tailwindcss",
    logo: LogoTailwindcss,
    url: "https://tailwindcss.com/",
  },
  {
    label: "Git",
    logo: LogoGit,
    url: "https://git-scm.com/",
  },
];

const experiences: IExperienceDetails[] = [
  {
    logo: InnosoftSystemsLogo,
    logoAlt: "Innosoft Systems",
    position: "Full Stack Developer",
    startDate: new Date(2025, 0), // January 2025
    currentlyWorkHere: true,
    summary: [
      "Built and maintained full-stack web applications (CRM/ERP, SaaS platforms, and e-commerce) using Next.js/React on the frontend and NestJS/Node.js on the backend, delivering production-ready features end-to-end.",
      "Designed and optimized REST APIs, data models, and database queries across PostgreSQL/MySQL and MongoDB, improving performance and ensuring clean, scalable architecture.",
      "Developed Telegram bots and Telegram Mini Apps, integrating them with backend services and admin panels to automate workflows and enhance user engagement.",
      "Implemented Docker-based local and production environments and set up CI/CD pipelines with GitHub Actions to automate builds, tests, and deployments for reliable releases.",
    ],
  },
];

const projects: IProjectDetails[] = [
  {
    name: "MESMER - Leading Construction & Engineering Company in Uzbekistan",
    description:
      "MESMER delivers expert EPC solutions in infrastructure and water management across Uzbekistan, backed by 20+ years of innovation and reliability.",
    url: "https://mesmer.uz/",
    previewImage: ProjectMesmer,
    technologies: [
      "NextJS",
      "NextJS API",
      "Server Actions",
      "SSR",
      "CSR",
      "MongoDB",
      "Tailwindcss",
    ],
  },
  {
    name: "Uzfiltr",
    description: "Uzfiltr - Expert in Filtration and Purification",
    url: "https://uzfiltr.uz/",
    previewImage: ProjectUzfiltr,
    technologies: ["NextJS", "Tailwindcss", "Nodejs", "MongoDB", "Expressjs"],
  },
  {
    name: "Movie Subscription App",
    description: "Movie Subscription app, explore latest movies.",
    url: "https://movie-subscription-app.vercel.app/",
    previewImage: ProjectMovie,
    technologies: [
      "NextJS",
      "TypeScript",
      "Tailwindcss",
      "Firebase",
      //   "Custom Hooks",
    ],
  },
//   {
//     name: "Movie Subscription App",
//     description: "Movie Subscription app, explore latest movies.",
//     url: "https://movie-subscription-app.vercel.app/",
//     previewImage: ProjectMovie,
//     technologies: [
//       "NextJS",
//       "TypeScript",
//       "Tailwindcss",
//       "Firebase",
//       //   "Custom Hooks",
//     ],
//   },
  //   {
  //     name: "Telegram Web",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //     url: "https://telegramweb.vercel.app/",
  //     previewImage: ProjectTelegram,
  //     technologies: ["HTML", "SASS", "JavaScript", "TypeScript"],
  //   },
];

const testimonials: ITestimonialDetails[] = [
  {
    personName: "Krisztian Gyuris",
    personAvatar: AvatarKrisztian,
    title: "Founder - inboxgenie.io",
    testimonial:
      "Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.",
  },
  {
    personName: "Eugen Esanu",
    personAvatar: AvatarEugen,
    title: "Founder - shosho.design",
    testimonial:
      "Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.",
  },
  {
    personName: "Joe Matkin",
    personAvatar: AvatarDummy,
    title: "Freelancer",
    testimonial:
      "Sagar was extremely easy and pleasant to work with and he truly cares about the project being a success. Sagar has a high level of knowledge and was able to work on my MERN stack application without any issues.",
  },
];

export { navLinks, userData, skills, experiences, projects, testimonials };
