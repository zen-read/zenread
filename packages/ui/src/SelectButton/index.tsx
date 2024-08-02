import { cn } from "@zenread/shared";

interface ButtonParams {
  label?: string;
  icon: JSX.Element;
  className?: string;
  onClick?: () => void;
}

const SelectButton = ({ label, icon, className, onClick }: ButtonParams) => {
  return (
    <button
      className={cn(
        "font-select flex w-full items-center gap-4 rounded px-6 py-4 hover:bg-dust-25%",
        className,
      )}
      onClick={onClick}
    >
      {icon}
      {label}
    </button>
  );
};

export default SelectButton;
