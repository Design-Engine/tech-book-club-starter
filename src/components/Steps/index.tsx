import Container from "@/components/container";
import { GlowBg } from "@/components/icons";
import SectionTitle from "@/components/SectionTitle";
import StepCardGroup from "@/components/Steps/StepCardGroup";

import { cn } from "@/lib/utils";

type Step = {
  title: string;
};

export type StepsProps = {
  sectionPadding?: boolean;
  hideItem?: boolean;
  headline?: string;
  steps?: Step[];
};

export default function Steps(props: StepsProps) {
  const {
    headline = StepsDefaults.headline,
    steps = StepsDefaults.steps,
    sectionPadding = StepsDefaults.sectionPadding,
    hideItem = StepsDefaults.hideItem,
  } = props;

  if (hideItem) return null;

  return (
    <section className={cn("steps-1", sectionPadding && "steps-2")}>
      <Container
        className="steps-3"
        style={{
          backgroundImage: "url(/images/bgPatternLight.png)",
        }}
      >
        <div className="steps-4">
          <SectionTitle size="h2" as="h2" className="steps-5">
            {headline}
          </SectionTitle>
        </div>

        <StepCardGroup steps={steps} />

        {steps && steps.length > 2 && <GlowBg className="steps-6" />}
      </Container>
    </section>
  );
}

export const StepsDefaults: StepsProps = {
  headline: "Steps",
  steps: [
    {
      title: "Step 1",
    },
    {
      title: "Step 2",
    },
    {
      title: "Step 3",
    },
    {
      title: "Step 4",
    },
  ],
  sectionPadding: true,
  hideItem: false,
};
