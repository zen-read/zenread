import { Button } from "#Button/index.js";
import Close from "#Icons/mid/Close.js";
import { cn } from "@zenread/shared";

interface BookmarksOverlayProps {
  /** Some bookmarks */
  children?: React.ReactNode[];
  /** Is overlay opened */
  opened: boolean;
  /** Is data loaded */
  loaded: boolean;
}

/** Bookmark side overlay for grouping bookmarks of article */
const BookmarksOverlay = ({ children, opened }: BookmarksOverlayProps) => {
  return (
    <div className={cn("h-full p-6", !opened && "hidden")}>
      <div className="h-full w-[700px] overflow-hidden rounded-md bg-white">
        <div className="flex w-full items-center gap-5 border-b border-black p-4">
          <Button size="tiny" type="transparent" icon={<Close />} />
          <span className="font-heading-6">Bookmarks</span>
        </div>
        <div className="flex flex-col gap-5 px-5 py-7">
          {children ? (
            children
          ) : (
            <div className="text-center">
              <h5 className="font-heading-5">There&apos;s no notes!</h5>
              <p className="font-text pt-5">
                Add some notes, select text or create a bookmark
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

BookmarksOverlay.displayName = "BookmarksOverlay";
export { BookmarksOverlay as BookmarksOverlay };
