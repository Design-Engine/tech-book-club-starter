import type { Meta, StoryObj } from "@storybook/react";
import Testimonials, { TestimonialsDefaults } from ".";

const meta = {
  title: "Marketing/Testimonials",
  component: Testimonials,
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
} satisfies Meta<typeof Testimonials>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...TestimonialsDefaults,
  },
};
