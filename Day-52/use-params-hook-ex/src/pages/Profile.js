import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Profile() {
  const { username } = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <h1>Hi {username ? username : " Rock"}</h1>
      <button onClick={() => navigate("/about")}>Go to About</button>
    </div>
  );
}

export default Profile;
