import { cn } from "#utils";
import { cva } from "class-variance-authority";

interface ButtonParams {
  /** Text inside the button */
  label?: string;
  /** Disable the button */
  disabled?: boolean;
  /** Button variant */
  type: "full" | "outline" | "transparent" | "loading";
  /** How big should the button be */
  size: "default" | "small" | "tiny";
  /** Icon button in React format */
  icon?: JSX.Element;
  /** Classes for styling by Tailwind */
  className?: string;
  /** Action on click */
  onClick?: () => void;
}

const variants = cva(
  [
    "inline-flex items-center rounded transition-colors duration-135 ease-in-out",
  ],
  {
    variants: {
      type: {
        full: "bg-black text-white hover:bg-black-75% disabled:bg-black-50%",
        outline:
          "border border-black text-black hover:bg-dust-25% disabled:border-black-75% disabled:text-black-75%",
        transparent:
          "bg-transparent text-black hover:bg-dust-25% disabled:text-black-75%",
        loading: "animate-pulse bg-black-25% w-20 cursor-default",
      },
      size: {
        default: "p-6 gap-4",
        small: "p-4 gap-4",
        tiny: "p-3 gap-3",
      },
    },
    defaultVariants: {
      type: "full",
      size: "default",
    },
  },
);

/** Default universal button */
export const Button = ({
  label,
  disabled,
  type,
  size,
  icon,
  className,
  onClick,
}: ButtonParams) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(variants({ type, size }), className)}
    >
      {type !== "loading" && (
        <>
          {label && <div className="font-button">{label}</div>}
          {icon && (
            <div
              className={cn(
                type === "full" && "filterColor-white",
                disabled && "opacity-75",
              )}
            >
              {icon}
            </div>
          )}
        </>
      )}
    </button>
  );
};

Button.displayName = "Button";
