import Bookmark from "#Icons/mid/Bookmark";

interface NamedBookmarkProps {
  title: string;
  onClick: () => void;
}

const NamedBookmark = ({ title, onClick }: NamedBookmarkProps) => {
  return (
    <div
      onClick={onClick}
      className="box-border flex cursor-pointer gap-4 border-l-2 py-4 pl-6 pr-4"
    >
      <Bookmark className="shrink-0" />
      {title}
    </div>
  );
};

NamedBookmark.displayName = "NamedBookmark";
export { NamedBookmark as NamedBookmark };
