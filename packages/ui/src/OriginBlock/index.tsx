import { Button } from "#Button/index.js";
import Heart from "#Icons/mid/Heart.js";
import HeartOutline from "#Icons/mid/HeartOutline.js";
import Info from "#Icons/mid/Info.js";
import { LinkButton, LinkProps } from "#Link/index.js";
import { OriginLogo } from "#OriginLogo/index.js";
import { cn } from "@zenread/shared";
import { useState } from "react";

interface OriginBlockProps {
  /** Logo of origin */
  originLogo: string;
  /** Origin name */
  originName: string;
  /** Is that origin saved in favorites? */
  isSaved: boolean;
  /** About origin */
  description: string;
  /** Links for official site/pages of origin */
  links: LinkProps[];
  /** Is info loaded? */
  loaded: boolean;
  /** Classes for Tailwind styling */
  className?: string;
}

/** Information block of origin */
export const OriginBlock = ({
  originLogo,
  originName,
  isSaved,
  description,
  links,
  loaded,
  className,
}: OriginBlockProps) => {
  const [opened, setOpened] = useState(false);

  return (
    <div className={cn("relative w-full", className)}>
      <div className="relative z-20 flex w-full items-center justify-between rounded border border-secondary bg-primary px-6 py-4">
        <OriginLogo
          link=""
          size="XL"
          loaded={loaded}
          imageUrl={originLogo}
          label={originName}
          border
        />
        <div className="flex gap-3">
          <Button
            title={isSaved ? "Unsave from read list" : "Save to read list"}
            size="small"
            type="transparent"
            icon={
              isSaved ? (
                <Heart className="filterColor-secondary" />
              ) : (
                <HeartOutline className="filterColor-secondary" />
              )
            }
          />
          <Button
            title={`Show info about ${originName}`}
            onClick={() => setOpened(!opened)}
            size="small"
            type={opened ? "full" : "transparent"}
            icon={<Info className="filterColor-secondary" />}
          />
        </div>
      </div>
      {opened && (
        <div className="absolute z-10 -mt-[3px] grid w-full grid-cols-5 rounded-b border border-secondary bg-primary pt-[2px]">
          <p className="font-text col-start-1 col-end-4 p-6">{description}</p>
          <div className="col-start-4 col-end-6 p-6">
            <span className="font-text pb-5">Links</span>
            <div className="flex gap-4">
              {links.map((link, index) => (
                <LinkButton key={index} title={link.title} link={link.link} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
