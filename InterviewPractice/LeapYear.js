import React, { useState } from "react";
import "./styles.css";

export default function LeapYear() {
  const [year, setYear] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const checkYear = () => {
    setMessage("");
    setErrorMessage("");
    if (year.trim() === "") {
      setErrorMessage("Please enter a year");
    } else if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
      setMessage(`${year} is a Leap Year`);
    } else {
      setMessage(`${year} is not a Leap Year`);
    }
  };

  const handleChange = (e) => {
    setYear(e.target.value);
  };

  return (
    <div className="container">
      <h1>Leap Year Checker</h1>
      <label data-testid="label-date">Enter a year:</label>
      <input
        type="text"
        data-testid="year-input"
        onChange={(e) => handleChange(e)}
      />

      <button data-testid="check-btn" onClick={checkYear}>
        Check
      </button>

      {message && <p data-testid="result">{message}</p>}
      {errorMessage && <p data-testid="error-msg">{errorMessage}</p>}
    </div>
  );
}
