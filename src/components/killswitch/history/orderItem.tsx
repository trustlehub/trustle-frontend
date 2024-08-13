import info from "../../../assets/icons/info_red.svg";
import { useOrderContext } from "../../../context/orderContext";
import CardImg from "../process/cardImg";

function OrderItem({
  index,
  setDetailId,
}: {
  index: number;
  setDetailId: (data: number) => void;
}) {
  const { orders } = useOrderContext();

  return (
    <div className="rounded-lg w-full shadow-[0_0_0_1px_inset_#f2f4f7] py-3 pl-3 pr-5 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-20 h-20">
          <CardImg type={orders[index].platform} />
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="font-medium font-secondary text-grey-900">
            Account Removal - {orders[index].username}
          </h1>
          <h1 className="font-secondary text-sm leading-[18px] text-grey-700">
            Order Number {orders[index].orderNumber}
          </h1>
        </div>
      </div>
      <div
        className="flex gap-2 px-4 py-3 rounded-lg bg-white shadow-[0_0_0_1px_inset_#eaecf0] relative after:absolute after:duration-300 after:top-0 after:left-0 after:bottom-0 after:right-0 after:shadow-[0_1px_2px_0_#1018280D] hover:after:shadow-[0_0_0_0_rgba(21,30,48,0.10),0_3px_8px_0_rgba(21,30,48,0.10),0_14px_14px_0_rgba(21,30,48,0.09),0_31px_19px_0_rgba(21,30,48,0.05),0_55px_22px_0_rgba(21,30,48,0.01),0_87px_24px_0_rgba(21,30,48,0.0)] after:rounded-lg cursor-pointer items-center"
        onClick={() => setDetailId(index)}
      >
        <h1 className="text-sm font-semibold font-secondary text-grey-700">
          View Details
        </h1>
        <img src={info} alt="" />
      </div>
    </div>
  );
}

export default OrderItem;
