import { createContext, useContext } from "react";

export interface accountProperties {
  id: number;
  type: string;
  link: string;
  name: string;
  itemType: number;
  status: number;
  date: Date,
  orderNumber: String,
  cnt: Number
}

export type BasicContext = {
  accounts: Array<accountProperties>;
  setAccounts: (c: Array<accountProperties>) => void;
};

export const AccountContext = createContext<BasicContext>({
  accounts: [],
  setAccounts: () => { },
});

export const useAccountContext = () => useContext(AccountContext);
