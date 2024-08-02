interface SliderProps {
  /** Optional name of slider */
  label?: string;
  /** Default value */
  value: number;
  /** Min value */
  min?: number;
  /** Max value */
  max?: number;
}

/** Slider control */
export const Slider = ({ label, value, min, max }: SliderProps) => {
  return (
    <label htmlFor="slider" className="flex items-center gap-4">
      <span className="font-bold">{label}</span>
      <input
        className="rangeSlider h-1 w-[128px] appearance-none rounded-none bg-black disabled:pointer-events-none disabled:opacity-50"
        type="range"
        name="slider"
        min={min ? min : 0}
        max={max ? max : 100}
        defaultValue={value}
      />
    </label>
  );
};
