import { cn } from "@zenread/shared";

interface OriginLogoProps {
  /** Origin logo URL */
  imageUrl: string;
  /** Name of origin */
  label?: string;
  /** Size of origin block */
  size: "S" | "M" | "L" | "XL";
  /** Is logo have border around logo image? */
  border?: boolean;
  /** Is data about origin loaded? */
  loaded: boolean;
  /** Link to origin page inside app */
  link: string;
}

/** Component of origin logo */
export const OriginLogo = ({
  imageUrl,
  label,
  size,
  border,
  loaded,
  link,
}: OriginLogoProps) => {
  return (
    <a href={link}>
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
            <div className="h-full w-full animate-pulse bg-secondary-25%"></div>
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
    </a>
  );
};
