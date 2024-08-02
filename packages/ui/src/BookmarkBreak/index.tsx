import { cva } from "class-variance-authority";

interface BookmarkBreakProps {
  /** Action on click */
  onClick?: () => void;
  /** Color of break */
  color?:
    | "default"
    | "red"
    | "orange"
    | "yellow"
    | "lime"
    | "mint"
    | "sky"
    | "water"
    | "acidBlue"
    | "pink";
  /** Title of break */
  title: string;
}

const variants = cva(["cursor-pointer"], {
  variants: {
    color: {
      default: "fill-black",
      red: "fill-red",
      orange: "fill-orange",
      yellow: "fill-yellow",
      lime: "fill-lime",
      mint: "fill-mint",
      sky: "fill-sky",
      water: "fill-water",
      acidBlue: "fill-acid-blue",
      pink: "fill-pink",
    },
  },
  defaultVariants: {
    color: "default",
  },
});

const BookmarkBreakIcon = ({
  color,
  className,
}: {
  color: BookmarkBreakProps["color"];
  className?: string;
}) => {
  return (
    <svg
      width="16"
      height="8"
      viewBox="0 0 16 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0H10L16 4L10 8H0V0ZM1.5 6.5H9.54584L13.2958 4L9.54584 1.5H1.5V6.5Z"
        className={variants({ color })}
      />
    </svg>
  );
};

/** A bookmark break. Needs to be wrapped in a article block between elements */
const BookmarkBreak = ({ onClick, color, title }: BookmarkBreakProps) => {
  return (
    <div
      onClick={onClick}
      className="flex cursor-pointer items-center gap-4 py-5"
    >
      <BookmarkBreakIcon className="w-6 shrink-0" color={color} />
      <div className="w-full border border-dashed border-black"></div>
      {title && (
        <>
          <span className="font-small">{title}</span>
          <div className="w-full border border-dashed border-black"></div>
        </>
      )}
      <BookmarkBreakIcon className="w-6 shrink-0 rotate-180" color={color} />
    </div>
  );
};

BookmarkBreak.displayName = "BookmarkBreak";
export { BookmarkBreak as BookmarkBreak };
