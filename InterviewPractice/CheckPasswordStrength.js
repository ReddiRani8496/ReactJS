import React, { useState } from "react";
import "./styles.css";

// ✅ Export this so it can be tested
export const checkPasswordStrength = (password) => {
  let count = 0;
  if (password?.length >= 8) count++;
  if (/[A-Z]/.test(password)) count++;
  if (/[a-z]/.test(password)) count++;
  if (/[0-9]/.test(password)) count++;
  if (/[^a-zA-Z0-9]/.test(password)) count++;

  if (count >= 4) {
    return "Level 3";
  } else if (count >= 2) {
    return "Level 2";
  } else if (count === 1) {
    return "Level 1";
  } else {
    return "Weak Password";
  }
};

const PasswordStrength = () => {
  const [password, setPassword] = useState("");
  const [result, setResult] = useState();
  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleClick = () => {
    setResult(checkPasswordStrength(password));
  };

  return (
    <div>
      <h2>Password Strength Checker</h2>
      <input value={password} onChange={(e) => handleChange(e)} />

      <button onClick={handleClick}>Check Strength</button>
      <br />
      {result && <h4>Strength: {result}</h4>}
    </div>
  );
};

export default PasswordStrength;
