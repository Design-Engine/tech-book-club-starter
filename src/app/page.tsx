import Hero, { HeroDefaults } from "@/components/Hero";
import ImageTextList, {
  ImageTextListDefaults,
} from "@/components/ImageTextList";
import Pricing, { PricingDefaults } from "@/components/Pricing";
import Steps, { StepsDefaults } from "@/components/Steps";
import Testimonials, { TestimonialsDefaults } from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero {...HeroDefaults} hasHeader />
      <ImageTextList {...ImageTextListDefaults} />
      <ImageTextList {...ImageTextListDefaults} reverse />
      <Steps {...StepsDefaults} />
      <Testimonials {...TestimonialsDefaults} />
      <Pricing {...PricingDefaults} />
    </>
  );
}
