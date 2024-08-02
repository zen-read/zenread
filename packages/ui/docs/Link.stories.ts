import { LinkButton } from "#Link/index.js";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof LinkButton> = {
  component: LinkButton,
};

export default meta;
type Story = StoryObj<typeof LinkButton>;

export const Default: Story = {
  args: {
    title: "Link",
    link: "#",
  },
};
