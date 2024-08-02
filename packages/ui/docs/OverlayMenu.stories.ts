import { OverlayMenu } from "#OverlayMenu/index.js";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof OverlayMenu> = {
  component: OverlayMenu,
};

export default meta;
type Story = StoryObj<typeof OverlayMenu>;

export const Default: Story = {
  args: {
    opened: true,
  },
};

export const Closed: Story = {
  args: {
    opened: false,
  },
};
