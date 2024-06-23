"use client";
import { IProjectDetails } from "@/interfaces/constatnts";
import Image from "next/image";
import { Tag } from "@/components";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const WorkItem = ({
    name,
    description,
    url,
    previewImage,
    technologies,
}: IProjectDetails) => {
    const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
    const openModal = () => {
        setIsModalOpened(true);
    };
    const closeModal = () => {
        setIsModalOpened(false);
    };

    return (
        <div className="rounded-xl bg-gray shadow-md dark:bg-gray-100 dark:shadow-2xl mx-auto flex w-full max-w-6xl flex-col md:flex-row">
            <div className="rounded-xl bg-gray shadow-md dark:bg-gray-100 dark:shadow-2xl mx-auto flex w-full max-w-6xl flex-col md:flex-row">
                <div className="flex items-center justify-center border-gray-100 bg-gray-50 p-8 dark:bg-gray-200 max-md:rounded-t-xl md:w-1/2 lg:p-12 md:rounded-l-xl md:border-r">
                    <button onClick={openModal} title={name} className="">
                        <Image
                            src={previewImage}
                            alt={name}
                            className="rounded-xl shadow-lg transition-transform duration-500 md:hover:scale-105"
                        />
                    </button>
                </div>
                <div className="flex flex-col gap-6 p-8 md:w-1/2 lg:p-12">
                    <p className="text-lg md:text-xl font-semibold text-gray-900">
                        {name}
                    </p>
                    <p className="text-normal text-base">{description}</p>
                    <div className="flex flex-wrap gap-2">
                        {technologies.map((technology) => (
                            <div
                                key={technology}
                                className="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1"
                            >
                                <Tag text={technology} />
                            </div>
                        ))}
                    </div>
                    <button
                        type="button"
                        title="Open"
                        className="self-start rounded-lg p-1.5 hover:bg-gray-50 [&_svg]:stroke-gray-500 transition-all duration-300"
                        onClick={() => setIsModalOpened(true)}
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
                            className="lucide lucide-external-link"
                        >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" x2="21" y1="14" y2="3"></line>
                        </svg>
                    </button>
                </div>
            </div>
            <div
                onClick={closeModal}
                className={`fixed top-0 left-0 h-screen w-screen ${
                    isModalOpened ? "z-[9999] backdrop-blur-xl" : "-z-10"
                } transition-all duration-300 cursor-pointer`}
                title="Exit"
            >
                <button
                    type="button"
                    title="Open"
                    className={`absolute right-[25px] top-[5px] transition-all duration-300 ${
                        isModalOpened ? "opacity-100" : "opacity-0"
                    }`}
                    onClick={closeModal}
                >
                    <IoClose
                        className="lucide lucide-external-link"
                        size={44}
                    />
                </button>
                <iframe
                    src={url}
                    title={name}
                    className={`w-full h-screen ${
                        isModalOpened ? "opacity-100" : "opacity-0"
                    } transition-all duration-300 px-0 lg:p-10 lg:px-10 pt-[3.5rem_!important]`}
                ></iframe>
            </div>
        </div>
    );
};

export default WorkItem;
