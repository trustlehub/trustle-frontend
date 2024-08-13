import { useState, useEffect } from "react";
import { useAccountContext } from "../../../context/accountsContext";
import { filterList } from "./setting";

function AccountHeader({
  index,
  accuntType,
  setAccuntType,
}: {
  index: number;
  accuntType: number;
  setAccuntType: (data: number) => void;
}) {
  const [countAccount, setCountAccount] = useState<number>(0);
  const { accounts } = useAccountContext();

  useEffect(() => {
    if (index === 0) {
      setCountAccount(accounts.length);
    } else {
      setCountAccount(
        accounts.filter((item) => item.itemType === index).length
      );
    }
  }, [accounts]);

  return (
    <div
      className={`flex gap-2 px-3 py-2 rounded-[100px] duration-300 ${
        index === accuntType
          ? "shadow-[0_0_0_1px_inset_#5E93AB] bg-[#5E93AB29]"
          : "shadow-[0_0_0_1px_inset_#eaecf0] relative before:absolute before:rounded-[100px] before:top-0 before:right-0 before:left-0 before:bottom-0 before:duration-300"
      } cursor-pointer`}
      onClick={() => setAccuntType(index)}
    >
      <h1
        className={`font-secondary ${
          index === accuntType
            ? "text-[#3D687C] font-semibold"
            : "text-grey-700 font-medium"
        }`}
      >
        {filterList[index]}
      </h1>
      <div
        className={`h-6 w-6 rounded-full flex items-center justify-center font-secondary font-medium text-sm ${
          index === accuntType
            ? "text-[#3D687C] bg-[#5E93AB29]"
            : "text-grey-800 bg-[#F2F4F7]"
        }`}
      >
        {countAccount}
      </div>
    </div>
  );
}

export default AccountHeader;
