import Bottom from "#Icons/small/Bottom.js";
import Check from "#Icons/small/Check.js";
import Top from "#Icons/small/Top.js";
import { useState } from "react";

interface DropdownMenuProps {
  /** What items to display */
  items: string[];
  /** What item is selected */
  selectedItem: string;
}

/** Dropdown menu */
const DropdownMenu = ({ items, selectedItem }: DropdownMenuProps) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(selectedItem);
  return (
    <div className="relative w-full">
      <div
        onClick={() => setOpen(!open)}
        className="flex w-full cursor-pointer justify-between gap-3 rounded border border-secondary p-4"
      >
        <span className="font-select pointer-events-none w-full text-ellipsis text-secondary">
          {activeItem}
        </span>
        {open ? (
          <Top className="shrink-0 filterColor-secondary" />
        ) : (
          <Bottom className="shrink-0 filterColor-secondary" />
        )}
      </div>
      {open && (
        <div className="absolute mt-3 max-h-14 w-full bg-primary z-10 cursor-pointer overflow-y-scroll rounded border border-secondary">
          {items.map((item, index) => (
            <div
              key={index}
              onClick={() => setActiveItem(item)}
              className="duration-135 flex justify-between gap-3 border-b border-secondary p-4 transition-colors ease-in-out last:border-none hover:bg-dust-25%"
            >
              <span className="font-select pointer-events-none w-full text-ellipsis text-secondary">
                {item}
              </span>
              {item === activeItem && (
                <Check className="shrink-0 filterColor-secondary" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

DropdownMenu.displayName = "DropdownMenu";
export { DropdownMenu as DropdownMenu };
