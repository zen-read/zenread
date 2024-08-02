import { BookmarkBreak } from "#BookmarkBreak";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof BookmarkBreak> = {
  component: BookmarkBreak,
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof BookmarkBreak>;

export const Default: Story = {
  args: {
    onClick: () => {},
    color: "default",
    title: "BookmarkBreak",
  },
};
