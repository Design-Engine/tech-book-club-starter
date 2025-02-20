import type { Meta, StoryObj } from "@storybook/react";
import Footer, { FooterDefaults } from ".";

const meta = {
  title: "Components/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
  args: {
    showAvatarRatings: false,
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...FooterDefaults,
  },
};
