import { PostMenu } from "@zenread/ui";
import { cn, useScrollDir } from "@zenread/shared";

const PostPanel = () => {
  const scrollDir = useScrollDir();

  return (
    <div
      className={cn(
        "fixed w-screen h-screen flex justify-center items-end pb-6 pointer-events-none transition-transform ease-in-out",
        scrollDir === "down" && "translate-y-[74px]",
      )}
    >
      <PostMenu
        isSavedPost
        saveFn={() => {}}
        listFn={() => {}}
        bookmarkFn={() => {}}
      />
    </div>
  );
};

export default PostPanel;
