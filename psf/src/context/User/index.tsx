import { createContext, useState } from "react";

type UserContext = 0 | 1 | 2;

export const UserContext = createContext<UserContext | null>(null);

export const UserContextProvider = ({ children }: any) => {
  const [user, setUser] = useState<UserContext | null>(0);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
