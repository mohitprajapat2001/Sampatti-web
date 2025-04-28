import React, { createContext, useContext, useEffect, useState } from "react";
import { getLocalStorage } from "@/utils/utils";
import { getApiUrl } from "@/utils/constants";

const loginUrl = getApiUrl("LOGIN");
const refreshUrl = getApiUrl("REFRESH");

interface AuthContextType {
  auth: object;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { auth, setAuth } = useState<object>({});
  const getAuthenticatedUser = () => {};
  useEffect(() => {});
  const data = {
    auth,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useTokenContext must be used within a AuthProvider");
  }
  return context;
};
