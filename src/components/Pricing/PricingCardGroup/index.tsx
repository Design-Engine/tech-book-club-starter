import { cn } from "@/lib/utils";
import { PricingProps } from "@/components/Pricing";
import {
  PricingCard,
  PricingCardBody,
  PricingCardFooter,
  PricingCardHeader,
} from "@/components/Pricing/PricingCard";
import { ButtonLink } from "@/types";

export default function PricingCardGroup({
  pricingOptions,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  pricingOptions?: PricingProps["pricingOptions"];
}) {
  return (
    <div className={cn("pcg-1", className)} {...props}>
      {pricingOptions?.map((option, index: number) => (
        <PricingCard key={index} featured={option.featured}>
          <PricingCardHeader {...option} />
          <PricingCardBody features={option.features} />
          <PricingCardFooter button={option.button as ButtonLink} />
        </PricingCard>
      ))}
    </div>
  );
}
