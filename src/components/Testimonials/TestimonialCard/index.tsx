import SectionTitle from "@/components/SectionTitle";
import Stars from "@/components/Stars";

export type TestimonialCardProps = {
  stars?: number;
  text?: string;
  name?: string;
};

export default function TestimonialCard({
  stars,
  text,
  name,
}: TestimonialCardProps) {
  return (
    <div className="testimonial-card-1">
      <Stars count={stars} />

      <div className="testimonial-card-2">
        <SectionTitle as="h2" size="h3" className="testimonial-card-3">
          &quot;{text}&quot;
        </SectionTitle>
      </div>

      <div className="testimonial-card-4">
        <p>{name}</p>
      </div>
    </div>
  );
}
