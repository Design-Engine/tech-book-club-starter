import { CurvedArrow } from "@/components/icons";
import { cn } from "@/lib/utils";

export const StepCard = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="step-card"
      className={cn("step-card-1", className)}
      {...props}
    />
  );
};

export const StepCardHeader = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="step-card-header"
      className={cn("step-card-header-1", className)}
      {...props}
    >
      {props.children}
      <div className={cn("step-card-header-2", className)} {...props}>
        <CurvedArrow className="step-card-header-3" />
      </div>
    </div>
  );
};

export const StepCardContent = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div data-slot="step-card-content" className={cn(className)} {...props} />
  );
};

export const StepCardNumber = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="step-card-number"
      className={cn("step-card-number-1", className)}
      {...props}
    />
  );
};

export const StepCardTitle = ({
  className,
  as = "h3",
  ...props
}: React.ComponentProps<"div"> & {
  as?: "h2" | "h3" | "h4" | "h5" | "h6";
}) => {
  const Comp = as;
  return (
    <Comp
      data-slot="step-card-title"
      className={cn("step-card-title-1", className)}
      {...props}
    />
  );
};
