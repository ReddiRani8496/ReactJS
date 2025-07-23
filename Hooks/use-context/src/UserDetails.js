import React, { useEffect, useState } from "react";

export const UserDetails = () => {
  let [user, setUser] = useState("ravi");
  let [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs when the component mounts
    console.log("UserDetails component mounted");
    const fetchDetails = () => {
      console.log("fetch details");
    };
    fetchDetails();
    // Cleanup function runs when the component unmounts
    return () => {
      console.log("UserDetails component unmounted");
    };
  }, []);

  // const handleClick = () => {
  //   setCount(count + 1);
  //   console.log("inside handlic clik");
  //   console.log("count " + count);
  //   if (count % 2 == 0) {
  //     setUser("sirisha");
  //   } else {
  //     setUser("rock");
  //   }
  // };

  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  console.log("outside count " + count);

  // user = "sirisha";

  return (
    <div id="count">
      <h1>Count {count}</h1>
      <button
        onClick={() => handleIncrease()}
        style={{ color: "white", backgroundColor: "black" }}
      >
        Increment Count
      </button>
      <button onClick={() => handleDecrease()}>Decrement Count</button>
    </div>
  );
};

// JSX
