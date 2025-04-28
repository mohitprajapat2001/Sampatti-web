import React, { createContext, useContext, useEffect, useState } from "react";
import { getLocalStorage } from "@/utils/utils";
import { getApiUrl } from "@/utils/constants";
import { postRequest } from "@/utils/axios-request";
const loginUrl = getApiUrl("LOGIN");
const refreshUrl = getApiUrl("REFRESH");

interface AuthContextType {
  auth: object;
  loginUser: (formdata: object) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { auth, setAuth } = useState<object>({});
  const loginUser = async (formdata: object) => {
    const response = await postRequest(loginUrl, formdata, null, null, null, null);
    if (response) {
      console.log("Login response", response);
    }
  }

  useEffect(() => { });
  const data = {
    auth, loginUser
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
