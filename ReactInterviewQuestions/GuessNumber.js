import React, { useEffect, useState } from "react";
import "./styles.css";

function GuessTheNumber() {
  const [value, setValue] = useState();
  const [message, setMessage] = useState("");
  const [num, setNum] = useState("");
  const [attempt, setAttempt] = useState(0);

  // Function to handle guess checking
  const handleGuess = () => {
    const guess = Number(value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
      setMessage("Please enter a number between 1 and 100.");
      return;
    }
    setAttempt((prevAttempt) => {
      const newAttempt = prevAttempt + 1;

      if (guess === num) {
        setMessage(
          `Congratulations! You guessed the number in ${newAttempt} attempts.`
        );
      } else if (guess < num) {
        setMessage("Too low! Try again.");
      } else {
        setMessage("Too high! Try again.");
      }

      return newAttempt;
    });
  };

  // Function to reset the game
  const resetGame = () => {
    setValue("");
    setMessage("");
    setNum(Math.floor(Math.random() * 100) + 1);
    setAttempt(0);
  };

  useEffect(() => {
    let val = Math.floor(Math.random() * 100) + 1;
    setNum(val);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "50px 0",
      }}
    >
      <h2>Guess the Number</h2>
      <input
        placeholder="Enter a number between 1 and 100"
        style={{ width: "300px", padding: "5px" }}
        id="guess-input"
        onChange={(e) => setValue(e.target.value)}
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button onClick={handleGuess}>Check Guess</button>
        <button onClick={resetGame}>Reset Game</button>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
}

export default GuessTheNumber;
