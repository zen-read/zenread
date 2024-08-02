import Quote from "#Icons/mid/Quote.js";

interface QuoteBookmarkProps {
  title: string;
  onClick: () => void;
}

const QuoteBookmark = ({ title, onClick }: QuoteBookmarkProps) => {
  return (
    <div
      onClick={onClick}
      className="box-border flex cursor-pointer gap-4 border-l-2 py-4 pl-6 pr-4"
    >
      <Quote className="shrink-0" />
      {title}
    </div>
  );
};

export default QuoteBookmark;
