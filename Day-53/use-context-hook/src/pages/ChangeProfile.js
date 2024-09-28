import React from "react";
import { useContext } from "react";
import { NameContext } from "../App";
import { useState } from "react";

function ChangeProfile() {
  const { setUsername } = useContext(NameContext);
  const [name, setName] = useState("");

  return (
    <div>
      <input onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setUsername(name)}>Change Profile</button>
    </div>
  );
}

export default ChangeProfile;
