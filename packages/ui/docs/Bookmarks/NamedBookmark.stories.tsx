import { NamedBookmark } from "#NamedBookmark/index.js";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta: Meta<typeof NamedBookmark> = {
  title: "Bookmarks/Named Bookmark",
  component: NamedBookmark,
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof NamedBookmark>;

export const Default: Story = {
  args: {
    onClick: () => {},
    title: "Title",
  },
};
