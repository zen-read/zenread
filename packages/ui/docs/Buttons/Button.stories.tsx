import { Button } from "#Button";
import User from "#Icons/mid/User";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Buttons/Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: "Button",
    type: "full",
    size: "default",
    disabled: false,
    icon: <User />,
  },
};

export const Outline: Story = {
  args: {
    label: "Button",
    type: "outline",
    size: "default",
    disabled: false,
    icon: <User />,
  },
};

export const Transparent: Story = {
  args: {
    label: "Button",
    type: "transparent",
    size: "default",
    disabled: false,
    icon: <User />,
  },
};

export const Loading: Story = {
  args: {
    label: "Button",
    type: "loading",
    size: "default",
    disabled: false,
    icon: <User />,
  },
};
