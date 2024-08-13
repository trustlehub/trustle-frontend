import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { accountProperties } from "../../../context/accountsContext";
import CardImg from "./cardImg";

function ProcessComponent({
  data,
  expandId,
  setExpandId,
}: {
  data: accountProperties;
  expandId: number;
  setExpandId: (data: number) => void;
}) {
  return (
    <div className="rounded-lg shadow-[0_0_0_1px_inset_#f2f4f7] p-4 flex flex-col">
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <div className="w-14 h-14 flex items-center justify-center">
            <CardImg type={data.type} />
          </div>
          <h1 className="font-secondary font-medium leading-5 text-grey-900">
            {data.type} - {data.name}
          </h1>
        </div>
        <div
          className="rounded-lg px-4 py-3 flex gap-2 shadow-[0_0_0_1px_inset_#eaecf0] relative after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:rounded-lg after:shadow-[0_1px_2px_0_#1018280D] hover:after:shadow-[0_0_0_0_rgba(21,30,48,0.10),0_3px_8px_0_rgba(21,30,48,0.10),0_14px_14px_0_rgba(21,30,48,0.09),0_31px_19px_0_rgba(21,30,48,0.05),0_55px_22px_0_rgba(21,30,48,0.01),0_87px_24px_0_rgba(21,30,48,0.0)] after:duration-300 cursor-pointer"
          onClick={() => setExpandId(data.id)}
        >
          <h1 className="font-secondary font-semibold text-sm text-grey-700">
            Expand
          </h1>
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`text-grey-900 duration-300 ${
              expandId === data.id && "rotate-180"
            }`}
          />
        </div>
      </div>
      <div
        className={`flex flex-col gap-8 duration-700 overflow-hidden ${
          data.id === expandId
            ? "max-h-screen pt-8 mt-8 border-t border-t-grey-400"
            : "max-h-0 mt-0 pt-0"
        }`}
      >
        <div className="flex gap-2">
          <div className="flex flex-col gap-5 font-secondary font-semibold text-grey-900">
            <h1 className="">Order Number</h1>
            <h1 className="">Order Date</h1>
          </div>
          <div className="flex flex-col gap-5 font-secondary text-grey-900">
            <h1 className="font-semibold">27846345364-234523</h1>
            <h1 className="">Nov 18,2023</h1>
          </div>
        </div>
        <div className="px-5 py-6 flex flex-col gap-4">
          <h1 className="font-secondary font-semibold text-lg leading-5 text-grey-900">
            Order Status
          </h1>
          <div className="grid grid-cols-3 gap-2">
            <div className="flex flex-col gap-6">
              <div className="relative">
                <div className="w-full h-1 bg-grey-300 relative translate-y-1/2"></div>
                <div className="absolute h-6 w-6 rounded-full bg-[#5E93AB] left-0 top-1 -translate-y-1/2"></div>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="font-secondary font-semibold leading-5 text-grey-900">
                  Identity Verification
                </h1>
                <h1 className="font-secondary text-sm text-grey-700">
                  Trustle is verifying your identity and legal information
                  before continuing the process
                </h1>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="relative">
                <div className="w-full h-1 bg-grey-300 relative translate-y-1/2"></div>
                <div className="absolute h-6 w-6 rounded-full bg-white shadow-[0_0_0_1px_inset_#98a2b3] left-0 top-1 -translate-y-1/2"></div>
              </div>
              <div className="flex flex-col gap-2 opacity-50">
                <h1 className="font-secondary font-semibold leading-5 text-grey-900">
                  Processing
                </h1>
                <h1 className="font-secondary text-sm text-grey-700">
                  Order is being processed
                </h1>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="relative">
                <div className="w-full h-1 bg-grey-300 relative translate-y-1/2"></div>
                <div className="absolute h-6 w-6 rounded-full bg-white shadow-[0_0_0_1px_inset_#98a2b3] left-0 top-1 -translate-y-1/2"></div>
              </div>
              <div className="flex flex-col gap-2 opacity-50">
                <h1 className="font-secondary font-semibold leading-5 text-grey-900">
                  Order Completed
                </h1>
                <h1 className="font-secondary text-sm text-grey-700"></h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProcessComponent;
