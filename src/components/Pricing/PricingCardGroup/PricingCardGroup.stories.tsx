import type { Meta, StoryObj } from "@storybook/react";
import PricingCardGroup from ".";
import { PricingDefaults, PricingProps } from "@/components/Pricing";
import Container from "@/components/container";

const meta = {
  title: "Marketing/Pricing/PricingCardGroup",
  component: PricingCardGroup,
  decorators: [
    (Story) => (
      <section className="section-padding">
        <Container>
          <Story />
        </Container>
      </section>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
  args: {},
} satisfies Meta<typeof PricingCardGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    pricingOptions: PricingDefaults.pricingOptions,
  },

  render: (args: PricingProps) => <PricingCardGroup {...args} />,
};
