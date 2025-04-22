import React, { useEffect } from "react";
import "./styles.css";

function ProgressBar({ progress }) {
  const [animatedProgress, setAnimatedProgress] = React.useState(0);
  useEffect(() => {
    setTimeout(() => {
      setAnimatedProgress(progress);
    }, 100);
  }, [progress]);
  return (
    <div className="outer">
      <div
        className="inner"
        style={{
          transform: `translateX(-${100 - animatedProgress}%)`,
          color: animatedProgress >= 5 ? "white" : "black",
        }}
        role="progressbar"
        aria-valuenow={animatedProgress}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {progress}%
      </div>
    </div>
  );
}

export default ProgressBar;
