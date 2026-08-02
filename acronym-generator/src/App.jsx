import { useState } from "react";

function App() {
  const [word, setWord] = useState("");
  const [result, setResult] = useState("");

  function toAcronym(text) {
    // Implement acronym logic here
    text = text.trim();
    if (text == "") {
      setResult("");
    } else {
      let ans = "";
      ans += text[0].toUpperCase();
      for (let i = 1; i < text.length; i++) {
        if (text[i] == " " && i != text.length - 1 && text[i + 1] != " ") {
          ans += text[i + 1].toUpperCase();
        }
      }
      setResult(ans);
    }
  }

  return (
    <div>
      <h1>Acronym Generator</h1>
      <p>
        An acronym is formed by taking the first letter of each word in a phrase
        and converting them to uppercase.
      </p>

      <div>
        <input
          type="text"
          placeholder="Enter a phrase..."
          data-testid="input"
          onChange={(e) => setWord(e.target.value)}
        />
        <button onClick={() => toAcronym(word)} data-testid="generate-button">
          Generate
        </button>
        <p data-testid="result">Result : {result}</p>
      </div>
    </div>
  );
}

export default App;
