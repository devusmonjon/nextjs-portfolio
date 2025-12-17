import Image from "next/image";
import Link from "next/link";
import { Tag } from "@/components";

const About = (): JSX.Element => {
  return (
    <section className='w-full py-16 md:py-20 2xl:py-24 bg-gray-50' id='about'>
      <div className='mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8'>
        <div className='self-center'>
          <div className='flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1'>
            <Tag text='About Me' />
          </div>
        </div>
        <div className='flex w-full flex-col justify-between gap-12 md:flex-row'>
          <div className='flex justify-center md:order-first md:justify-end'>
            <div className='relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]'>
              <Image
                alt='Fullpose of Sagar'
                loading='lazy'
                width='1833'
                height='2318'
                decoding='async'
                data-nimg='1'
                className='absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]'
                style={{
                  color: "transparent",
                  objectFit: "cover",
                  objectPosition: "0 -31px",
                }}
                src={"/images/231A8625.JPG"}
              />
              <div className='absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]'></div>
            </div>
          </div>
          <div className='flex max-w-xl flex-col gap-6'>
            <h3 className='text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-gray-900'>
              Curious about me? Here you have it:
            </h3>

            <p className='text-normal text-base'>
              I started learning web development in 2021, gradually building a
              strong foundation in JavaScript and modern web technologies. In
              January 2025, I began working professionally as a full-time
              developer, and since then I’ve been actively building and
              maintaining real-world applications in production.
            </p>

            <p className='text-normal text-base'>
              Today, I work as a full-stack JavaScript developer, building
              scalable and maintainable web applications using technologies like
              Next.js, TypeScript, NestJS, PostgreSQL, MySQL, Docker, CI/CD with
              GitHub Actions, and more. My focus is on writing clean, structured
              code and delivering reliable solutions that can grow with the
              product.
            </p>

            <p className='text-normal text-base'>
              I enjoy working on products end to end — from understanding
              requirements and planning architecture to development, deployment,
              and ongoing improvements. I’ve worked on a wide range of projects
              including CRM and ERP systems, SaaS platforms, e-commerce
              applications, Telegram bots and mini apps, as well as full-stack
              landing pages and multi-page corporate websites.
            </p>

            <p className='text-normal text-base'>
              Outside of active development, I spend time learning new tools,
              improving my problem-solving skills, and following the journeys of
              startups and indie builders in the tech community. You can find my
              work and projects on{" "}
              <Link
                target='_blank'
                className='underline underline-offset-4 transition-all hover:text-gray-900 active:text-gray-600'
                href='https://github.com/devusmonjon'
              >
                GitHub
              </Link>{" "}
              or connect with me on{" "}
              <Link
                target='_blank'
                className='underline underline-offset-4 transition-all hover:text-gray-900 active:text-gray-600'
                href='https://www.linkedin.com/in/devusmonjon'
              >
                LinkedIn
              </Link>
              .
            </p>

            <p className='text-normal text-base'>
              Finally, some quick bits about me.
            </p>

            <div className='flex flex-col gap-2 md:flex-row md:gap-6'>
              <ul className='flex list-inside list-disc flex-col gap-2'>
                <li className='text-normal text-base'>
                  Full-stack JavaScript developer
                </li>
                <li className='text-normal text-base'>
                  Full-time professional experience
                </li>
              </ul>
              <ul className='flex list-inside list-disc flex-col gap-2'>
                <li className='text-normal text-base'>
                  Strong focus on clean code & architecture
                </li>
                <li className='text-normal text-base'>Continuous learner</li>
              </ul>
            </div>

            <p className='text-normal text-base'>
              I’m always open to meaningful conversations about technology,
              products, and building better software — feel free to reach out
              and say hello 🙂
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
