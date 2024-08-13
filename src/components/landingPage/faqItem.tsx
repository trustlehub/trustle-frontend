import { faqData } from "../faq";

import plus from "../../assets/plus.svg";
import xmark from "../../assets/xmark.svg";

function FAQItem({
  data,
  setId,
  id,
}: {
  data: faqData;
  setId: (id: number) => void;
  id: number | null;
}) {
  const onSelectFAQ = () => {
    if (id === data.id) {
      setId(-1);
    } else {
      setId(data.id);
    }
  };

  return (
    <div className="px-6 py-5 rounded-lg shadow-[0_0_0_1px_inset_#EAECF0] bg-white flex flex-col gap-4">
      <div
        className={`grid grid-cols-[1fr_auto] justify-between cursor-pointer group ${
          id === data.id ? "bg-red" : "bg-red"
        } `}
        onClick={onSelectFAQ}
      >
        <h1 className="font-primary text-grey-900 font-medium text-[18px] leading-[27px] group-active:bg-black">
          {data.title}
        </h1>
        <div className="flex items-center justify-center min-w-[32px] h-8">
          {id === data.id ? (
            <img src={xmark} alt="" />
          ) : (
            <img src={plus} alt="" />
          )}
        </div>
      </div>
      <div
        className={`w-full h-[2px] shadow-[0_0_0_1px_inset_#EAECF0] ${
          id === data.id ? "" : "hidden"
        }`}
      ></div>
      <div className={`flex flex-col gap-4 ${id === data.id ? "" : "hidden"}`}>
        {data.data.map((str, index) => (
          <h1 className="font-secondary text-grey-700" key={index}>
            {str}
          </h1>
        ))}
      </div>
    </div>
  );
}

export default FAQItem;
