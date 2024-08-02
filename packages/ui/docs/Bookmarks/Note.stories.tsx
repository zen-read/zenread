import Note from "#Note";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Note> = {
  title: "Bookmarks/Note",
  component: Note,
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Note>;

export const Default: Story = {
  args: {
    color: "default",
    content: [
      "Это заметка, которая не должна прикрепляться к какому-то месту в тексте, но в последствии это можно сделать.",
      "На этом всё? Нет! Вы можете изменить вид этой заметки, чтобы впоследствии выделить её. Меняйте фон, обводку – вы прекрасны!",
    ],
  },
};
