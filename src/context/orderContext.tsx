import { createContext, useContext } from "react";

export interface orderProperties {
  _id: number;
  link: string;
  username: string;
  platform: string;
  status: number;
  date: string;
  orderNumber: string;
  cnt: number;
}

export type BasicContext = {
  orders: Array<orderProperties>;
  setOrders: (c: Array<orderProperties>) => void;
};

export const OrderContext = createContext<BasicContext>({
  orders: [],
  setOrders: () => { },
});

export const useOrderContext = () => useContext(OrderContext);
