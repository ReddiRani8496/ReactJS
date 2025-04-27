import React from "react";

const checkboxesData = [
  {
    id: 1,
    name: "Parent 1",
    children: [
      {
        id: 2,
        name: "Parent 2",
        children: [
          { id: 3, name: "Child 1" },
          { id: 4, name: "Child 2" },
          { id: 5, name: "Child 3" },
          { id: 6, name: "Child 4" },
          { id: 7, name: "Child 5" },
        ],
      },
    ],
  },
  { id: 8, name: "Parent 3" },
  { id: 9, name: "Parent 4" },
  { id: 10, name: "Parent 5" },
];

function CheckBoxes() {
  return (
    <div>
      {checkboxesData.map((node) => (
        <div key={node.id}>
          <input type="checkbox" id={node.id} />
          <label htmlFor={node.id}>{node.name}</label>
          {node.children && <CheckBoxes children={node.children} />}
        </div>
      ))}
    </div>
  );
}

export default CheckBoxes;
