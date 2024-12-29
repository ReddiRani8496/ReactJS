import React from "react";
import Button from "./Button";

const List = [
  "All",
  "Live",
  "Music",
  "Movies",
  "Web Series",
  "Trailers",
  "React",
  "Java",
  "News",
  "Recruitment",
  "Python",
];
const ButtonList = () => {
  return (
    <div>
      {List.map((item) => (
        <Button name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
