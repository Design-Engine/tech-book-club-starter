import type { Meta, StoryObj } from "@storybook/react";
import { StepsDefaults, StepsProps } from "@/components/Steps";
import StepCardGroup from "@/components/Steps/StepCardGroup";
import Container from "@/components/container";

const meta = {
  title: "Marketing/Steps/StepCardGroup",
  component: StepCardGroup,
  decorators: [
    (Story) => (
      <section className="section-padding">
        <Container>
          <Story />
        </Container>
      </section>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof StepCardGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    steps: StepsDefaults.steps,
  },
  render: (args: StepsProps) => <StepCardGroup {...args} />,
};
