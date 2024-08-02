import { Button } from "#Button";
import Bookmark from "#Icons/mid/Bookmark";
import Heart from "#Icons/mid/Heart";
import HeartOutline from "#Icons/mid/HeartOutline";
import List from "#Icons/mid/List";

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
