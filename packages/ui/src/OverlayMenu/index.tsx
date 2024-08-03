import { Button } from "#Button/index.js";
import Left from "#Icons/mid/Left.js";
import Params from "#Icons/mid/Params.js";
import Right from "#Icons/mid/Right.js";
import Sun from "#Icons/mid/Sun.js";
import { Logo } from "#Logo/index.js";
import { useState } from "react";

interface OverlayMenuProps {
  /** Is that menu opened? */
  opened: boolean;
  /** Function for redirect to "Read list" page */
  readListFn?: () => void;
  /** Switch dark/light mode */
  darkModeFn?: () => void;
  /** Function for opening settings overlay */
  paramsFn?: () => void;
}

/** Header of app. Use in every page. */
export const OverlayMenu = ({
  opened,
  readListFn,
  darkModeFn,
  paramsFn,
}: OverlayMenuProps) => {
  const [isOpened, setIsOpened] = useState(opened);
  return (
    <div className="flex items-center gap-4 rounded border border-black p-3 bg-white">
      <a href="/">
        <Logo type="small" className="ml-4 h-[30px]" />
      </a>
      <div className="flex items-center">
        {isOpened && (
          <>
            <Button
              onClick={readListFn}
              type="transparent"
              size="small"
              label="read list"
            />
            <Button
              onClick={darkModeFn}
              type="transparent"
              size="small"
              icon={<Sun />}
            />
            <Button
              onClick={paramsFn}
              type="transparent"
              size="small"
              icon={<Params />}
            />
          </>
        )}
        <Button
          onClick={() => setIsOpened(!isOpened)}
          type="transparent"
          size="small"
          icon={isOpened ? <Left /> : <Right />}
        />
      </div>
    </div>
  );
};
