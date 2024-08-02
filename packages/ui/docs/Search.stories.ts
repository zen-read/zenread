import { SearchInput } from "#Search";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SearchInput> = {
  component: SearchInput,
};

export default meta;
type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {
  args: {
    type: "outline",
    value: "",
    placeholder: "Search",
  },
};

export const Transparent: Story = {
  args: {
    type: "transparent",
    value: "",
    placeholder: "Search",
  },
};
