import { DropdownMenu } from "#DropdownMenu/index.js";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta: Meta<typeof DropdownMenu> = {
  title: "Controlls/Dropdown Menu",
  component: DropdownMenu,
  decorators: [
    (Story) => (
      <div className="w-32">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
  args: {
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    selectedItem: "Item 1",
  },
};
