import OriginLogo from "#OriginLogo/index.js";
import Tag from "#Tag/index.js";
import { cn, formatDate } from "@zenread/shared";

interface PostCardProps {
  backgroundImage?: string;
  header: string;
  date: Date;
  originLogo: string;
  tags?: JSX.Element[];
  loaded: boolean;
}

export const PostCard = ({
  backgroundImage,
  header,
  date,
  originLogo,
  tags,
  loaded,
}: PostCardProps) => {
  return (
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
              <div className="flex gap-4">{tags.map((tag) => tag)}</div>
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
            <OriginLogo loaded={loaded} imageUrl={originLogo} size="M" />
            {loaded ? (
              <span className="font-date flex items-center text-white">
                {formatDate(new Date(date))}
              </span>
            ) : (
              <div className="h-5 w-12 animate-pulse rounded bg-black-25%"></div>
            )}
          </div>
          {loaded ? (
            <h1 className="font-heading-4 text-white">{header}</h1>
          ) : (
            <div className="h-8 w-13 animate-pulse rounded-md bg-black-25%"></div>
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
  );
};
