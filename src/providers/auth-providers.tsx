/* eslint-disable */
import React, { createContext, useContext, useEffect, useState } from "react";
import { getApiUrl } from "@/utils/constants";
import { postRequest } from "@/utils/axios-request";
import { loginSuccess, registerSuccess } from "@/utils/success";
import { LoadingMessage } from "@/utils/loading-messages";
import { loadingToast } from "@/utils/message-utils";
const loginUrl = getApiUrl("LOGIN");
const registerUrl = getApiUrl("REGISTER");

interface AuthContextType {
  auth: object;
  loginUser: (formdata: object) => Promise<void>;
  registerUser: (formdata: object) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  let id = null;
  const { auth, setAuth } = useState<object>({});
  const loginUser = async (formdata: object) => {
    id = loadingToast(LoadingMessage.LOGIN, null);
    await postRequest(
      loginUrl,
      formdata,
      id,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
      loginSuccess
    );
  };

  const registerUser = async (formdata: object) => {
    id = loadingToast(LoadingMessage.REGISTER, null);
    await postRequest(
      registerUrl,
      formdata,
      id,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
      registerSuccess
    );
  };
  useEffect(() => {
    console.log(setAuth);
  });
  const data = {
    auth,
    loginUser,
    registerUser,
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
