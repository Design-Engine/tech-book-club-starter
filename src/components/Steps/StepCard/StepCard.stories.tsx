import type { Meta, StoryObj } from "@storybook/react";
import {
  StepCard,
  StepCardContent,
  StepCardHeader,
  StepCardNumber,
  StepCardTitle,
} from ".";

const meta = {
  title: "Marketing/Steps/StepCard",
  component: StepCard,
  argTypes: {},
} satisfies Meta<typeof StepCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Title",
  },
  parameters: {
    layout: "centered",
  },
  render: (args) => (
    <StepCard {...args}>
      <StepCardHeader>
        <StepCardNumber>1</StepCardNumber>
      </StepCardHeader>
      <StepCardContent>
        <StepCardTitle>{args.title}</StepCardTitle>
      </StepCardContent>
    </StepCard>
  ),
};
