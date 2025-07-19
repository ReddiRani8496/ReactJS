import React, { useEffect, useState } from 'react';
import "./styles.css";

function EvenOrOddChecker() {
  const [number, setNumber] = useState();
  const [error, setError] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {
    setNumber(e.target.value);
  }

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);

      const trimmed = number?.trim();

      const validNumberRegex = /^-?\d+(\.\d+)?(e-?\d+)?$/i;

      if (trimmed && validNumberRegex.test(trimmed)) {
        setError("");
        const value = Number(trimmed);

        if (value % 2 === 0) {
          setResult(`The number ${value} is even.`);
        } else {
          setResult(`The number ${value} is odd.`);
        }
      } else {
        setResult("");
        setError("Please enter a valid number.");
      }
    }, 1000);
  };

  return (
    <div className="even-odd-container">
      <h1 className="title">Even or Odd Checker</h1>

      <input
        className="number-input"
        type="text"
        placeholder="Enter a number"
        onChange={(e) => handleChange(e)}
        value={number}
        data-testid="number-input"
      />

      <button className="check-button" onClick={handleClick} data-testid="check-button">Check</button>
      {loading && <div data-testid="loading">Checking...</div>}
      {!loading &&
        <div className="result-area">
          <div className="result" data-testid="result">{error ? error : result}</div>

        </div>
      }
    </div>
  );
}

export default EvenOrOddChecker;
