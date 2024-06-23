"use client";
import React from "react";
import { Tag } from "@/components";
import { userData } from "@/data/constants";
import { useRouter } from "next/navigation";

const copyToClipboard = (text: string) => {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(
            () => {
                console.log("Text copied to clipboard");
            },
            (err) => {
                console.error("Failed to copy text to clipboard", err);
            },
        );
    }
};

const GetInTouch = () => {
    const router = useRouter();

    return (
        <section className="w-full bg-gray py-16 md:py-20 2xl:py-24">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
                <div className="flex flex-col items-center gap-4">
                    <div className="self-center">
                        <div className="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
                            <Tag text="Get in touch" />
                        </div>
                    </div>
                    <p className="text-normal text-lg md:text-xl max-w-xl text-center">
                        What’s next? Feel free to reach out to me if you are
                        looking for a developer, have a query, or simply want to
                        connect.
                    </p>
                </div>
                <div className="flex flex-col items-center gap-6 md:gap-12">
                    <div className="flex flex-col items-center md:gap-4">
                        <div className="flex items-center gap-4 md:gap-5">
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
                                className="h-6 w-6 md:h-8 md:w-8"
                            >
                                <rect
                                    width="20"
                                    height="16"
                                    x="2"
                                    y="4"
                                    rx="2"
                                ></rect>
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                            </svg>
                            <h2 className="text-lg md:text-4xl font-semibold tracking-[-0.02em] text-gray-900">
                                {userData.email}
                            </h2>
                            <button
                                onClick={() => copyToClipboard(userData.email)}
                                title="copy"
                                className="relative flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&amp;_svg]:stroke-gray-600 [&amp;_svg]:hover:stroke-gray-700 [&amp;_svg]:w-8 [&amp;_svg]:h-8"
                            >
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
                                    className="lucide lucide-copy"
                                >
                                    <rect
                                        width="14"
                                        height="14"
                                        x="8"
                                        y="8"
                                        rx="2"
                                        ry="2"
                                    ></rect>
                                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="flex items-center gap-4 md:gap-5">
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
                                className="h-6 w-6 md:h-8 md:w-8"
                            >
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                            <h2 className="text-lg md:text-4xl font-semibold tracking-[-0.02em] text-gray-900">
                                {userData.phone}
                            </h2>
                            <button
                                onClick={() => copyToClipboard(userData.phone)}
                                title="copy"
                                className="relative flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&amp;_svg]:stroke-gray-600 [&amp;_svg]:hover:stroke-gray-700 [&amp;_svg]:w-8 [&amp;_svg]:h-8"
                            >
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
                                    className="lucide lucide-copy"
                                >
                                    <rect
                                        width="14"
                                        height="14"
                                        x="8"
                                        y="8"
                                        rx="2"
                                        ry="2"
                                    ></rect>
                                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <p className="text-normal text-base text-center">
                            You may also find me on these platforms!
                        </p>
                        <div className="flex gap-1">
                            {userData.socials.map((social, idx) => (
                                <button
                                    onClick={() => router.push(social.url)}
                                    className="relative flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&_svg]:stroke-gray-600 [&_svg]:hover:stroke-gray-700 [&_svg]:w-6 [&_svg]:h-6"
                                    key={social.name}
                                    title={social.name}
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

export default GetInTouch;
