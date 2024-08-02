import { BookmarksOverlay } from "#BookmarksOverlay";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof BookmarksOverlay> = {
  title: "Bookmarks/Overlay",
  component: BookmarksOverlay,
  decorators: [
    (Story) => (
      <div className="h-[500px]">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof BookmarksOverlay>;

export const Default: Story = {
  args: {
    opened: true,
    loaded: true,
  },
};
