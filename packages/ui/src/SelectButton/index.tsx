import { cn } from "@zenread/shared";

export interface SelectButtonParams {
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
}: SelectButtonParams) => {
  return (
    <button
      className={cn(
        "font-select flex w-full items-center gap-4 rounded px-6 py-4 hover:bg-dust-25% transition-colors duration-135 ease-in-out",
        className,
      )}
      onClick={onClick}
    >
      <div className="filterColor-secondary">{icon}</div>
      {label}
    </button>
  );
};
