import { ExperienceItem, Tag } from "@/components";
import { experiences } from "@/data/constants";
import exp from "constants";
import Image from "next/image";

const Experiences = () => {
    return (
        <section className="w-full py-16 md:py-20 2xl:py-24 bg-gray-50">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
                <div className="flex flex-col items-center gap-4">
                    <div className="self-center">
                        <div className="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
                            <Tag text="Experiences" />
                        </div>
                    </div>
                    <p className="text-normal text-lg md:text-xl max-w-xl text-center">
                        Here is a quick summary of my most recent experiences:
                    </p>
                </div>
                {experiences.map((experience) => (
                    <ExperienceItem key={experience.position} {...experience} />
                ))}
            </div>
        </section>
    );
};

export default Experiences;
