import { Button } from "#Button/index.js";
import Bookmark from "#Icons/mid/Bookmark.js";
import Heart from "#Icons/mid/Heart.js";
import HeartOutline from "#Icons/mid/HeartOutline.js";
import List from "#Icons/mid/List.js";

interface PostMenuParams {
  /** Is post placed in "Read list" yet */
  isSavedPost: boolean;
  /** Function to toggle status of saving. If post is saved menu will have button for toggling bookmark overlay */
  saveFn: () => void;
  /** Toggle for content overlay */
  listFn: () => void;
  /** Toggle bookmark overlay */
  bookmarkFn: () => void;
}

/** Post menu for managing reading post */
export const PostMenu = ({
  isSavedPost,
  saveFn,
  listFn,
  bookmarkFn,
}: PostMenuParams) => {
  return (
    <div className="flex items-center gap-4 rounded-md border border-secondary px-5 py-4 bg-primary">
      <Button
        title={isSavedPost ? "Unsave from read list" : "Save to read list"}
        onClick={saveFn}
        size="small"
        type="transparent"
        icon={isSavedPost ? <Heart /> : <HeartOutline />}
      />
      <Button
        title="Show content of post"
        onClick={listFn}
        size="small"
        type="transparent"
        icon={<List />}
      />
      {isSavedPost && (
        <Button
          title="Open bookmarks of the post"
          onClick={bookmarkFn}
          size="small"
          type="transparent"
          icon={<Bookmark />}
        />
      )}
    </div>
  );
};
