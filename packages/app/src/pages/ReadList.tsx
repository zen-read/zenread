import type { PostCardProps, TagProps } from "@zenread/ui";
import { Button, PostCard, SearchInput, Tag } from "@zenread/ui";
import { Filter } from "@zenread/ui/icons/mid/index.js";
import { useState } from "react";
import BodyWrapper from "../components/BodyWrapper.js";

const tags: TagProps[] = [
  {
    label: "Design",
    icon: "",
    link: "",
    color: "orange",
  },
  {
    label: "Dev",
    icon: "",
    link: "",
    color: "water",
  },
  {
    label: "Science",
    icon: "",
    link: "",
    color: "mint",
  },
];

const templateArticles: PostCardProps[] = [
  {
    backgroundImage:
      "https://i1.sndcdn.com/artworks-oGvaMt0dsBWPL7WZ-qgbAMA-t500x500.jpg",
    header: "Maxwell",
    date: new Date(),
    originLogo:
      "https://m.media-amazon.com/images/I/31+8EYj8ZdL._UXNaN_FMjpg_QL85_.jpg",
    loaded: true,
    href: "/post",
    originUrl: "",
    tags: [<Tag key={0} link="" label="Design" color="orange" />],
  },
  {
    backgroundImage:
      "https://i1.sndcdn.com/artworks-oGvaMt0dsBWPL7WZ-qgbAMA-t500x500.jpg",
    header: "Maxwell",
    date: new Date(),
    originLogo:
      "https://m.media-amazon.com/images/I/31+8EYj8ZdL._UXNaN_FMjpg_QL85_.jpg",
    loaded: true,
    href: "/post",
    originUrl: "",
    tags: [
      <Tag key={2} link="" label="Dev" color="water" />,
      <Tag key={3} link="" label="Science" color="mint" />,
    ],
  },
];

const ReadList = () => {
  const [isFilterShowing, setIsFilterShowing] = useState(false);

  return (
    <BodyWrapper className="px-6" fullWidth>
      <h1 className="mt-5 font-bold text-[40px]">Read list</h1>
      <div className="mt-5 grid grid-cols-2 gap-[18px]">
        <div className="sticky">
          <div className="flex gap-3">
            <Button
              onClick={() => setIsFilterShowing(!isFilterShowing)}
              title="Show filters"
              type={isFilterShowing ? "full" : "transparent"}
              size="small"
              icon={
                <Filter
                  className={
                    isFilterShowing
                      ? "filterColor-primary"
                      : "filterColor-secondary"
                  }
                />
              }
            />
            <SearchInput type="outline" placeholder="Search..." />
          </div>
          {isFilterShowing && (
            <div className="mt-6 inline-flex gap-4">
              {tags.map((tag, index) => (
                <Tag
                  key={index}
                  label={tag.label}
                  icon={tag.icon}
                  color={tag.color}
                  link={tag.link}
                />
              ))}
            </div>
          )}
        </div>
        <div>
          <h4 className="font-heading-4">Recently added</h4>
          <div className="mt-7 grid grid-cols-2 gap-[18px]">
            {templateArticles.map((data, index) => (
              <PostCard key={index} {...data} />
            ))}
          </div>
        </div>
      </div>
    </BodyWrapper>
  );
};

export default ReadList;
