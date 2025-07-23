import React from "react";

function AnagramChecker() {
  const [sourceText, setSourceText] = React.useState("");
  const [anagramText, setAnagramText] = React.useState("");
  const [result, setRestult] = React.useState("");

  const handleClick = () => {
    if (sourceText.length !== anagramText.length) {
      setRestult("Not an Anagram");
      return;
    }
    const sortedSource = sourceText.split("").sort().join("");
    const sortedAnagram = anagramText.split("").sort().join("");
    if (sortedSource === sortedAnagram) {
      setRestult("Anagram");
    } else {
      setRestult("Not an Anagram");
    }
  };

  return (
    <div>
      <h1>Anagram Checker</h1>
      <div className="input-container">
        <h4>Source Text</h4>
        <input
          type="text"
          placeholder="Enter first word"
          onChange={(e) => setSourceText(e.target.value)}
        />
      </div>
      <div className="input-container">
        <h4>Anagram Text</h4>
        <input
          type="text"
          placeholder="Enter Anagram"
          onChange={(e) => setAnagramText(e.target.value)}
        />
      </div>
      <button onClick={handleClick}> Anagram Checker</button>
      {result && <h4>{result}</h4>}
    </div>
  );
}

export default AnagramChecker;
