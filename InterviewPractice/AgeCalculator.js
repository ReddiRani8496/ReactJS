import React, { useState } from "react";

function AgeCalculator() {
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");

  const calculateAge = () => {
    setAge("");
    setError("");
    if (!birthDate) {
      setError("Please select a date");
      return;
    }

    const today = new Date();
    const birth = new Date(birthDate);
    if (birth > today) {
      setError("Birthdate cannot be in the future");
      return;
    }

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }
    setAge(`${years} years, ${months} months, ${days} days`);
  };

  return (
    <div className="conatiner">
      <h2 className="title">Age Calculator</h2>
      <label className="label" data-testid="label-birthdate">
        Enter/Select a birthdate:
      </label>

      <input
        id="birthdate"
        type="date"
        value={birthDate}
        className="input-date"
        data-testid="input-birthdate"
        onChange={(e) => setBirthDate(e.target.value)}
      />

      <button
        className="btn-calc"
        data-testid="btn-calculate"
        onClick={() => calculateAge()}
      >
        Calculate Age
      </button>

      {error && (
        <p className="error-msg" data-testid="error-msg">
          {error}
        </p>
      )}
      {age && (
        <p className="age-result" data-testid="age-result">
          {age}
        </p>
      )}
    </div>
  );
}

export default AgeCalculator;
