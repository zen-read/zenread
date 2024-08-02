import { Button } from "#Button";
import Left from "#Icons/mid/Left";
import Params from "#Icons/mid/Params";
import Right from "#Icons/mid/Right";
import Sun from "#Icons/mid/Sun";
import { Logo } from "#Logo";
import { useState } from "react";

interface OverlayMenuProps {
  active: number;
  opened: boolean;
  readListFn?: () => void;
  darkModeFn?: () => void;
  paramsFn?: () => void;
}

const OverlayMenu = ({
  opened,
  readListFn,
  darkModeFn,
  paramsFn,
}: OverlayMenuProps) => {
  const [isOpened, setIsOpened] = useState(opened);
  return (
    <div className="flex items-center gap-4 rounded border border-black p-3">
      <Logo type="small" className="ml-4 h-[30px]" />
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

export default OverlayMenu;
