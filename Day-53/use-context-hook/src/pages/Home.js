import React from "react";
import { useContext } from "react";
import { NameContext } from "../App";

function Home() {
  const { username } = useContext(NameContext);
  return <div>Home page of {username}</div>;
}

export default Home;
