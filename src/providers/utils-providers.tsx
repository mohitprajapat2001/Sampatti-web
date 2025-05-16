import { createContext, useContext, useState } from "react";

interface UtilsContextType {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  preloader: boolean;
  updatePreloader: () => void;
}

const UtilsContext = createContext<UtilsContextType | null>(null);

export const UtilsProvider = ({ children }: { children: React.ReactNode }) => {
  const [toggle, setToggle] = useState(true);
  const [preloader, setPreloader] = useState(true);

  /**
   * Function to update the preloader state
   */
  const updatePreloader = () => {
    setPreloader(false);
  };

  const data = { toggle, setToggle, preloader, updatePreloader };
  return <UtilsContext.Provider value={data}>{children}</UtilsContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useUtilsContext = () => {
  const context = useContext(UtilsContext);
  if (!context) {
    throw new Error("useUtilsContext must be used within a UtilsProvider");
  }
  return context;
};
