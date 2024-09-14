import React from "react";

interface PersonProps {
  name: string;
  age: number;
  email: string;
  isMarried: boolean;
}

function Person({ name, age, email, isMarried }: PersonProps) {
  return (
    <div>
      <p>My name is: {name}</p>
      <p>Age is: {age}</p>
      <p>Email is: {email}</p>
      <p>The Person {isMarried ? " is " : " is not "} married.</p>
    </div>
  );
}

export default Person;
