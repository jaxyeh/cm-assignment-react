import React from "react";

const noop = () => undefined;
interface AppContextType {
  hello: string | null;
  setHello: (value: string) => void;
}
const AppContext = React.createContext<AppContextType>({ hello: null, setHello: noop });

interface UseAppStore {
  children: React.ReactElement;
}
export function useAppStore({ children }: UseAppStore): React.ReactElement {
  const [state, setState] = React.useState({ hello: "world" });

  const setHello = React.useCallback((value: string) => {
    setState({ ...state, hello: value });
  }, [state]);

  return (
    <AppContext.Provider value={{ hello: state.hello, setHello }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
