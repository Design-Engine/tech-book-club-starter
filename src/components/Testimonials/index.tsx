import Container from "@/components/container";
import TestimonialCard, {
  TestimonialCardProps,
} from "@/components/Testimonials/TestimonialCard";
import { cn } from "@/lib/utils";

type TestimonialsProps = {
  sectionPadding?: boolean;
  hideItem?: boolean;
  testimonials?: TestimonialCardProps[];
};

export default function Testimonials(props: TestimonialsProps) {
  const {
    sectionPadding = TestimonialsDefaults.sectionPadding,
    testimonials = TestimonialsDefaults.testimonials,
    hideItem = TestimonialsDefaults.hideItem,
  } = props;

  if (hideItem) return null;
  return (
    <section
      className={cn("testimonials-1", sectionPadding && "testimonials-2")}
    >
      <Container size="compact">
        {testimonials?.map(
          (testimonial: TestimonialCardProps, index: number) => (
            <TestimonialCard key={index} {...testimonial} />
          ),
        )}
      </Container>
    </section>
  );
}

export const TestimonialsDefaults: TestimonialsProps = {
  sectionPadding: true,
  testimonials: [
    {
      name: "John Doe",
      text: "This is a testimonial",
      stars: 5,
    },
  ],
  hideItem: false,
};
