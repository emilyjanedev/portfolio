import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import { testimonials } from "@/data";
import Image from "next/image";

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          title="What Teammates Say About Me"
          subheader="Recommendations"
          description="See what my teammates have to say about
        my work and their experiences working with me."
        />
        <div className="mt-16 lg:mt-24 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
          <div className="flex gap-8 flex-none">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="max-w-sm md:max-w-md">
                <div className="flex gap-4 items-center">
                  <div className="size-14 bg-gray-700 inline-flex items-center justify-center flex-shrink-0 rounded-full">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-white/60">
                      {testimonial.position}
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm md:text-base md:mt-6">
                  {testimonial.text}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
