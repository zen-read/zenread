export interface TagType {
  /** Name of tag */
  label?: string;
  /** Emoji icon */
  icon?: string;
  /** Link to "Read list" page w/ filter by this tag */
  link?: string;
  /** Color of tag */
  color:
    | "black"
    | "white"
    | "red"
    | "orange"
    | "yellow"
    | "lime"
    | "mint"
    | "sky"
    | "water"
    | "acidBlue"
    | "pink"
    | "loading";
}
