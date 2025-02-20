import { Button } from "@/components/Button";
import CheckList, { CheckListProps } from "@/components/CheckList";
import { GlowBg } from "@/components/icons";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/types";
import Link from "next/link";

export type PricingOption = {
  title?: string;
  price?: string;
  featured?: boolean;
  features?: { id: string; title: string }[];
  frequency?: "Monthly" | "Yearly" | null | undefined;
  className?: string;
  button?: ButtonLink;
};

export const PricingCard = ({
  className,
  featured,
  ...props
}: React.ComponentProps<"div"> & PricingOption) => {
  return (
    <div
      data-slot="pricing-card"
      className={cn(
        "pricing-card-1",
        featured ? "pricing-card-2" : "pricing-card-3",
        className,
      )}
      {...props}
    >
      {props.children}

      {featured && <GlowBg className="pricing-card-4" />}
    </div>
  );
};

export const PricingCardHeader = ({
  className,
  title,
  price,
  frequency,
  ...props
}: React.ComponentProps<"div"> & PricingOption) => {
  return (
    <div className={cn("pricing-card-header-1", className)} {...props}>
      <div className="pricing-card-header-2">
        <h3 className="pricing-card-header-3">{title}</h3>
        <h4 className="pricing-card-header-4">
          {price}
          {frequency && (
            <span className="pricing-card-header-5">/{frequency}</span>
          )}
        </h4>
      </div>
      <hr className="pricing-card-header-6" />
    </div>
  );
};

export const PricingCardBody = ({
  className,
  features,
  ...props
}: React.ComponentProps<"div"> & PricingOption) => {
  return (
    <div
      data-slot="pricing-card-body"
      className={cn("pb-8", className)}
      {...props}
    >
      {props.children}

      {features && features.length > 0 && (
        <ul className="pricing-card-body-1">
          {features?.map(({ title }: CheckListProps, index: number) => (
            <li key={index}>
              <CheckList title={title} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export const PricingCardFooter = ({
  className,
  btnClass,
  button,
  ...props
}: React.ComponentProps<"div"> & {
  button?: ButtonLink;
  btnClass?: string;
} & PricingOption) => {
  return (
    <div
      data-slot="pricing-card-footer"
      className={cn("pricing-card-footer-1", className)}
      {...props}
    >
      {props.children}

      <Button
        variant={button?.variant || "default"}
        className={cn("pricing-card-footer-2", btnClass)}
        asChild
      >
        <Link href={button?.url || "#"}>{button?.label || "Button"}</Link>
      </Button>
    </div>
  );
};
