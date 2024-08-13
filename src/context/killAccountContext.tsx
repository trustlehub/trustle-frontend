import { createContext, useContext } from "react";
import { accountProperties } from "./accountsContext";

interface BasicContext {
  killAccounts: Array<accountProperties>;
  setKillAccounts: (c: Array<accountProperties>) => void;
}

export const KillAccountContext = createContext<BasicContext>({
  killAccounts: [],
  setKillAccounts: () => {},
});

export const useKillAccountContext = () => useContext(KillAccountContext);
