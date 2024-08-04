import Search from "#Icons/small/Search.js";
import { cn } from "@zenread/shared";
import { cva } from "class-variance-authority";
import { useRef } from "react";

interface InputProps {
  /** Have input border? */
  type: "outline" | "transparent";
  /** Default value */
  value?: string;
  /** Placeholder text */
  placeholder?: string;
}

const variants = cva(
  [
    "inline-flex w-full items-center justify-start gap-4 rounded-md text-secondary relative",
  ],
  {
    variants: {
      type: {
        outline:
          "border border-secondary-25% hover:border-secondary focus-within:border-secondary",
        transparent:
          "border-transparent hover:bg-dust-25% focus-within:bg-dust-25%",
      },
    },
    defaultVariants: {
      type: "outline",
    },
  },
);

/** Universal input for searching */
export const SearchInput = ({ type, value, placeholder }: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <label htmlFor="searchInput" className={cn(variants({ type }))}>
      <Search
        className={cn(
          inputRef.current !== document.activeElement && "opacity-50",
          "filterColor-secondary pointer-events-none absolute ml-6",
        )}
      />
      <input
        className="bg-transparent pb-4 pl-10 pr-6 pt-4 placeholder-secondary-50% outline-none"
        type="text"
        name="searchInput"
        ref={inputRef}
        defaultValue={value}
        placeholder={placeholder}
      />
    </label>
  );
};
