import React from "react";
import {
  StepCard,
  StepCardContent,
  StepCardHeader,
  StepCardNumber,
  StepCardTitle,
} from "@/components/Steps/StepCard";
import { cn } from "@/lib/utils";
import { StepsProps } from "@/components/Steps";

export default function StepCardGroup({
  steps,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  steps?: StepsProps["steps"];
}) {
  return (
    <div className={cn("scg-1", className)} {...props}>
      {steps?.map((step, index) => (
        <StepCard key={index} className="scg-2">
          <StepCardHeader>
            <StepCardNumber className="scg-3">{index + 1}</StepCardNumber>
          </StepCardHeader>
          <StepCardContent>
            <StepCardTitle>{step.title}</StepCardTitle>
          </StepCardContent>
        </StepCard>
      ))}
    </div>
  );
}
