import MarginNote from "#Icons/small/MarginNote";
import { cn } from "#utils";
import { cva } from "class-variance-authority";

interface MarginNote {
  onClick?: () => void;
  content: string[];
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
}

const variants = cva(["flex gap-4 p-4 rounded cursor-pointer"], {
  variants: {
    color: {
      default: "bg-white-25%",
      red: "bg-red-25%",
      orange: "bg-orange-25%",
      yellow: "bg-yellow-25%",
      lime: "bg-lime-25%",
      mint: "bg-mint-25%",
      sky: "bg-sky-25%",
      water: "bg-water-25%",
      acidBlue: "bg-acid-blue-25%",
      pink: "bg-pink-25%",
    },
  },
  defaultVariants: {
    color: "default",
  },
});

const MarginNoteBlock = ({ color, content, onClick }: MarginNote) => {
  return (
    <div onClick={onClick} className={cn(variants({ color }))}>
      <MarginNote className="shrink-0" />
      {content.map((line, index) => (
        <p className="font-text" key={index}>
          {line}
        </p>
      ))}
    </div>
  );
};

MarginNoteBlock.displayName = "MarginNoteBlock";

export { MarginNoteBlock as MarginNoteBlock };
