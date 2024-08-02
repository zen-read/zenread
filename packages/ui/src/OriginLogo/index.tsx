import { cn } from "@zenread/shared";

interface OriginLogoProps {
  imageUrl: string;
  label?: string;
  size: "S" | "M" | "L" | "XL";
  border?: boolean;
  loaded: boolean;
}

export const OriginLogo = ({
  imageUrl,
  label,
  size,
  border,
  loaded,
}: OriginLogoProps) => {
  return (
    <div className="flex items-center gap-4">
      <div
        className={cn(
          "overflow-hidden rounded-full",
          border && "border",
          size === "S" && "h-6 w-6",
          size === "M" && "h-7 w-7",
          size === "L" && "h-8 w-8",
          size === "XL" && "h-11 w-11",
        )}
      >
        {loaded ? (
          <img
            src={imageUrl}
            alt="Origin"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full animate-pulse bg-black-25%"></div>
        )}
      </div>
      {label && (
        <span
          className={cn(
            (size === "S" || size === "M") && "font-small",
            size === "L" && "font-text",
            size === "XL" && "font-heading-6",
          )}
        >
          {label}
        </span>
      )}
    </div>
  );
};
