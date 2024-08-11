interface ControlUnitParams {
  /** Control group label */
  label: string;
  /** Control group description */
  description?: string;
  /** What control we need to put? */
  control?: JSX.Element;
}

/** Control group for settings */
export const ControlUnit = ({
  label,
  description,
  control,
}: ControlUnitParams) => {
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
