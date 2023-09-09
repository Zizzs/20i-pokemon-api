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
        "text-4xl font-encode-sans font-[600] flex justify-between"
      )}
    >
      <p>All the Pokemon!</p>
      <div className="flex h-full justify-center items-center gap-8">
        <Input type="number" value={count} onChange={handleCount} />
        <div>
          <label>Name</label>
          <input
            type="radio"
            name="sort"
            value="name"
            checked={sort === "name"}
            onChange={() => handleSort("name")}
          />
        </div>
        <div>
          <label>Id</label>
          <input
            type="radio"
            name="sort"
            value="id"
            checked={sort === "id"}
            onChange={() => handleSort("id")}
          />
        </div>
      </div>
    </div>
  );
};
