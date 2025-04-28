import { createContext, useContext, useEffect, useState } from "react";
import { getLocalStorage } from "@/utils/utils";

interface TokenContextType {
  token: string;
  getAuthToken: () => void;
}

const TokenContext = createContext<TokenContextType | null>(null);

export const TokenProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string>("");

  const getAuthToken = () => {
    const savedToken = getLocalStorage("token");
    if (savedToken) {
      setToken(savedToken);
    }
  };

  useEffect(() => {
    getAuthToken();
  }, []);
  const data = { token, getAuthToken };
  return <TokenContext.Provider value={data}>{children}</TokenContext.Provider>;
};

export const useTokenContext = () => {
  const context = useContext(TokenContext);
  if (!context) {
    throw new Error("useTokenContext must be used within a TokenProvider");
  }
  return context;
};
