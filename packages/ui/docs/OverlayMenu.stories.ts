import OverlayMenu from "#OverlayMenu";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof OverlayMenu> = {
  component: OverlayMenu,
};

export default meta;
type Story = StoryObj<typeof OverlayMenu>;

export const Default: Story = {
  args: {
    active: 0,
    opened: true,
  },
};

export const Closed: Story = {
  args: {
    active: 0,
    opened: false,
  },
};
