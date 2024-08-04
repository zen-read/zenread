import { cn } from "@zenread/shared";
import { cva } from "class-variance-authority";

interface NoteProps {
  /** Text inside note. That param can save paragraphs */
  content: string[];
  /** Color of note */
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

const variants = cva(
  [
    "flex w-full flex-col gap-4 p-4 rounded border-dashed border border-secondary-75%",
  ],
  {
    variants: {
      color: {
        default: "bg-primary-25%",
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
  },
);

/** Note of post */
export const Note = ({ content, color }: NoteProps) => {
  return (
    <div className={cn(variants({ color }))}>
      {content.map((line, index) => (
        <p className="font-text" key={index}>
          {line}
        </p>
      ))}
    </div>
  );
};
