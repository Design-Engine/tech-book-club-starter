import type { Meta, StoryObj } from "@storybook/react";
import Steps from ".";

const meta = {
  title: "Marketing/Steps",
  component: Steps,
  parameters: {
    layout: "centered",
  },
  decorators: [],
  argTypes: {},

  args: {},
} satisfies Meta<typeof Steps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
