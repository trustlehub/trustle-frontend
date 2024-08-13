function Code({
  number,
  current,
  active,
}: {
  number?: string;
  current?: boolean;
  active?: boolean;
}) {
  return (
    <div
      className={`rounded-lg px-2 py-[10px] duration-300 ${
        current && active
          ? "shadow-[0_0_0_1px_inset_#1D2939]"
          : current && !active
          ? "shadow-[0_0_0_1px_inset_#1D2939AB]"
          : "shadow-[0_0_0_1px_inset_#ECECEC,0_1px_2px_0_#1018280D]"
      } w-[61px] h-[80px] flex items-center justify-center`}
    >
      <h1 className="font-secondary font-black text-5xl text-grey-900">
        {number}
      </h1>
    </div>
  );
}

export default Code;
