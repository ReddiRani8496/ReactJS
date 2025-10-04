import { useEffect, useState } from "react";

function CopyClipboard() {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let timer;
    if (copied) {
      timer = setTimeout(() => {
        setCopied(false);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [copied]);

  useEffect(() => {
    let timer;
    if (error) {
      timer = setTimeout(() => {
        setError("");
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [error]);

  const handleCopy = async () => {
    setError("");
    if (text.trim() === "") {
      setError("Type some values to copy");
      return;
    }
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch {
      setError("Failed to copy!");
    }
  };

  return (
    <div className="copyToClipboard">
      <h1>Copy to Clipboard</h1>
      <p>Click the button to copy the text</p>
      <div className="copyToClipboard-container">
        <div className="form">
          <label htmlFor="text">
            Enter your text:
            <input
              type="text"
              id="text"
              data-testid="input-field"
              placeholder="Type Something"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </label>
          <button
            onClick={handleCopy}
            className="btn"
            data-testid="copy-button"
          >
            Copy
          </button>
          {copied && (
            <p data-testid="copied-message" style={{ color: "green" }}>
              Copied!
            </p>
          )}
          {error && (
            <p data-testid="error-message" style={{ color: "red" }}>
              {error}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CopyClipboard;
