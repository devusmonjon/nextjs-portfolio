import { ITestimonialDetails } from "@/interfaces/constatnts";
import Image from "next/image";

const TestimonialsItem = ({
    title,
    personName,
    personAvatar,
    testimonial,
}: ITestimonialDetails) => {
    return (
        <div className="rounded-xl bg-gray shadow-md dark:bg-gray-100 dark:shadow-2xl mx-auto flex flex-col items-center gap-6 p-8 md:w-2/3 md:p-12 lg:w-1/3">
            <Image src={personAvatar} alt={personName} />
            <p className="text-normal text-base">{testimonial}</p>
            <div className="flex w-full flex-col gap-1">
                <p className="text-lg md:text-xl w-full text-center font-semibold text-gray-900">
                    {personName}
                </p>
                <p className="text-normal text-sm w-full text-center">
                    {title}
                </p>
            </div>
        </div>
    );
};

export default TestimonialsItem;
