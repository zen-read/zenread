import { SelectButton, SelectButtonParams } from "@zenread/ui";

interface CategoriesProps {
  cats: SelectButtonParams[];
  page: string | undefined;
  setPage: (page: string | undefined) => void;
}

export const Categories = ({ cats, page, setPage }: CategoriesProps) => {
  return (
    <div className="p-4 flex flex-col gap-4">
      {cats.map((item, index) => (
        <SelectButton
          key={index}
          label={item.label}
          icon={item.icon}
          onClick={() => setPage(item.label)}
        />
      ))}
    </div>
  );
};
