import type { Meta, StoryObj } from "@storybook/react";
import AvatarRatings from ".";

const meta = {
  title: "Marketing/AvatarRatings",
  component: AvatarRatings,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  args: {},
} satisfies Meta<typeof AvatarRatings>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
