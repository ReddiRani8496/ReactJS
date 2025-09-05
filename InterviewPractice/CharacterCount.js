import { useState } from "react";
function CharacterCount() {
  const [maxLength, setMaxLength] = useState(50);
  const [text, setText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [warningMessage, setWarningMessage] = useState("");
  function handleChange(e) {
    const newText = e.target.value;
    setText(newText);
    setErrorMessage("");
    setWarningMessage("");
    if (newText.length > maxLength) {
      setErrorMessage(
        `Limit exceeded by ${newText.length - maxLength} characters`
      );
    } else if (newText.length >= maxLength * 0.9) {
      setWarningMessage("You are close to the limit!");
    }
  }

  function maxLengthChange(e) {
    setMaxLength(e.target.value);
  }
  return (
    <div className="characterCount">
      <h1>Character Count</h1>
      <p>Track your input length with live character warnings.</p>
      <div className="container">
        <div className="inputs">
          <label>
            Max length:
            <input
              type="number"
              min="0"
              max="1000"
              value={maxLength}
              data-testid="maxlength"
              onChange={(e) => maxLengthChange(e)}
            />
          </label>
        </div>
        <textarea
          className="text"
          placeholder="Start Typing"
          data-testid="textarea"
          onChange={(e) => handleChange(e)}
          value={text}
        ></textarea>
        <div className="char-info">
          {text.length}/{maxLength}
        </div>
        <div className="warnings">
          {/* Show Warning if it reaches to 90 */}
          {warningMessage && (
            <p className="warning-text" data-testid="warning-text">
              {warningMessage}
            </p>
          )}
          {/* Show  Overlimit message if limit is exceeded*/}
          {errorMessage && (
            <p className="error-message" data-testid="error-text">
              {errorMessage}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
export default CharacterCount;
