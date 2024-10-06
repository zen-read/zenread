import { cn, useScrollDir } from "@zenread/shared";
import { PostMenu } from "@zenread/ui";
import { usePostStore } from "../store/usePostStore.js";

interface PostPanelProps {
  isSavedPost: boolean;
}

const PostPanel = ({ isSavedPost }: PostPanelProps) => {
  const scrollDir = useScrollDir();
  const postStore = usePostStore();

  const handleSave = () => {
    console.log(postStore.data);
  };

  return (
    <div
      className={cn(
        "fixed lg:w-[1024px] w-full bottom-0 flex justify-center items-end pb-6 transition-transform ease-in-out",
        scrollDir === "down" && "translate-y-[74px]",
      )}
    >
      <PostMenu
        className="z-10"
        isSavedPost={isSavedPost}
        saveFn={handleSave}
        listFn={() => {}}
        bookmarkFn={() => {}}
      />
    </div>
  );
};

export default PostPanel;
