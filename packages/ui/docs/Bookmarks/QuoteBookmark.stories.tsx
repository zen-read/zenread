import QuoteBookmark from "#QuoteBookmark";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof QuoteBookmark> = {
  title: "Bookmarks/Quote",
  component: QuoteBookmark,
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof QuoteBookmark>;

export const Default: Story = {
  args: {
    onClick: () => {},
    title:
      "Ещё один приколдес. Что же это? Цитата! Изменить её содержание, как с обычным текстом – невозможно. При нажатии на этот блок вы переходите к конкретно цитируемому отрезку текста. Если же требуется уменьшить или расширить диапозон выделяемого текста, то вы можете перейти к самой цитате и увеличить выделение.",
  },
};
