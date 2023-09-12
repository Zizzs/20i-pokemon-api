type FooterProps = {
  currentOffset: number;
  setNewOffset: (offset: number) => void;
};

export const Footer = ({ currentOffset, setNewOffset }: FooterProps) => {
  return (
    <div className="static md:fixed bottom-0">
      <div className="flex w-[100vw] justify-between p-12">
        {currentOffset ? (
          <p
            onClick={() => {
              setNewOffset(currentOffset - 12);
            }}
            className={`font-roboto text-[16px] text-base-10 outline outline-1 outline-base-10 rounded py-2 px-3`}
          >
            Previous 12
          </p>
        ) : (
          <p
            className={`font-roboto text-[16px] text-base-10 outline outline-1 outline-base-10 rounded py-2 px-3`}
          >
            Disabled
          </p>
        )}
        <p
          onClick={() => {
            setNewOffset(currentOffset + 12);
          }}
          className={`font-roboto text-[16px] text-base-10 outline outline-1 outline-base-10 rounded py-2 px-3 `}
        >
          Next 12
        </p>
      </div>
    </div>
  );
};
