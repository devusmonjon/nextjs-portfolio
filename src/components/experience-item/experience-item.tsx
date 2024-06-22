import { IExperienceDetails } from "@/interfaces/constatnts";
import Image from "next/image";
import React from "react";

const ExperienceItem = ({
    position,
    summary,
    logo,
    logoAlt,
    darkModeLogo,
    startDate,
    endDate,
}: IExperienceDetails) => {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    return (
        <div className="rounded-xl bg-gray shadow-md dark:bg-gray-100 dark:shadow-2xl mx-auto flex w-full max-w-4xl flex-col justify-between gap-4 p-8 md:flex-row md:gap-8">
            <div className="max-md:order-1 md:w-1/4">
                <Image
                    src={darkModeLogo ?? logo}
                    alt={logoAlt}
                    loading="lazy"
                    className="max-w-[120px]"
                    style={{
                        color: "transparent",
                    }}
                />
            </div>
            <div className="flex flex-col gap-4 max-md:order-3 md:w-2/4">
                <p className="text-lg md:text-xl font-semibold text-gray-900">
                    {position}
                </p>
                <ul className="flex list-disc flex-col gap-2 md:gap-1">
                    {summary.map((summaryI, idx) => (
                        <li className="text-normal text-base" key={idx}>
                            {summaryI}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="max-md:order-2 md:w-1/4">
                <p className="text-base text-gray-700 md:text-right">
                    {months[startDate.getMonth()].slice(0, 3)}{" "}
                    {startDate.getFullYear()}{" "}
                    {endDate &&
                        `${months[endDate.getMonth()].slice(
                            0,
                            3,
                        )} ${endDate.getFullYear()}`}
                </p>
            </div>
        </div>
    );
};

export default ExperienceItem;
