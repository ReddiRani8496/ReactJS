import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
function OTP() {
  const OTP_DIGITS_COUNT = 6;
  const [inputArr, setInputArr] = useState(
    new Array(OTP_DIGITS_COUNT).fill("")
  );
  const refArr = useRef([]);

  useEffect(() => {
    refArr.current[0]?.focus();
  }, []);

  const handleChange = (value, index) => {
    if (isNaN(value)) return;
    const newValue = value.trim();
    const newArr = [...inputArr];
    newArr[index] = newValue.slice(-1);
    setInputArr(newArr);
    if (newValue) {
      refArr.current[index + 1]?.focus();
    }
  };
  const handleKeyDown = (e, index) => {
    if (!e.target.value && e.key === "Backspace") {
      refArr.current[index - 1]?.focus();
    }
  };

  return (
    <div>
      <h1>Validate OTP</h1>
      {inputArr.map((input, index) => {
        return (
          <input
            key={index}
            type="text"
            className="otp-input"
            value={inputArr[index]}
            onChange={(e) => handleChange(e.target.value, index)}
            ref={(input) => (refArr.current[index] = input)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        );
      })}
    </div>
  );
}

export default OTP;
