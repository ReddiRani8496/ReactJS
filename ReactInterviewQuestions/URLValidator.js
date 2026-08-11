import { useState } from "react";

function URLValidator() {
  const [input, setInput] = useState("");
  const [isValid, setIsValid] = useState(null);

  function validateUrl() {}

  return (
    <div>
      <h1>URL Validator</h1>

      <div className="container">{/* Add Input and Result */}</div>
    </div>
  );
}
export default URLValidator;
