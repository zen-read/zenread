import { cn } from "@zenread/shared";
import { cva } from "class-variance-authority";

interface TagProps {
  /** Name of tag */
  label?: string;
  /** Emoji icon */
  icon?: string;
  /** Link to "Read list" page w/ filter by this tag */
  link?: string;
  /** Color of tag */
  color:
    | "black"
    | "white"
    | "red"
    | "orange"
    | "yellow"
    | "lime"
    | "mint"
    | "sky"
    | "water"
    | "acidBlue"
    | "pink"
    | "loading";
}

const variants = cva(
  ["inline-flex items-center rounded-md px-6 py-3 gap-4 font-bold"],
  {
    variants: {
      color: {
        black: "bg-black text-white",
        white: "bg-white text-black",
        red: "bg-red text-white",
        orange: "bg-orange text-white",
        yellow: "bg-yellow text-black",
        lime: "bg-lime text-black",
        mint: "bg-mint text-black",
        sky: "bg-sky text-black",
        water: "bg-water text-white",
        acidBlue: "bg-acid-blue text-white",
        pink: "bg-pink text-white",
        loading: "animate-pulse bg-black-25% w-20 cursor-default h-8",
      },
    },
    defaultVariants: {
      color: "black",
    },
  },
);

/** Tag link for using inside "Read list" page and */
export const Tag = ({ label, icon, color, link }: TagProps) => {
  return (
    <a href={link} className={cn(variants({ color }))}>
      {color !== "loading" && <div>{label}</div>}
      {icon && <div>{icon}</div>}
    </a>
  );
};
