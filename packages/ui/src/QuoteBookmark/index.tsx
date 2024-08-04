import Quote from "#Icons/mid/Quote.js";

interface QuoteBookmarkProps {
  /** Non-editable text inside block */
  title: string;
  /** Action to navigate to quote inside article */
  onClick: () => void;
}

/** Non-editable quote bookmark */
export const QuoteBookmark = ({ title, onClick }: QuoteBookmarkProps) => {
  return (
    <div
      onClick={onClick}
      className="box-border flex cursor-pointer gap-4 border-l-2 border-secondary py-4 pl-6 pr-4"
    >
      <Quote className="shrink-0 filterColor-secondary" />
      {title}
    </div>
  );
};
