import { Logo } from "#Logo/index.js";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Logo> = {
  component: Logo,
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  args: {
    className: "",
    type: "default",
  },
};
