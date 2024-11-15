import { Button } from "#Button/index.js";
import Left from "#Icons/mid/Left.js";
import Params from "#Icons/mid/Params.js";
import Right from "#Icons/mid/Right.js";
import { Logo } from "#Logo/index.js";
import { useState } from "react";

interface OverlayMenuProps {
  /** Is that menu opened? */
  opened: boolean;
  /** Function for redirect to "Read list" page */
  readListUrl: string;
  /** Function for opening settings overlay */
  paramsFn?: () => void;
}

/** Header of app. Use in every page. */
export const OverlayMenu = ({
  opened,
  readListUrl,
  paramsFn,
}: OverlayMenuProps) => {
  const [isOpened, setIsOpened] = useState(opened);
  return (
    <div className="flex items-center gap-4 rounded border border-secondary p-3 bg-primary">
      <a href="/" title="Go to main page">
        <Logo
          type="small"
          className="ml-4 h-[30px] hover:opacity-75 transition-opacity duration-135 ease-in-out"
        />
      </a>
      <div className="flex items-center">
        {isOpened && (
          <>
            <a href={readListUrl}>
              <Button type="transparent" size="small" label="Read list" />
            </a>
            <Button
              title="Open settings panel"
              type="transparent"
              size="small"
              onClick={paramsFn}
              icon={<Params />}
            />
          </>
        )}
        <Button
          onClick={() => setIsOpened(!isOpened)}
          type="transparent"
          size="small"
          title={isOpened ? "Swap menu" : "Open menu"}
          icon={isOpened ? <Left /> : <Right />}
        />
      </div>
    </div>
  );
};
