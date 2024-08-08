// import ChangeUserName from "./ChangeUserName";
// import { useContext } from "react";
// export default function Profile(props) {
//   return (
//     <div>
//       <h1>Your name is: {props.name}</h1>
//       <ChangeUserName setName={props.setName} />
//     </div>
//   );
// }

import React, { useContext } from "react";
import { AppContext } from "../App";
import ChangeUserName from "./ChangeUserName";

export default function Profile() {
  const { name } = useContext(AppContext);

  return (
    <div>
      <h1>Your name is: {name}</h1>
      <ChangeUserName />
    </div>
  );
}
