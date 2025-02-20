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
    <div className={cn("step-card-group-1", className)} {...props}>
      {steps?.map((step, index) => (
        <StepCard key={index} className="step-card-group-2">
          <StepCardHeader className="step-card-group-3">
            <StepCardNumber className="step-card-group-4">
              {index + 1}
            </StepCardNumber>
          </StepCardHeader>
          <StepCardContent>
            <StepCardTitle className="step-card-group-5">
              {step.title}
            </StepCardTitle>
          </StepCardContent>
        </StepCard>
      ))}
    </div>
  );
}
