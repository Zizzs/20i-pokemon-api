type FooterProps = {
  currentOffset: number;
  totalShown: number;
  setNewOffset: (offset: number) => void;
};

export const Footer = ({
  currentOffset,
  totalShown,
  setNewOffset,
}: FooterProps) => {
  return (
    <div className="static md:fixed bottom-0 w-full">
      <div className="flex w-[100vw] justify-between p-12 container mx-auto">
        {currentOffset ? (
          <p
            onClick={() => {
              setNewOffset(currentOffset - totalShown);
            }}
            className={`font-roboto text-[16px] text-base-10 outline outline-1 outline-base-10 rounded py-2 px-3`}
          >
            Previous {totalShown}
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
            setNewOffset(currentOffset + totalShown);
          }}
          className={`font-roboto text-[16px] text-base-10 outline outline-1 outline-base-10 rounded py-2 px-3 `}
        >
          Next {totalShown}
        </p>
      </div>
    </div>
  );
};
