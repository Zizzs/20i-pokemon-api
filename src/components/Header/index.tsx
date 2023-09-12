import classNames from "classnames";
import { Input } from "../Input";

type HeaderProps = {
  className?: string;
  handleSort: (value: string) => void;
  handleTotal: (value: number) => void;
  totalValue: number;
  sort: string;
};

export const Header = ({
  className = "",
  handleSort,
  handleTotal,
  totalValue,
  sort,
}: HeaderProps) => {
  return (
    <div
      className={classNames(
        className,
        "text-4xl font-encode-sans font-[600] justify-between flex flex-col md:flex-row"
      )}
    >
      <p className="text-center md:text-left">All the Pokemon!</p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <div className="justify-end items-center flex">
          <Input
            value={totalValue}
            label={"Total Shown"}
            onChange={handleTotal}
          />
        </div>
        <div className="justify-center items-center flex">
          <input
            className="accent-base-10"
            type="radio"
            name="sort"
            value="name"
            checked={sort === "name"}
            onChange={() => handleSort("name")}
          />
          <label className="pl-4 text-[20px]">Sort Name</label>
        </div>
        <div className="justify-center items-center flex">
          <input
            className="accent-base-10"
            type="radio"
            name="sort"
            value="id"
            checked={sort === "id"}
            onChange={() => handleSort("id")}
          />
          <label className="pl-4 text-[20px]">Sort Id</label>
        </div>
      </div>
    </div>
  );
};
