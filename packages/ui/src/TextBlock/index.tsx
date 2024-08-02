import { TextBlockType } from "@zenread/shared";
import { cva } from "class-variance-authority";

interface TextBlockProps {
  type: TextBlockType["type"];
  children: React.ReactNode;
  loaded?: boolean;
}

const variants = cva(["first:pt-0"], {
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

export const TextBlock = ({ type, children, loaded }: TextBlockProps) => {
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
