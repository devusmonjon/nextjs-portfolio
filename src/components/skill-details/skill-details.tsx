import { ISkills } from "@/interfaces/constatnts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SkillDetails = ({
    url,
    logo,
    darkModeLogo,
    label,
}: ISkills): JSX.Element => {
    return (
        <div className="flex flex-col items-center gap-2">
            <Link href={url} target="_blank">
                <Image
                    src={darkModeLogo ?? logo}
                    alt={label}
                    loading="lazy"
                    className="transition-transform duration-300 md:hover:scale-110"
                    style={{
                        color: "transparent",
                    }}
                />
            </Link>
            <p className="text-normal text-base md:text-lg">{label}</p>
        </div>
    );
};

export default SkillDetails;
