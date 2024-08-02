import Search from "#Icons/small/Search.js";
import { cn } from "@zenread/shared";
import { cva } from "class-variance-authority";
import { useRef } from "react";

interface InputProps {
  type: "outline" | "transparent";
  value?: string;
  placeholder?: string;
}

const variants = cva(
  [
    "inline-flex w-full items-center justify-start gap-4 rounded-md text-black relative",
  ],
  {
    variants: {
      type: {
        outline:
          "border border-black-25% hover:border-black focus-within:border-black",
        transparent:
          "border-transparent hover:bg-dust-25% focus-within:bg-dust-25%",
      },
    },
    defaultVariants: {
      type: "outline",
    },
  },
);

export const SearchInput = ({ type, value, placeholder }: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <label htmlFor="searchInput" className={cn(variants({ type }))}>
      <Search
        className={cn(
          inputRef.current === document.activeElement
            ? "filterColor-black"
            : "opacity-50",
          "pointer-events-none absolute ml-6",
        )}
      />
      <input
        className="bg-transparent pb-4 pl-10 pr-6 pt-4 placeholder-black-50% outline-none"
        type="text"
        name="searchInput"
        ref={inputRef}
        defaultValue={value}
        placeholder={placeholder}
      />
    </label>
  );
};
