import type { StaticImageData } from "next/image";

export interface INavLinks {
    name: string;
    href: string;
}

export interface IUserData {
    name: string;
    bio: string;
    location: string;
    status: string;
    photo: string | StaticImageData;
    email: string;
    phone: string;
    socials: { name: string; url: string; icon: JSX.Element }[];
}

export interface ISkills {
    logo: string | StaticImageData;
    darkModeLogo?: string | StaticImageData;
    label: string;
    url: string;
}

export interface IExperienceDetails {
    logo: string | StaticImageData;
    darkModeLogo?: string | StaticImageData;
    logoAlt: string;
    position: string;
    currentlyWorkHere?: boolean;
    startDate: Date;
    endDate?: Date;
    summary: string[];
}

export interface IProjectDetails {
    name: string;
    description: string;
    url: string;
    previewImage: string | StaticImageData;
    technologies: string[];
}

export interface ITestimonialDetails {
    personName: string;
    personAvatar: string | StaticImageData;
    testimonial: string;
    title: string;
}
