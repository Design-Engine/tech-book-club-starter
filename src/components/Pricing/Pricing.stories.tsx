import type { Meta, StoryObj } from "@storybook/react";
import Pricing, { PricingDefaults } from ".";

const meta = {
  title: "Marketing/Pricing",
  component: Pricing,
  decorators: [
    (Story) => (
      <div className="py-30">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},

  args: {},
} satisfies Meta<typeof Pricing>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...PricingDefaults,
  },
};
