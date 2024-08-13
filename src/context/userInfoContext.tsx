import { createContext, useContext } from "react";

export interface userInfoProperties {
  id: number;
  credit: number;
  accept: boolean;
}

interface BasicContext {
  userInfo: userInfoProperties;
  setUserInfo: (c: userInfoProperties) => void;
}

export const UserInfoContext = createContext<BasicContext>({
  userInfo: { id: -1, credit: -1, accept: false },
  setUserInfo: () => {},
});

export const useUserInfoContext = () => useContext(UserInfoContext);
