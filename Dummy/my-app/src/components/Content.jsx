import React from "react";

function Content({ handleReset }) {
  const handleResetChild = () => {
    handleReset();
  };
  return (
    <div>
      <p>Click on below button to set value to 0</p>
      <button onClick={handleResetChild}>Reset</button>
    </div>
  );
}

export default Content;
