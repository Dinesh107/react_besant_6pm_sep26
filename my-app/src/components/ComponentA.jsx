import { useState, createContext } from "react";
import ComponentB from "./ComponentB";

export const UserContext = createContext();

function ComponentA() {
  const [user, setUser] = useState("Siva");

  return (
    <div>
      <h1>Welcome to Component A</h1>
      <p>This is a simple React component.</p>
      <h2>{`hello ${user}`}</h2>
      <UserContext.Provider value={user}>
        <ComponentB />
      </UserContext.Provider>
    </div>
  );
}
export default ComponentA;
