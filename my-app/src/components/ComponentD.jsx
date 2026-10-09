import { useContext } from "react";
import { UserContext } from "./ComponentA";
function ComponentD() {
  const user = useContext(UserContext);
  return (
    <div>
      <h1>Welcome to Component D</h1>
      <p>This is a simple React component.</p>
      <h2>{`hello ${user}`}</h2>
    </div>
  );
}
export default ComponentD;
