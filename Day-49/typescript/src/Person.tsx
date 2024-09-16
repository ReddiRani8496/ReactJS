import React from "react";

interface Props {
  name: string;
  age: number;
  email: string;
}
function Person(props: Props) {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.age}</p>
      <p>{props.email}</p>
    </div>
  );
}

export default Person;
