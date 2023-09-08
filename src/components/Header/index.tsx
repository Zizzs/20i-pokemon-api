import classNames from "classnames";

type HeaderProps = {
  className?: string;
};

export const Header = ({ className = "" }: HeaderProps) => {
  return (
    <div
      className={classNames(
        className,
        "text-4xl font-encode-sans font-[600] flex justify-between"
      )}
    >
      <p>All the Pokemon!</p>
      <div className="flex">
        <p>Name</p>
        <p>Id</p>
      </div>
    </div>
  );
};
