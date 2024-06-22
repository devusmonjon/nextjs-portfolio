import Image from "next/image";
import Link from "next/link";
import { Tag } from "@/components";

const About = (): JSX.Element => {
    return (
        <section
            className="w-full py-16 md:py-20 2xl:py-24 bg-gray-50"
            id="about"
        >
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
                <div className="self-center">
                    <div className="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
                        <Tag text="About Me" />
                    </div>
                </div>
                <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
                    <div className="flex justify-center md:order-first md:justify-end">
                        <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
                            <Image
                                alt="Fullpose of Sagar"
                                loading="lazy"
                                width="1833"
                                height="2318"
                                decoding="async"
                                data-nimg="1"
                                className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
                                style={{
                                    color: "transparent",
                                    objectFit: "cover",
                                }}
                                src={"/images/me2.png"}
                            />
                            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
                        </div>
                    </div>
                    <div className="flex max-w-xl flex-col gap-6">
                        <h3 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-gray-900">
                            Curious about me? Here you have it:
                        </h3>

                        <p className="text-normal text-base">
                            I began my journey as a web developer in 2015, and
                            since then, I&apos;ve continued to grow and evolve
                            as a developer, taking on new challenges and
                            learning the latest technologies along the way. Now,
                            in my early thirties, 7 years after starting my web
                            development journey, I&apos;m building cutting-edge
                            web applications using modern technologies such as
                            Next.js, TypeScript, Nestjs, Tailwindcss, Supabase
                            and much more.
                        </p>
                        <p className="text-normal text-base">
                            I am very much a progressive thinker and enjoy
                            working on products end to end, from ideation all
                            the way to development.
                        </p>
                        <p className="text-normal text-base">
                            When I&apos;m not in full-on developer mode, you can
                            find me hovering around on twitter or on indie
                            hacker, witnessing the journey of early startups or
                            enjoying some free time. You can follow me on{" "}
                            <Link
                                target="_blank"
                                className="underline underline-offset-4 transition-all hover:text-gray-900 active:text-gray-600"
                                href="https://github.com/devusmonjon"
                            >
                                GitHub
                            </Link>
                            .
                        </p>
                        <p className="text-normal text-base">
                            Finally, some quick bits about me.
                        </p>
                        <div className="flex flex-col gap-2 md:flex-row md:gap-6">
                            <ul className="flex list-inside list-disc flex-col gap-2">
                                <li className="text-normal text-base">
                                    B.E. in Computer Engineering
                                </li>
                                <li className="text-normal text-base">
                                    Full time freelancer
                                </li>
                            </ul>
                            <ul className="flex list-inside list-disc flex-col gap-2">
                                <li className="text-normal text-base">
                                    Avid learner
                                </li>
                                <li className="text-normal text-base">
                                    Aspiring indie hacker
                                </li>
                            </ul>
                        </div>
                        <p className="text-normal text-base">
                            One last thing, I&apos;m available for freelance
                            work, so feel free to reach out and say hello! I
                            promise I don&apos;t bite 😉
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
