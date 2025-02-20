import type { Meta, StoryObj } from "@storybook/react";
import TestimonialCard from ".";
import Container from "@/components/container";

const meta = {
  title: "Marketing/Testimonials/TestimonialCard",
  component: TestimonialCard,
  decorators: [
    (Story) => (
      <Container size="compact">
        <Story />
      </Container>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  args: {},
} satisfies Meta<typeof TestimonialCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    stars: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "John Doe",
  },
};
