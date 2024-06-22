import {
    About,
    Experiences,
    Hero,
    Navbar,
    Skills,
    Testimonials,
    Work,
} from "@/components";

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="flex min-h-screen w-full flex-col">
                <Hero />
                <About />
                <Skills />
                <Experiences />
                <Work />
                <Testimonials />
            </main>
        </>
    );
}
