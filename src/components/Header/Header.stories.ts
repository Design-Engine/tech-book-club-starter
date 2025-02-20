import type { Meta, StoryObj } from "@storybook/react";
import Header, { HeaderDefaults } from ".";

const meta = {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},

  args: {},
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    ...HeaderDefaults,
  },
};
