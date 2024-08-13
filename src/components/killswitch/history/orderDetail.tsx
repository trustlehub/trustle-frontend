import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useKillAccountContext } from "../../../context/killAccountContext";
import donwload from "../../../assets/icons/download.svg";
import { useOrderContext } from "../../../context/orderContext";

function OrderDetail({
  id,
  setDetailId,
}: {
  id: number;
  setDetailId: (data: number) => void;
}) {
  const { killAccounts } = useKillAccountContext();
  const { orders } = useOrderContext();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <h1 className="text-sm font-medium font-secondary text-grey-700">
          Order History
        </h1>
        <FontAwesomeIcon
          icon={faChevronRight}
          className="text-sm font-thin text-grey-500"
        />
        <h1 className="font-secondary font-medium text-sm text-[#5E93AB]">
          Order Details
        </h1>
      </div>
      <div className="rounded-lg px-8 pt-8 pb-16 bg-white shadow-[0_0_0_1px_inset_#f2f4f7] flex flex-col gap-8">
        <div className="flex flex-col gap-5">
          <h1 className="font-semibold font-secondary text-grey-900">
            Order Number  {orders[id].orderNumber}
          </h1>
          <div className="flex gap-10">
            <h1 className="font-semibold font-secondary text-grey-900">
              Order Date
            </h1>
            <h1 className="font-secondary text-grey-900">{(new Date(orders[id].date).toLocaleDateString("en-US", {year: "numeric",month: "short",day: "numeric"}))}</h1>
          </div>
        </div>
        <div className="w-full h-[1px] bg-grey-400" />
        <div className="flex flex-col gap-4 px-5 py-6">
          <h1 className="text-lg font-semibold leading-5 font-secondary text-grey-900">
            Order Status {orders[id].status}
          </h1>
          <div className="grid grid-cols-3">
            <div className="flex flex-col gap-6">
              <div className="relative">
                <div className="relative w-full h-1 translate-y-1/2 bg-grey-300"></div>
                <div className="absolute h-6 w-6 rounded-full bg-[#5E93AB] left-0 top-1 -translate-y-1/2"></div>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="font-semibold leading-5 font-secondary text-grey-900">
                  Identity Verification
                </h1>
                <h1 className="text-sm font-secondary text-grey-700">
                  Trustle is verifying your identity and legal information
                  before continuing the process
                </h1>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="relative">
                <div className="relative w-full h-1 translate-y-1/2 bg-grey-300"></div>
                <div className="absolute h-6 w-6 rounded-full bg-white shadow-[0_0_0_1px_inset_#98a2b3] left-0 top-1 -translate-y-1/2"></div>
              </div>
              <div className="flex flex-col gap-2 opacity-50">
                <h1 className="font-semibold leading-5 font-secondary text-grey-900">
                  Processing
                </h1>
                <h1 className="text-sm font-secondary text-grey-700">
                  Order is being processed
                </h1>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="relative">
                <div className="relative w-full h-1 translate-y-1/2 bg-grey-300"></div>
                <div className="absolute h-6 w-6 rounded-full bg-white shadow-[0_0_0_1px_inset_#98a2b3] left-0 top-1 -translate-y-1/2"></div>
              </div>
              <div className="flex flex-col gap-2 opacity-50">
                <h1 className="font-semibold leading-5 font-secondary text-grey-900">
                  Order Completed
                </h1>
                <h1 className="text-sm font-secondary text-grey-700"></h1>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-grey-400" />
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h1 className="text-lg font-semibold leading-5 font-secondary text-grey-900">
                Payment Information
              </h1>
              <div className="rounded-lg p-4 bg-[#fafafa] shadow-[0_0_0_1px_inset_#eaecf0] flex flex-col gap-[10px]">
                <div className="flex justify-between text-sm font-secondary">
                  <h1 className="text-grey-700">
                    US ${import.meta.env.VITE_PRICE_ACCOUNT}.00 x{" "}
                    {orders[id].cnt} accounts
                  </h1>
                  <h1 className="text-grey-900">
                    $
                    {parseInt(import.meta.env.VITE_PRICE_ACCOUNT) *
                      orders[id].cnt}
                    .00
                  </h1>
                </div>
                <div className="flex justify-between text-sm font-secondary">
                  <h1 className="text-grey-700">Verification cost</h1>
                  <h1 className="text-grey-900">$1.00</h1>
                </div>
                <div className="flex justify-between text-sm font-secondary">
                  <h1 className="text-grey-700">Tax</h1>
                  <h1 className="text-grey-900">
                    $
                    {(
                      (parseInt(import.meta.env.VITE_PRICE_ACCOUNT) *
                      orders[id].cnt +
                        1) /
                      4
                    ).toFixed(2)}
                  </h1>
                </div>
                <div className="h-[1px] w-full bg-[#eaecf0]"></div>
                <div className="flex justify-between font-semibold font-primary text-grey-900">
                  <h1>Total Paid:</h1>
                  <h1>
                    $
                    {(
                      ((parseInt(import.meta.env.VITE_PRICE_ACCOUNT) *
                      orders[id].cnt +
                        1) *
                        125) /
                      100
                    ).toFixed(2)}
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="rounded-lg px-4 py-[10px] flex gap-2 shadow-[0_0_0_1px_inset_#f3f4f7] relative after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:rounded-lg after:shadow-[0_1px_2px_0_#1018280D] hover:after:shadow-[0_0_0_0_rgba(21,30,48,0.10),0_3px_8px_0_rgba(21,30,48,0.10),0_14px_14px_0_rgba(21,30,48,0.09),0_31px_19px_0_rgba(21,30,48,0.05),0_55px_22px_0_rgba(21,30,48,0.01),0_87px_24px_0_rgba(21,30,48,0.0)] after:duration-300 items-center cursor-pointer">
                <h1 className="text-sm font-medium leading-6 font-secondary text-grey-900">
                  Download receipt
                </h1>
                <img src={donwload} alt="" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-semibold leading-5 font-secondary text-grey-900">
              Account Information
            </h1>
            <div className="rounded-lg p-4 bg-[#fafafa] shadow-[0_0_0_1px_inset_#eaecf0] flex flex-col gap-[10px]">
              <div className="flex justify-between text-sm font-secondary text-grey-700">
                <h1 className="">Platform</h1>
                <h1 className="">{orders[id].platform}</h1>
              </div>
              <div className="flex justify-between text-sm font-secondary text-grey-700">
                <h1 className="">Username</h1>
                <h1 className="">{orders[id].username}</h1>
              </div>
              <div className="flex justify-between text-sm font-secondary text-grey-700">
                <h1 className="">Date created</h1>
                <h1 className="">{(new Date(orders[id].date).toLocaleDateString("en-US", {year: "numeric",month: "short",day: "numeric"}))}</h1>
              </div>
            </div>
          </div>
          <div className="flex">
            <div
              className="rounded-lg bg-[linear-gradient(180deg,#1B253C_0%,#101828_100%)] px-4 py-3 font-secondary font-semibold text-sm text-white shadow-[0_0_0_1px_inset_#475467] relative after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:duration-300 hover:after:shadow-[0_0_0_0_rgba(21,30,48,0.10),0_3px_8px_0_rgba(21,30,48,0.10),0_14px_14px_0_rgba(21,30,48,0.09),0_31px_19px_0_rgba(21,30,48,0.05),0_55px_22px_0_rgba(21,30,48,0.01),0_87px_24px_0_rgba(21,30,48,0.0)] cursor-pointer text-center"
              onClick={() => {
                setDetailId(-1);
              }}
            >
              Back view
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetail;
