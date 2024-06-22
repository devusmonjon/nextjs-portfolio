"use client";
import { SkillDetails, Tag } from "@/components";
import { skills } from "@/data/constants";
import Link from "next/link";
import Image from "next/image";

const Skills = (): JSX.Element => {
    return (
        <section className="w-full bg-gray py-16 md:py-20 2xl:py-24">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
                <div className="flex flex-col items-center gap-4">
                    <div className="self-center">
                        <div className="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
                            <Tag text="Skills" />
                        </div>
                    </div>
                    <p className="text-normal text-lg md:text-xl max-w-xl text-center">
                        The skills, tools and technologies I am really good at:
                    </p>
                </div>
                <div className="grid grid-cols-3 gap-y-4 md:grid-cols-6 md:gap-y-8 lg:grid-cols-8 lg:gap-y-12">
                    {skills.map((skill, idx) => (
                        <SkillDetails key={skill.label} {...skill} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
