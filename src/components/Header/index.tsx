import classNames from "classnames";
import { Input } from "../Input";

type HeaderProps = {
  className?: string;
  handleCount: (value: number) => void;
  handleSort: (value: string) => void;
  count: number;
  sort: string;
};

export const Header = ({
  className = "",
  handleCount,
  handleSort,
  count,
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
        <Input
          label="Total Pokemon (Change Me!)"
          type="number"
          value={count}
          onChange={handleCount}
        />
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
