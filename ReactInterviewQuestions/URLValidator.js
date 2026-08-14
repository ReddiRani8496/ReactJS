import { useState } from "react";

function URLValidator() {
  const [input, setInput] = useState("");
  const [isValid, setIsValid] = useState(null);

  function validateUrl() {
    try {
      new URL(input);
      setIsValid(true);
    } catch (error) {
      setIsValid(false);
    }
  }

  return (
    <div>
      <h1>URL Validator</h1>

      <div className="container">
        <input
          type="text"
          placeholder="Enter URL"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setIsValid(null);
          }}
        />

        <button onClick={validateUrl}>Validate</button>

        {isValid !== null && (
          <p>
            {isValid ? "Valid URL" : "Invalid URL"}
          </p>
        )}
      </div>
    </div>
  );
}

export default URLValidator;