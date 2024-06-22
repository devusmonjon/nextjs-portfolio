import MyPicture from "/public/images/me.png";

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

import LogoUpwork from "/public/images/logos/logo-upwork.svg";

import ProjectTravel from "/public/images/project-travel.png";
import ProjectTelegram from "/public/images/project-telegram.png";
import ProjectMovie from "/public/images/project-movie.png";

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
    bio: "I'm a Full-Stack MERN(MongoDB, Express.js, React.js, Node.js) developer.",
    location: "Urgut, Samarkad, Uzbekistan",
    status: "Aviable for projects",
    photo: MyPicture,
    socials: [
        {
            name: "GitHub",
            url: "https://github.com/devusmonjon",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-github"
                >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
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
        logo: LogoUpwork,
        logoAlt: "Upwork logo",
        position: "Full Stack Developer",
        startDate: new Date(2021, 10),
        currentlyWorkHere: true,
        summary: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        ],
    },
    {
        logo: LogoUpwork,
        logoAlt: "Greenapex logo",
        position: "Full Stack Developer",
        startDate: new Date(2017, 6),
        endDate: new Date(2021, 9),
        summary: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        ],
    },
    {
        logo: LogoUpwork,
        logoAlt: "UpWork",
        position: "Full Stack Developer",
        startDate: new Date(2015, 11),
        endDate: new Date(2017, 4),
        summary: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        ],
    },
];

const projects: IProjectDetails[] = [
    {
        name: "Fleet Travel shopping kit",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        url: "https://imtihon-nt.vercel.app/",
        previewImage: ProjectTravel,
        technologies: ["HTML", "SASS", "Javascript"],
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
            "Custon Hooks",
        ],
    },
    {
        name: "Telegram Web",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        url: "https://telegramweb.vercel.app/",
        previewImage: ProjectTelegram,
        technologies: ["HTML", "SASS", "JavaScript", "TypeScript"],
    },
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
