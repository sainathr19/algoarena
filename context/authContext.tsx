"use client";

import base_url from "@/lib/url";
import axios from "axios";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

interface authContextType {
  isLoggedin: boolean;
  setLoggedin: Dispatch<SetStateAction<boolean>>;
}
interface AuthProviderProps {
  children: ReactNode;
}
const authContext = createContext<authContextType | undefined>(undefined);

import React from "react";

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedin, setLoggedin] = useState(false);
  useEffect(() => {
    const requestConfig = {
      method: "GET",
      url: base_url + "/auth/verifyuser",
      params: {
        token: localStorage.getItem("token"),
      },
    };
    axios.request(requestConfig).then((res) => {
      setLoggedin(res.data);
    });
  }, []);

  return (
    <authContext.Provider value={{ isLoggedin, setLoggedin }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuth = (): authContextType => {
  const context = useContext(authContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
