import { createContext, useContext, useState } from "react";

interface UtilsContextType {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const UtilsContext = createContext<UtilsContextType | null>(null);

export const UtilsProvider = ({ children }: { children: React.ReactNode }) => {
  const [toggle, setToggle] = useState(true);
  const data = { toggle, setToggle };
  return <UtilsContext.Provider value={data}>{children}</UtilsContext.Provider>;
};

export const useUtilsContext = () => {
  const context = useContext(UtilsContext);
  if (!context) {
    throw new Error("useUtilsContext must be used within a UtilsProvider");
  }
  return context;
};
