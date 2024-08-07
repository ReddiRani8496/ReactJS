import { useContext } from "react";
import { UserContext } from "./A";

function C() {
  const user = useContext(UserContext);

  return <h3>{`User's name in Component C: ${user}`}</h3>;
}

export default C;
