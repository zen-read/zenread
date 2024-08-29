import { cn } from "@zenread/shared";
import { cva } from "class-variance-authority";
import { useState, useImperativeHandle, RefObject, ChangeEvent } from "react";

interface InputProps {
  /** Have input border? */
  type: "outline" | "transparent";
  /** Default value */
  value?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Input ref */
  ref: RefObject<{ getValue: () => string | undefined }>;
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

/** Universal input */
export const Input = ({ type, value, placeholder, ref }: InputProps) => {
  const [inputValue, setInputValue] = useState(value);
  const getValue = () => inputValue;
  useImperativeHandle(ref, () => ({ getValue }));
  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setInputValue(event.target.value);

  return (
    <label htmlFor="searchInput" className={cn(variants({ type }))}>
      <input
        className="bg-transparent px-6 py-4 placeholder-secondary-50% outline-none"
        type="text"
        name="searchInput"
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </label>
  );
};
