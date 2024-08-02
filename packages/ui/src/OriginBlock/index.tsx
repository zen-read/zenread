import { Button } from "#Button/index.js";
import Heart from "#Icons/mid/Heart.js";
import HeartOutline from "#Icons/mid/HeartOutline.js";
import Info from "#Icons/mid/Info.js";
import { LinkButton, LinkProps } from "#Link/index.js";
import { OriginLogo } from "#OriginLogo/index.js";
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
}

/** Information block of origin */
export const OriginBlock = ({
  originLogo,
  originName,
  isSaved,
  description,
  links,
  loaded,
}: OriginBlockProps) => {
  const [opened, setOpened] = useState(true);

  return (
    <div className="relative w-full">
      <div className="relative z-10 flex w-full items-center justify-between rounded border border-black bg-white px-6 py-4">
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
            size="small"
            type="transparent"
            icon={isSaved ? <Heart /> : <HeartOutline />}
          />
          <Button
            onClick={() => setOpened(!opened)}
            size="small"
            type={opened ? "full" : "transparent"}
            icon={<Info />}
          />
        </div>
      </div>
      {opened && (
        <div className="absolute z-0 -mt-[3px] grid w-full grid-cols-5 rounded-b border border-black bg-white pt-[2px]">
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
