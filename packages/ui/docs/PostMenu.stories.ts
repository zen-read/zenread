import { PostMenu } from "#PostMenu/index.js";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof PostMenu> = {
  component: PostMenu,
};

export default meta;
type Story = StoryObj<typeof PostMenu>;

export const Default: Story = {
  args: {
    isSavedPost: false,
    saveFn: () => {},
    listFn: () => {},
    bookmarkFn: () => {},
  },
};

export const PostIsSaved: Story = {
  args: {
    isSavedPost: true,
    saveFn: () => {},
    listFn: () => {},
    bookmarkFn: () => {},
  },
};
