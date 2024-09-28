import React from "react";
import { useContext } from "react";
import { NameContext } from "../App";
import ChangeProfile from "./ChangeProfile";

function Profile() {
  const { username } = useContext(NameContext);
  return (
    <div>
      Profile page of {username}
      <br />
      <ChangeProfile />
    </div>
  );
}

export default Profile;
