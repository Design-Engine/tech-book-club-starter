import Container from "@/components/container";
import SectionTitle from "@/components/SectionTitle";
import { cn } from "@/lib/utils";
import PricingCardGroup from "@/components/Pricing/PricingCardGroup";
import { PricingOption } from "@/components/Pricing/PricingCard";

export type PricingProps = {
  headline?: string;
  pricingOptions?: PricingOption[];
  sectionPadding?: boolean;
  hideItem?: boolean;
};

export default function Pricing(props: PricingProps) {
  const {
    headline = PricingDefaults.headline,
    pricingOptions = PricingDefaults.pricingOptions,
    sectionPadding = PricingDefaults.sectionPadding,
    hideItem = PricingDefaults.hideItem,
  } = props;

  if (hideItem) return null;
  return (
    <section className={cn("pricing-1", sectionPadding && "pricing-2")}>
      <Container size="compact" className="pricing-3">
        <div className="pricing-4">
          <SectionTitle size="h2" as="h2" className="pricing-5">
            {headline}
          </SectionTitle>
        </div>

        {pricingOptions && pricingOptions.length > 0 && (
          <PricingCardGroup pricingOptions={pricingOptions} />
        )}
      </Container>
    </section>
  );
}

export const PricingDefaults: PricingProps = {
  headline: "Pricing",
  pricingOptions: [
    {
      title: "Basic",
      price: "$10",
      features: [
        { id: "1", title: "Checklist Item 1" },
        { id: "2", title: "Checklist Item 2" },
        { id: "3", title: "Checklist Item 3" },
      ],
      featured: false,
      frequency: "Monthly",
      button: { label: "Subscribe", url: "#", variant: "default" },
    },
    {
      title: "Pro",
      price: "$20",
      features: [
        { id: "1", title: "Checklist Item 1" },
        { id: "2", title: "Checklist Item 2" },
        { id: "3", title: "Checklist Item 3" },
      ],
      featured: true,
      frequency: "Monthly",
      button: { label: "Subscribe", url: "#", variant: "default" },
    },
    {
      title: "Enterprise",
      price: "Custom",
      features: [
        { id: "1", title: "Checklist Item 1" },
        { id: "2", title: "Checklist Item 2" },
        { id: "3", title: "Checklist Item 3" },
      ],
      featured: false,
      frequency: undefined,
      button: { label: "Talk to us", url: "#", variant: "default" },
    },
  ],
  sectionPadding: true,
  hideItem: false,
};
