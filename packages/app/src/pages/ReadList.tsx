import type { PostDataType } from "@zenread/shared/src";
import type { TagProps } from "@zenread/ui";
import { Button, PostCard, SearchInput, Tag } from "@zenread/ui";
import { Filter } from "@zenread/ui/icons/mid/index.js";
import { useEffect, useState } from "react";
import BodyWrapper from "../components/BodyWrapper.js";
import { useUserStore } from "../store/useUserStore.js";
import { getAllSavedPosts } from "../utils/getAllSavedPosts.js";

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

const ReadList = () => {
  const [isFilterShowing, setIsFilterShowing] = useState(false);
  const [posts, setPosts] = useState<PostDataType[]>([]);
  const { userStore } = useUserStore();

  useEffect(() => {
    setIsFilterShowing(false);

    getAllSavedPosts().then((r) => {
      if (r) {
        setPosts(r as PostDataType[]);
      }
    });
  }, [userStore, setPosts]);

  return (
    <BodyWrapper className="px-6" fullWidth>
      <h1 className="mt-5 font-bold text-[40px]">Read list</h1>
      <div className="mt-5 grid grid-cols-[1fr_2fr] gap-[18px]">
        <div className="sticky">
          <div className="flex gap-3">
            <Button
              onClick={() => setIsFilterShowing(!isFilterShowing)}
              title="Show filters"
              type={isFilterShowing ? "full" : "transparent"}
              size="small"
              icon={<Filter />}
            />
            <SearchInput type="outline" placeholder="Search..." />
          </div>
          {isFilterShowing && (
            <div>
              <div className="flex flex-col gap-5 mt-6">
                <span className="font-text pb-3 border-b border-secondary-25% text-secondary-50%">
                  Tags
                </span>
                <div className="inline-flex gap-4">
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
              </div>
              <div className="flex flex-col gap-5 mt-6">
                <span className="font-text pb-3 border-b border-secondary-25% text-secondary-50%">
                  Origins
                </span>
                <div className="inline-flex gap-4">
                  {userStore.origins.map((origin) => (
                    <Button
                      key={origin}
                      label={origin}
                      type="full"
                      size="tiny"
                      title={origin}
                      onClick={() => {}}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        <div>
          <h4 className="font-heading-4">Recently added</h4>
          <div className="mt-7 grid grid-cols-2 gap-[18px]">
            {posts.length > 0 ? (
              posts.map((data, index) => (
                <PostCard
                  key={index}
                  tags={data.tags}
                  header={data.title}
                  date={data.date_of_publish}
                  originLogo={data.origin_logo}
                  originUrl={data.origin_link}
                  backgroundImage={data.cover}
                  href="/post"
                />
              ))
            ) : (
              <div>No data</div>
            )}
          </div>
        </div>
      </div>
    </BodyWrapper>
  );
};

export default ReadList;
