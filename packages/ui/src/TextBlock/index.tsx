import { cva } from "class-variance-authority";

interface TextBlockProps {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  children: React.ReactNode;
  loaded?: boolean;
}

const variants = cva([], {
  variants: {
    type: {
      h1: "pt-12 pb-6 font-heading-1",
      h2: "font-heading-2 pt-11 pb-4",
      h3: "font-heading-3 pt-11 pb-4",
      h4: "font-heading-4 pt-11 pb-4",
      h5: "font-heading-5 pt-11 pb-4",
      h6: "font-heading-6 pt-11 pb-4",
      p: "font-text py-6",
    },
  },
  defaultVariants: {
    type: "p",
  },
});

const TextBlock = ({ type, children, loaded }: TextBlockProps) => {
  const BlockTag = `${type}` as keyof JSX.IntrinsicElements;

  return (
    <>
      {loaded ? (
        <BlockTag className={variants({ type })}>{children}</BlockTag>
      ) : (
        <div className="h-60 w-full animate-pulse rounded-md bg-black-25%"></div>
      )}
    </>
  );
};

export default TextBlock;
