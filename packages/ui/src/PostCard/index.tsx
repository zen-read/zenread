import { Tag } from "#Tag/index.js";
import { cn, formatDate } from "@zenread/shared";
import type { TagType } from "@zenread/shared/src";
import { OriginLogo } from "../OriginLogo/index.js";

export interface PostCardProps {
  /** Article main image */
  backgroundImage?: string;
  /** Title of article */
  header: string;
  /** Date of publish or last edit */
  date: Date;
  /** Link to origin inside app */
  originUrl: string;
  /** Origin logo image */
  originLogo: string;
  /** Post tags if post is saved yet */
  tags?: TagType[];
  /** Is content loaded */
  loaded?: boolean;
  /** Link to full page of article */
  href?: string;
}

/** Post card for origin, main or read list page */
export const PostCard = ({
  backgroundImage,
  header,
  date,
  originLogo,
  tags,
  originUrl,
  loaded = true,
  href,
}: PostCardProps) => {
  return (
    <a href={href}>
      <div className="relative overflow-hidden rounded-md">
        <div
          className={cn(
            "relative z-10 flex w-full flex-col p-6",
            "bg-gradient-to-b from-transparent to-full-black-25%",
            loaded === false && "animate-pulse",
          )}
        >
          {tags && (
            <>
              {loaded ? (
                <div className="flex gap-4">
                  {tags.map((tag) => (
                    <Tag key={tag.label} label={tag.label} color={tag.color} />
                  ))}
                </div>
              ) : (
                <div className="flex gap-4">
                  <Tag label="" color="loading" />
                  <Tag label="" color="loading" />
                </div>
              )}
            </>
          )}
          <div className="w-0 h-[140px]"></div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-4">
              <OriginLogo
                link={originUrl}
                loaded={loaded}
                imageUrl={originLogo}
                size="M"
              />
              {loaded ? (
                <span className="font-date flex items-center text-white">
                  {formatDate(new Date(date))}
                </span>
              ) : (
                <div className="h-5 w-12 animate-pulse rounded bg-secondary-25%"></div>
              )}
            </div>
            {loaded ? (
              <h1 className="font-heading-4 text-white">{header}</h1>
            ) : (
              <div className="h-8 w-13 animate-pulse rounded-md bg-secondary-25%"></div>
            )}
          </div>
        </div>
        {loaded && (
          <img
            src={backgroundImage}
            alt="background"
            className="absolute inset-0 z-0 h-full w-full object-cover"
          />
        )}
      </div>
    </a>
  );
};
