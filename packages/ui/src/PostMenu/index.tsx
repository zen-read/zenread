import { Button } from "#Button/index.js";
import Bookmark from "#Icons/mid/Bookmark.js";
import Heart from "#Icons/mid/Heart.js";
import HeartOutline from "#Icons/mid/HeartOutline.js";
import List from "#Icons/mid/List.js";

interface PostMenuParams {
  isSavedPost: boolean;
  saveFn: () => void;
  listFn: () => void;
  bookmarkFn: () => void;
}

const PostMenu = ({
  isSavedPost,
  saveFn,
  listFn,
  bookmarkFn,
}: PostMenuParams) => {
  return (
    <div className="flex items-center gap-4 rounded-md border border-black px-5 py-4">
      <Button
        onClick={saveFn}
        size="small"
        type="transparent"
        icon={isSavedPost ? <Heart /> : <HeartOutline />}
      />
      <Button
        onClick={listFn}
        size="small"
        type="transparent"
        icon={<List />}
      />
      {isSavedPost && (
        <Button
          onClick={bookmarkFn}
          size="small"
          type="transparent"
          icon={<Bookmark />}
        />
      )}
    </div>
  );
};

export default PostMenu;
