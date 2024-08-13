import { useState } from "react";
import Footer from "../../footer";
import Header from "../../header";
import OrderView from "./orderView";
import OrderDetail from "./orderDetail";

function OrderHistory() {
  const [detailId, setDetailId] = useState<number>(-1);
  return (
    <>
      <Header />
      <div className="max-w-[1512px] m-auto pt-24">
        <div className="px-[220px] pt-8 pb-28 flex gap-8">
          {detailId === -1 ? (
            <OrderView setDetailId={setDetailId} />
          ) : (
            <OrderDetail id={detailId} setDetailId={setDetailId} />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default OrderHistory;
