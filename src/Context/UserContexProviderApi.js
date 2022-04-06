import React, { createContext, useEffect, useState } from "react";
import { userApi } from "../services/userApi";

export const userContxtApi = createContext();

export default function UserContexProviderApi({ children }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getPeople = async () => {
      setData(await userApi());
    };
    getPeople();
  }, []);
  return (
    <userContxtApi.Provider value={data}>{children}</userContxtApi.Provider>
  );
}
