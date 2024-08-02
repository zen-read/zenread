import Slider from "#Slider";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Slider> = {
  title: "Controlls/Slider",
  component: Slider,
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    label: "Slider",
    value: 50,
    min: 0,
    max: 100,
  },
};
