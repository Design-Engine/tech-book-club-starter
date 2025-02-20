import type { Meta, StoryObj } from "@storybook/react";
import ImageTextList, { ImageTextListDefaults } from ".";

const meta = {
  title: "Marketing/ImageTextList",
  component: ImageTextList,
  parameters: {
    layout: "centered",
  },
  decorators: [],
  argTypes: {},

  args: {},
} satisfies Meta<typeof ImageTextList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...ImageTextListDefaults,
  },
};

export const Reverse: Story = {
  args: {
    ...ImageTextListDefaults,
    reverse: true,
  },
};
