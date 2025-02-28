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
      className={cn("p-card-1", featured ? "p-card-2" : "p-card-3", className)}
      {...props}
    >
      <div>
        {props.children}

        {featured && <GlowBg className="p-card-4" />}
      </div>
    </div>
  );
};

export const PricingCardHeader = ({
  className,
  title,
  price,
  frequency,
}: React.ComponentProps<"div"> & PricingOption) => {
  return (
    <div className={cn("pch-1", className)}>
      <div className="pch-2">
        <h3 className="pch-3">{title}</h3>
        <h4 className="pch-4">
          {price}
          {frequency && <span className="pch-5">/{frequency}</span>}
        </h4>
      </div>
      <hr className="pch-6" />
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
      className={cn("pcb-1", className)}
      {...props}
    >
      {props.children}

      {features && features.length > 0 && (
        <ul className="pcb-2">
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
      className={cn("pcf-1", className)}
      {...props}
    >
      {props.children}

      <Button
        variant={button?.variant || "default"}
        className={cn("pcf-2", btnClass)}
        asChild
      >
        <Link href={button?.url || "#"}>{button?.label || "Button"}</Link>
      </Button>
    </div>
  );
};
