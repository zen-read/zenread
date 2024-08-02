import { PostMenu } from "@zenread/ui";

const PostPanel = () => {
  return (
    <div className="fixed w-screen h-screen flex justify-center items-end pb-6 pointer-events-none">
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
