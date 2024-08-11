import { Toggle } from "#Toggle/index.js";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta: Meta<typeof ControlUnit> = {
  title: "Controls/Control Unit",
  component: ControlUnit,
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ControlUnit>;

export const Default: Story = {
  args: {
    label: "Control Unit",
    description: "Description",
    control: <Toggle active />,
  },
};
