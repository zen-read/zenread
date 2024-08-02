import { MarginNoteBlock } from "#MarginNote";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof MarginNoteBlock> = {
  title: "Bookmarks/Margin Note",
  component: MarginNoteBlock,
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof MarginNoteBlock>;

export const Default: Story = {
  args: {
    onClick: () => {},
    color: "water",
    content: [
      "Эта заметка прикреплена к какой-то части текста. Иконка значит, что можно нажать на этот текст и перейти к тому месту, где вы сделали эту заметку.",
    ],
  },
};
