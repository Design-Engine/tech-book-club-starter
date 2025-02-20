import type { Meta, StoryObj } from "@storybook/react";

import SectionTitle from ".";

const meta = {
  title: "Components/SectionTitle",
  component: SectionTitle,
  decorators: [
    (Story) => (
      <div className="py-30">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  args: {},
} satisfies Meta<typeof SectionTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    as: "h1",
    children: "Section Title",
  },
  render: (args) => (
    <div className="flex flex-col items-center justify-center gap-10">
      <SectionTitle {...args} size="h1">
        Heading 1
      </SectionTitle>
      <SectionTitle {...args} size="h2">
        Heading 2
      </SectionTitle>
      <SectionTitle {...args} size="h3">
        Heading 3
      </SectionTitle>
      <SectionTitle {...args} size="h4">
        Heading 4
      </SectionTitle>
      <SectionTitle {...args} size="h5">
        Heading 5
      </SectionTitle>
    </div>
  ),
};
