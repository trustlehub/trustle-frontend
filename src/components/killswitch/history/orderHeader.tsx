import { useEffect, useState } from "react";
import { useOrderContext } from "../../../context/orderContext";

function OrderHeader({
  title,
  setOrderType,
  active,
  id,
}: {
  title: string;
  setOrderType: (data: number) => void;
  active: boolean;
  id: number;
}) {
  const [orderCount, setOrderCount] = useState<number>(0);
  const { orders } = useOrderContext();
  useEffect(() => {
    if (orders) {
      const orderList = orders.filter((order) => order.status === id + 1);
      setOrderCount(orderList.length);
    }
  }, []);

  return (
    <div
      className={`flex gap-2 rounded-md px-[14px] py-[10px] cursor-pointer ${
        active
          ? "bg-white shadow-[0_1px_2px_0_#1018280F,0_1px_3px_0_#1018281A]"
          : ""
      }`}
      onClick={() => setOrderType(id + 1)}
    >
      <h1 className="font-medium font-secondary text-grey-700">{title}</h1>
      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-grey-300">
        <h1 className="text-sm font-medium font-secondary text-grey-900">
          {orderCount}
        </h1>
      </div>
    </div>
  );
}

export default OrderHeader;
