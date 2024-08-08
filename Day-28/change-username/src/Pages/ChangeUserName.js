// import { useState } from "react";

// export default function ChangeUserName(props) {
//   const [username, setUsername] = useState("");

//   function valueChange(e) {
//     setUsername(e.target.value);
//   }

//   function changeName() {
//     props.setName(username);
//     setUsername("");
//   }
//   return (
//     <div>
//       <input type="text" onChange={valueChange} />
//       <button onClick={changeName}>ChangeUserName</button>
//     </div>
//   );
// }

import React, { useState, useContext } from "react";
import { AppContext } from "../App";

export default function ChangeUserName() {
  const [username, setUsername] = useState("");
  const { setName } = useContext(AppContext);

  function valueChange(e) {
    setUsername(e.target.value);
  }

  function changeName() {
    setName(username);
    setUsername("");
  }

  return (
    <div>
      <input type="text" value={username} onChange={valueChange} />
      <button onClick={changeName}>Change UserName</button>
    </div>
  );
}
