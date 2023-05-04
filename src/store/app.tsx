import React, { FC, PropsWithChildren } from "react";
import { User } from "../../server/user/types";
// import getUser from "../api/getUser";
// import { useQuery } from "@tanstack/react-query";

interface AppContextType {
  user: User | null;
  setUser: (user: User) => void;
}

export const AppContext = React.createContext<AppContextType>({
  user: null,
  setUser: () => undefined,
});

const AppProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const [user, setUser] = React.useState<User | null>(null);
  // useQuery({ queryKey: ["todos"], queryFn: getUser, onSuccess: setUser });

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
