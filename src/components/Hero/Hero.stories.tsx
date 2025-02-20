import type { Meta, StoryObj } from "@storybook/react";
import Hero, { HeroDefaults } from ".";

const meta = {
  title: "Marketing/Hero",
  component: Hero,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},

  args: {},
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...HeroDefaults,
  },
};
