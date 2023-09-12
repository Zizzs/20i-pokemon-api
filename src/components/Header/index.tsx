import classNames from "classnames";
import { Input } from "../Input";

type HeaderProps = {
  className?: string;
  handleSort: (value: string) => void;
  sort: string;
};

export const Header = ({ className = "", handleSort, sort }: HeaderProps) => {
  return (
    <div
      className={classNames(
        className,
        "text-4xl font-encode-sans font-[600] justify-between flex flex-col md:flex-row"
      )}
    >
      <p className="text-center md:text-left">All the Pokemon!</p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
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
