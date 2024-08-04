interface ControllUnitParams {
  /** Controll group label */
  label: string;
  /** Controll group description */
  description?: string;
  /** What controll we need to put? */
  control?: JSX.Element;
}

/** Controll group for settings */
const ControllUnit = ({ label, description, control }: ControllUnitParams) => {
  return (
    <div className="flex items-center border-b border-secondary py-5">
      <div className="shrink grow basis-0">
        <span className="mb-4 w-full font-bold">{label}</span>
        {description && <p className="font-small">{description}</p>}
      </div>
      {control}
    </div>
  );
};

ControllUnit.displayName = "ControllUnit";
export { ControllUnit as ControllUnit };
