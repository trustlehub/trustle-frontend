import { useState, useEffect } from "react";
import {
  orderProperties,
  useOrderContext,
} from "../../../context/orderContext";
import OrderHeader from "./orderHeader";
import OrderItem from "./orderItem";

const OrderType = ["Open", "Close", "Failed"];

function OrderView({ setDetailId }: { setDetailId: (data: number) => void }) {
  const { orders } = useOrderContext();
  const [orderType, setOrderType] = useState<number>(1);
  const [orderList, setOrderList] = useState<Array<orderProperties>>([]);

  useEffect(() => {
    if (orders) {
      const list = orders.filter((order) => order.status === orderType);
      setOrderList(list);
    }
  }, [orderType]);

  return (
    <div className="flex flex-col w-full gap-6">
      <div className="flex flex-col gap-3">
        <h1 className="font-primary font-medium text-2xl leading-[30px] text-grey-900">
          Order history
        </h1>
        <h1 className="leading-5 font-secondary text-grey-700">
          View your ongoing and past Killswitch orders
        </h1>
      </div>
      <div className="w-full h-[1px] bg-grey-400" />
      <div className="rounded-lg p-6 shadow-[0_0_0_1px_inset_#f2f4f7] flex flex-col gap-6">
        <div className="rounded-lg bg-[#f9fafb] shadow-[0_0_0_1px_inset_#f2f4f7] p-[6px] flex gap-2">
          {OrderType.map((type, index) => (
            <OrderHeader
              title={type}
              setOrderType={setOrderType}
              active={orderType === index + 1}
              id={index}
              key={index}
            />
          ))}
        </div>
        <div className="flex flex-col gap-3">
          {orderList &&
            orderList.map((order, id) => (
              <OrderItem index={id} key={order._id} setDetailId={setDetailId} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default OrderView;
