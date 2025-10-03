import React, { useState } from "react";
import { colorNameToHex } from "./colorData";
import "./styles.css";

const ColorExplorer = () => {
  const [color, setColor] = useState("");

  const [errorMsg, setErrorMsg] = useState("");
  const [searchColor, setSearchColor] = useState("");

  const handleClick = () => {
    setSearchColor("");
    setErrorMsg("");
    const colorr = color.trim().toLowerCase();
    if (!colorNameToHex(colorr)) {
      setErrorMsg("Sorry, I couldn't recognize that color.");
    }
    setSearchColor(colorr);
  };

  return (
    <div className="container">
      <h1>Color Explorer</h1>
      <div className="input-section">
        <input
          type="text"
          data-testid="color-input"
          placeholder="Type a color name e.g. lavender"
          onChange={(e) => setColor(e.target.value)}
        />
        <button data-testid="search-button" onClick={handleClick}>
          🔍
        </button>
      </div>
      {!errorMsg ? (
        <div className="color-box" data-testid="color-box">
          <div
            className="preview"
            role="presentation"
            data-testid="color-preview"
            style={{
              backgroundColor: colorNameToHex(searchColor) || searchColor,
            }}
          ></div>
          <p data-testid="color-name">
            <strong>Name: {searchColor}</strong>
          </p>
          <p data-testid="color-hex">
            <strong>Hex: {colorNameToHex(searchColor)}</strong>
          </p>
        </div>
      ) : (
        <p data-testid="error-msg">{errorMsg}</p>
      )}
    </div>
  );
};

export default ColorExplorer;
