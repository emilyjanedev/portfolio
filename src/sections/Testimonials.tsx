import SectionHeader from "@/components/SectionHeader";
import { testimonials } from "@/data";
import { Carousel } from "@/components/Carousel";

export const TestimonialsSection = () => {
  return (
    <>
      <div className="container">
        <SectionHeader
          title="What Others Say About Me"
          subheader="Recommendations"
          description="See what my teammates have to say about
        my work and their experiences working with me."
        />
      </div>
      <div className="relative overflow-hidden w-full h-full pb-20 pt-10">
        <Carousel slides={testimonials} />
      </div>
    </>
  );
};
