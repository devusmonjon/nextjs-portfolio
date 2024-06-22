import React from "react";
import WorkItem from "../work-item/work-item";
import { Tag } from "@/components";
import { projects } from "@/data/constants";

const Work = () => {
    return (
        <section className="w-full bg-gray py-16 md:py-20 2xl:py-24" id="work">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
                <div className="flex flex-col items-center gap-4">
                    <div className="self-center">
                        <div className="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
                            <Tag text="Work" />
                        </div>
                    </div>
                    <p className="text-normal text-lg md:text-xl max-w-xl text-center">
                        Some of the noteworthy projects I have built:
                    </p>
                </div>
                {projects.map((project) => (
                    <WorkItem key={project.name} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Work;
