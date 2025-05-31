"use client";
import { userData } from "@/data/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Hero = (): JSX.Element => {
    const router = useRouter();

    return (
        <section className="w-full bg-gray py-16 md:py-20 2xl:py-24" id="hero">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
                <div className="flex flex-col gap-12 md:flex-row">
                    <div className="flex items-center justify-center md:order-last md:flex-grow md:justify-end">
                        <div className="relative h-[300px] w-[280px] md:h-[360px] md:w-[320px]">
                            <Image
                                src={userData.photo}
                                alt={userData.name}
                                loading="lazy"
                                width={1067}
                                height={1067}
                                className="absolute z-10 h-[280px] w-[240px] border-8 border-gray max-md:left-5 md:left-0 md:top-0 md:h-[320px] md:w-[280px] object-cover"
                            />
                            <div className="absolute h-[280px] w-[280px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:right-0 md:h-[320px] md:w-[280px]"></div>
                        </div>
                    </div>
                    <div className="flex max-w-3xl flex-grow flex-col justify-center gap-8 md:order-first md:items-start md:justify-center 2xl:gap-12">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-4xl font-semibold md:font-bold md:text-5xl md:tracking-[-0.02em] lg:text-6xl lg:leading-[72px] text-gray-900">
                                Hi, I&apos;m {userData.name}
                                <span className="inline-block animate-waving-hand">
                                    👋
                                </span>
                            </h1>
                            <p className="text-normal text-base">
                                {userData.bio}
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-2">
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
                                    className="stroke-gray-600"
                                >
                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                                <p className="text-normal text-base">
                                    {userData.location}
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex h-6 w-6 items-center justify-center">
                                    <span className="relative flex h-3 w-3">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                                    </span>
                                </div>
                                <p className="text-normal text-base">
                                    {userData.status}
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-1">
                            {userData.socials.map((social) => (
                                <button
                                    key={social.url}
                                    onClick={() => router.push(social.url)}
                                    title={`${userData.name}'s ${social.name}`}
                                    className="relative flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&amp;_svg]:stroke-gray-600 [&amp;_svg]:hover:stroke-gray-700 [&amp;_svg]:w-6 [&amp;_svg]:h-6"
                                >
                                    {social.icon}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
