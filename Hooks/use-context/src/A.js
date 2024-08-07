import { useState, createContext, useContext } from "react";
import B from "./B";
export const UserContext = createContext();

function A() {
  const [user, setUser] = useState("Rahul");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <B />
    </UserContext.Provider>
  );
}

export default A;
