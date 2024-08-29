import { cn } from "@zenread/shared";
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
  /** Hover title */
  title?: string;
  /** Action on click */
  onClick?: () => void;
}

const variants = cva(
  [
    "font-button inline-flex items-center rounded transition-colors duration-135 ease-in-out",
  ],
  {
    variants: {
      type: {
        full: "bg-secondary text-primary hover:bg-secondary-75% disabled:bg-secondary-50%",
        outline:
          "border border-secondary text-secondary hover:bg-dust-25% disabled:border-secondary-75% disabled:text-secondary-75%",
        transparent:
          "bg-transparent text-secondary hover:bg-dust-25% disabled:text-secondary-75%",
        loading: "animate-pulse bg-secondary-25% w-20 cursor-default",
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
  title,
  onClick,
}: ButtonParams) => {
  return (
    <button
      title={title ?? label}
      onClick={onClick}
      disabled={disabled}
      className={cn(variants({ type, size }), className)}
    >
      {type !== "loading" && (
        <>
          {label && <>{label}</>}
          {icon && (
            <div
              className={cn(
                type === "full"
                  ? "filterColor-primary"
                  : "filterColor-secondary",
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
