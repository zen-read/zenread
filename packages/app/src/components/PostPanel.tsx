import { cn, useScrollDir } from "@zenread/shared";
import { PostMenu } from "@zenread/ui";
import { usePostStore } from "../store/usePostStore.js";
import { savePost } from "../utils/savePost.js";

interface PostPanelProps {
  isSavedPost: boolean;
}

const PostPanel = ({ isSavedPost }: PostPanelProps) => {
  const scrollDir = useScrollDir();
  const postStore = usePostStore();

  const handleSave = () => {
    console.log(postStore.data);
    savePost(JSON.stringify(postStore.data));
  };

  return (
    <div
      className={cn(
        "fixed w-full left-0 bottom-0 flex justify-center items-end pb-6 transition-transform ease-in-out",
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
