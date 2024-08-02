import { cn } from "@zenread/shared";

interface ButtonParams {
  /** Name of button */
  label?: string;
  /** Icon for recognizing */
  icon: JSX.Element;
  /** Class name param for Tailwind styles */
  className?: string;
  /** Action on click */
  onClick?: () => void;
}

/** Select button component from placing inside a container */
export const SelectButton = ({
  label,
  icon,
  className,
  onClick,
}: ButtonParams) => {
  return (
    <button
      className={cn(
        "font-select flex w-full items-center gap-4 rounded px-6 py-4 hover:bg-dust-25%",
        className,
      )}
      onClick={onClick}
    >
      {icon}
      {label}
    </button>
  );
};
