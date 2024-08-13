import { useState } from "react";
import { Link } from "react-router-dom";
import plus from "../../assets/plus.svg";
import avatar1 from "../../assets/avatar/kill_1.svg";
import sms from "../../assets/icons/sms.svg";

function FAQ() {
  const [faqId, setFaqId] = useState<number | null>(null);

  const onSelectFAQ = (id: number) => {
    if (faqId === id) {
      setFaqId(-1);
    } else {
      setFaqId(id);
    }
  };

  return (
    <div className="max-w-[1512px] m-auto">
      <div className="flex flex-col items-center justify-center py-24 gap-14 px-4">
        <div className="flex flex-col gap-8 relative z-10">
          <div className="flex flex-col gap-4">
            <h1 className="font-primary font-medium text-[40px] leading-[56px] tracking-[-1.2px] text-center text-transparent bg-clip-text bg-gradient-to-b from-[#1D2939] to-[#1D2939AB] capitalize">
              Frequently asked
              <br />
              questions
            </h1>
            <h1 className="font-secondary text-xl leading-[30px] text-grey-700 text-center">
              Everything you need to know about Search’s pricing and billing
            </h1>
          </div>
          <div className="max-w-[910px] w-full flex flex-col gap-4">
            <div
              className={`px-6 py-5 rounded-lg shadow-[0_0_0_1px_inset_#EAECF0] bg-white flex flex-col duration-300 ${faqId === 1 ? "gap-4" : "gap-0"
                }`}
            >
              <div
                className={`grid grid-cols-[1fr_auto] justify-between cursor-pointer ${faqId === 1 ? "active" : ""
                  }`}
                onClick={() => onSelectFAQ(1)}
              >
                <h1 className="font-primary text-grey-900 font-medium text-[18px] leading-[27px]">
                  Lorem ipsum dolor sit amet consectetur. Sed at tincidunt senectus tempor. Maecenas cursus.
                </h1>
                <div className="flex items-center justify-center min-w-[32px] h-8">
                  <img src={plus} alt="" className="duration-300" />
                </div>
              </div>
              <div
                className={`w-full shadow-[0_0_0_1px_inset_#EAECF0] duration-300 ${faqId === 1 ? "h-[2px]" : "max-h-0"
                  }`}
              />
              <div
                className={`flex flex-col gap-4 duration-300 overflow-hidden ${faqId === 1 ? "max-h-screen" : "max-h-0"
                  }`}
              >
                <h1 className="font-secondary text-grey-700">
                  Lorem ipsum dolor sit amet consectetur. Vulputate ultricies bibendum pharetra hendrerit at turpis nulla mauris. Augue aliquam congue massa platea turpis bibendum. Purus integer gravida felis augue scelerisque egestas feugiat. Est velit arcu maecenas at arcu commodo leo ut. Platea mattis nisi ut aliquam eget amet. Enim mi iaculis.
                </h1>
              </div>
            </div>
            <div
              className={`px-6 py-5 rounded-lg shadow-[0_0_0_1px_inset_#EAECF0] bg-white flex flex-col duration-300 ${faqId === 2 ? "gap-4" : "gap-0"
                }`}
            >
              <div
                className={`grid grid-cols-[1fr_auto] justify-between cursor-pointer ${faqId === 2 ? "active" : ""
                  }`}
                onClick={() => onSelectFAQ(2)}
              >
                <h1 className="font-primary text-grey-900 font-medium text-[18px] leading-[27px]">
                  Lorem ipsum dolor sit amet consectetur. Enim aliquam porta sed justo neque faucibus. Odio.
                </h1>
                <div className="flex items-center justify-center min-w-[32px] h-8">
                  <img src={plus} alt="" className="duration-300" />
                </div>
              </div>
              <div
                className={`w-full shadow-[0_0_0_1px_inset_#EAECF0] duration-300 ${faqId === 2 ? "h-[2px]" : "max-h-0"
                  }`}
              />
              <div
                className={`flex flex-col gap-4 overflow-hidden duration-300 ${faqId === 2 ? "max-h-screen" : "max-h-0"
                  }`}
              >
                <h1 className="font-secondary text-grey-700">
                  Lorem ipsum dolor sit amet consectetur. Et feugiat imperdiet
                  sed enim est. Lorem ipsum dolor sit amet consectetur. Et
                  feugiat imperdiet sed enim est.Lorem ipsum dolor sit amet
                  consectetur. Et feugiat imperdiet sed enim est.
                </h1>
              </div>
            </div>
            <div
              className={`px-6 py-5 rounded-lg shadow-[0_0_0_1px_inset_#EAECF0] bg-white flex flex-col duration-300 ${faqId === 3 ? "gap-4" : "gap-0"
                }`}
            >
              <div
                className={`grid grid-cols-[1fr_auto] justify-between cursor-pointer ${faqId === 3 ? "active" : ""
                  }`}
                onClick={() => onSelectFAQ(3)}
              >
                <h1 className="font-primary text-grey-900 font-medium text-[18px] leading-[27px]">
                  Lorem ipsum dolor sit amet consectetur. Vel tellus id odio elit consectetur ac viverra varius.
                </h1>
                <div className="flex items-center justify-center min-w-[32px] h-8">
                  <img src={plus} alt="" className="duration-300" />
                </div>
              </div>
              <div
                className={`w-full shadow-[0_0_0_1px_inset_#EAECF0] duration-300 ${faqId === 3 ? "h-[2px]" : "max-h-0"
                  }`}
              />
              <div
                className={`flex flex-col gap-4 overflow-hidden duration-300 ${faqId === 3 ? "max-h-screen" : "max-h-0"
                  }`}
              >
                <h1 className="font-secondary text-grey-700">
                  Lorem ipsum dolor sit amet consectetur. Et feugiat imperdiet
                  sed enim est. Lorem ipsum dolor sit amet consectetur. Et
                  feugiat imperdiet sed enim est.Lorem ipsum dolor sit amet
                  consectetur. Et feugiat imperdiet sed enim est.
                </h1>
              </div>
            </div>
            <div
              className={`px-6 py-5 rounded-lg shadow-[0_0_0_1px_inset_#EAECF0] bg-white flex flex-col duration-300 ${faqId === 4 ? "gap-4" : "gap-0"
                }`}
            >
              <div
                className={`grid grid-cols-[1fr_auto] justify-between cursor-pointer ${faqId === 4 ? "active" : ""
                  }`}
                onClick={() => onSelectFAQ(4)}
              >
                <h1 className="font-primary text-grey-900 font-medium text-[18px] leading-[27px]">
                  Lorem ipsum dolor sit amet consectetur. Rhoncus ipsum nibh sit adipiscing arcu varius.
                </h1>
                <div className="flex items-center justify-center min-w-[32px] h-8">
                  <img src={plus} alt="" className="duration-300" />
                </div>
              </div>
              <div
                className={`w-full shadow-[0_0_0_1px_inset_#EAECF0] duration-300 ${faqId === 4 ? "h-[2px]" : "max-h-0"
                  }`}
              />
              <div
                className={`flex flex-col gap-4 overflow-hidden duration-300 ${faqId === 4 ? "max-h-screen" : "max-h-0"
                  }`}
              >
                <h1 className="font-secondary text-grey-700">
                  Lorem ipsum dolor sit amet consectetur. Et feugiat imperdiet
                  sed enim est. Lorem ipsum dolor sit amet consectetur. Et
                  feugiat imperdiet sed enim est.Lorem ipsum dolor sit amet
                  consectetur. Et feugiat imperdiet sed enim est.
                </h1>
              </div>
            </div>
            <div
              className={`px-6 py-5 rounded-lg shadow-[0_0_0_1px_inset_#EAECF0] bg-white flex flex-col duration-300 ${faqId === 5 ? "gap-4" : "gap-0"
                }`}
            >
              <div
                className={`grid grid-cols-[1fr_auto] justify-between cursor-pointer ${faqId === 5 ? "active" : ""
                  }`}
                onClick={() => onSelectFAQ(5)}
              >
                <h1 className="font-primary text-grey-900 font-medium text-[18px] leading-[27px]">
                  Lorem ipsum dolor sit amet consectetur. Ut enim in mattis in placerat quis nunc dui aliquam.
                </h1>
                <div className="flex items-center justify-center min-w-[32px] h-8">
                  <img src={plus} alt="" className="duration-300" />
                </div>
              </div>
              <div
                className={`w-full shadow-[0_0_0_1px_inset_#EAECF0] duration-300 ${faqId === 5 ? "h-[2px]" : "max-h-0"
                  }`}
              />
              <div
                className={`flex flex-col gap-4 overflow-hidden duration-300 ${faqId === 5 ? "max-h-screen" : "max-h-0"
                  }`}
              >
                <h1 className="font-secondary text-grey-700">
                  Lorem ipsum dolor sit amet consectetur. Et feugiat imperdiet
                  sed enim est. Lorem ipsum dolor sit amet consectetur. Et
                  feugiat imperdiet sed enim est.Lorem ipsum dolor sit amet
                  consectetur. Et feugiat imperdiet sed enim est.
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-white flex flex-col items-center justify-center py-10 gap-8 px-4 bg-[#F9FAFB">
          <div className="flex items-end relative">
            <img src={avatar1} alt="" className="rounded-full" />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-secondary font-medium text-[20px] leading-[30px] text-center text-grey-900">
              Still have questions?
            </h1>
            <h1 className="font-secondary text-[18px] leading-7 text-center text-grey-700">
              Can’t find the answer you’re looking for? Please chat to our
              friendly team.
            </h1>
          </div>
          <Link
            to="mailto:support@trustle-beta.com"
            className="flex justify-center"
          >
            <div className="px-4 py-3 flex gap-0 hover:gap-2 rounded-lg bg-gradient-to-r from-[#1B253C] to-[#101828] items-center justify-center cursor-pointer border border-[#475467] duration-300 hover:shadow-[0_0_0_0_rgba(21,30,48,0.10),0_3px_8px_0_rgba(21,30,48,0.10),0_14px_14px_0_rgba(21,30,48,0.09),0_31px_19px_0_rgba(21,30,48,0.05),0_55px_22px_0_rgba(21,30,48,0.01),0_87px_24px_0_rgba(21,30,48,0.0)] group">
              <h1 className="text-sm text-white font-secondary whitespace-nowrap">
                Get In Touch
              </h1>
              <div className="w-0 duration-300 group-hover:w-[18px] h-[18px] flex items-center">
                <img
                  src={sms}
                  alt=""
                  className="text-white duration-200 opacity-0 group-hover:opacity-100"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
