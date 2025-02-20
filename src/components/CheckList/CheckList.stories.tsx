import type { Meta, StoryObj } from "@storybook/react";
import CheckList from ".";

const meta = {
  title: "Components/CheckList",
  component: CheckList,
  parameters: {
    layout: "centered",
  },
  argTypes: {},

  args: {},
} satisfies Meta<typeof CheckList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Checklist Item",
  },
};
