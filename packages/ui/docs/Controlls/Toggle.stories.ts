import { Toggle } from "#Toggle/index.js";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Toggle> = {
  title: "Controlls/Toggle",
  component: Toggle,
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Off: Story = {
  args: {
    active: false,
  },
};

export const On: Story = {
  args: {
    active: true,
  },
};
