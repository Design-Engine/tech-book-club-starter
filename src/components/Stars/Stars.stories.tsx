import type { Meta, StoryObj } from "@storybook/react";

import Stars from ".";

const meta = {
  title: "Components/Stars",
  component: Stars,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  args: {},
} satisfies Meta<typeof Stars>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    count: 5,
  },
};
