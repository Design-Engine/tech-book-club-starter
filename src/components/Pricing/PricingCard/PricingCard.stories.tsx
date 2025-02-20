import type { Meta, StoryObj } from "@storybook/react";
import {
  PricingCard,
  PricingCardBody,
  PricingCardFooter,
  PricingCardHeader,
} from ".";
import { PricingDefaults } from "@/components/Pricing";

const meta = {
  title: "Marketing/Pricing/PricingCard",
  component: PricingCard,
  argTypes: {},
  args: {
    title: "Starter",
    price: "$19",
    frequency: "Monthly",
    button: {
      label: "Subscribe Now",
      url: "#",
      variant: "default",
    },
  },
} satisfies Meta<typeof PricingCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    features: PricingDefaults.pricingOptions?.[0]?.features,
  },
  parameters: {
    layout: "centered",
  },
  render: (args) => (
    <PricingCard {...args}>
      <PricingCardHeader {...args} />
      <PricingCardBody {...args} />
      <PricingCardFooter {...args} />
    </PricingCard>
  ),
};

export const Featured: Story = {
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="min-w-[318px]">
        <Story />
      </div>
    ),
  ],
  args: {
    featured: true,
    features: PricingDefaults.pricingOptions?.[0]?.features,
  },
  render: (args) => (
    <PricingCard {...args}>
      <PricingCardHeader {...args} />
      <PricingCardBody {...args} />
      <PricingCardFooter {...args} />
    </PricingCard>
  ),
};
