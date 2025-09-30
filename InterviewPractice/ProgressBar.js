import React, { useState } from "react";

const getProgressColor = (percentage) => {
  if (percentage <= 0) {
    return "#C7C4BF";
  } else if (percentage < 40) {
    return "red";
  } else if (percentage < 80) {
    return "orange";
  } else if (percentage <= 100) {
    return "green";
  }
};

const styles = {
  progressContainer: {
    width: "400px",
    height: "30px",
    backgroundColor: "#e0e0e0",
    marginBottom: "20px",
    borderRadius: "15px",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },

  progressFill: (percentage) => ({
    position: "absolute",
    left: 0,
    top: 0,
    height: "100%",
    width: `${percentage}%`,
    backgroundColor: getProgressColor(percentage),
    borderRadius: "15px",
    zIndex: 1,
  }),

  progressText: {
    position: "relative",
    zIndex: 2,
    color: "#333",
    fontWeight: "bold",
  },
};

function ProgressBar() {
  const [percentage, setPercentage] = useState(0);

  const handleDecrement = () => {
    const newPercentage = percentage - 10;
    setPercentage(newPercentage < 0 ? 0 : newPercentage);
  };

  const handleIncrement = () => {
    const newPercentage = percentage + 10;
    setPercentage(newPercentage > 100 ? 100 : newPercentage);
  };

  return (
    <div>
      <h1>Progress Bar</h1>
      <div style={styles.progressContainer}>
        <div style={styles.progressFill(percentage)} id="testBgColor"></div>
        <span style={styles.progressText}>{percentage}%</span>
      </div>
      <button onClick={handleDecrement}>-10%</button>
      <button onClick={handleIncrement}>+10%</button>
    </div>
  );
}

export default ProgressBar;
