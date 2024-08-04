import { PostMenu } from "@zenread/ui";
import { cn, useScrollDir } from "@zenread/shared";

interface PostPanelProps {
  isSavedPost: boolean;
}

const PostPanel = ({ isSavedPost }: PostPanelProps) => {
  const scrollDir = useScrollDir();

  return (
    <div
      className={cn(
        "fixed w-[1025px] bottom-0 flex justify-center items-end pb-6 transition-transform ease-in-out",
        scrollDir === "down" && "translate-y-[74px]",
      )}
    >
      <PostMenu
        className="z-10"
        isSavedPost={isSavedPost}
        saveFn={() => {}}
        listFn={() => {}}
        bookmarkFn={() => {}}
      />
    </div>
  );
};

export default PostPanel;
