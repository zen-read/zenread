import { NamedBookmark } from "#NamedBookmark";
import type { Meta, StoryObj } from "@storybook/react";

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
