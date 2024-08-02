import OriginLogo from "#OriginLogo";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof OriginLogo> = {
  component: OriginLogo,
};

export default meta;
type Story = StoryObj<typeof OriginLogo>;

export const Default: Story = {
  args: {
    imageUrl: "./thumbnails/asset1.png",
    size: "S",
    border: true,
    label: "Origin",
  },
};
