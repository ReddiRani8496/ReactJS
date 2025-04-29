import React, { useState } from "react";

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

function CheckBoxes({ data, checked, setChecked }) {
  const handleChange = (isChecked, node) => {
    setChecked((prev) => ({
      ...prev,
      [node.id]: isChecked,
    }));
  };
  return (
    <div>
      {data.map((node) => (
        <div key={node.id} style={{ marginLeft: 20 }}>
          <input
            type="checkbox"
            id={node.id}
            checked={checked[node?.id] || false}
            onChange={(e) => handleChange(e.target.checked, node)}
          />
          <label htmlFor={node.id}>{node.name}</label>
          {node.children && (
            <CheckBoxes
              data={node.children}
              checked={checked}
              setChecked={setChecked}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default function App() {
  const [checked, setChecked] = useState({ 1: true });
  return (
    <CheckBoxes
      data={checkboxesData}
      checked={checked}
      setChecked={setChecked}
    />
  );
}
