import { TestimonialsItem, Tag } from "@/components";
import { testimonials } from "@/data/constants";

const Testimonials = () => {
    return (
        <section
            className="w-full py-16 md:py-20 2xl:py-24 bg-gray-50"
            id="testimonials"
        >
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
                <div className="flex flex-col items-center gap-4">
                    <div className="sefl-center">
                        <div className="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
                            <Tag text="Testimonials" />
                        </div>
                    </div>
                    <p className="text-normal text-lg md:text-xl max-w-xl text-center">
                        Nice things people have said about me:
                    </p>
                </div>
                <div className="flex gap-12 max-md:flex-col md:max-lg:flex-wrap">
                    {testimonials.map((testimonialial, idx) => (
                        <TestimonialsItem key={idx} {...testimonialial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
