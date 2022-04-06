import React, { createContext, useEffect, useState } from "react";
export const UserContext = createContext();
export default function UserContextProvider({ children }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getPeople = () => {
      setData(JSON.parse(localStorage.getItem("user")));
    };
    getPeople();
  }, []);
  return (
    <>
      <UserContext.Provider value={data}>
      {children}
      </UserContext.Provider>
    </>
  );
}
