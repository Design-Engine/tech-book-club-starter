import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/constants";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: false,
    },
    size: {
      description: "The size of the button",
      control: { type: "select" },
      options: BUTTON_SIZES,
    },
    asChild: {
      description:
        "If true, the button will render the child as a linkable button",
      control: false,
    },
  },
  args: {
    children: "Button",
    size: "default",
    disabled: false,
    asChild: false,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
  },
};

export const Outline: Story = {
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="flex h-screen w-full items-center justify-center bg-neutral-900">
        <Story />
      </div>
    ),
  ],
  args: {
    variant: "outline",
  },
};
