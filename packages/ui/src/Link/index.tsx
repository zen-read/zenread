import Link from "#Icons/small/Link";

export interface LinkProps {
  /** Title of link */
  title: string;
  /** URL of link */
  link: string;
}

/** Link button for opening in browser */
const LinkButton = ({ title, link }: LinkProps) => {
  return (
    <a
      className="duration-135 flex items-center gap-3 text-water transition-opacity ease-in-out hover:opacity-75"
      href={link}
    >
      {title}
      <Link className="filterColor-water" />
    </a>
  );
};

LinkButton.displayName = "LinkButton";
export { LinkButton as LinkButton };
