import React, { useState } from "react";
import "./styles.css";

function AsteriskFieldValidation() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [errors, setErrors] = useState({});

  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    setSuccessMessage({});
    const newErrors = {};
    if (name.trim() === "") {
      newErrors.name = "Name is required.";
    }
    if (location.trim() === "") {
      newErrors.location = "Location is required.";
    }

    setErrors(newErrors);

    if (errors.length > 0) return;

    if (Object.keys(newErrors).length === 0) {
      setSuccessMessage(
        `Submitted Successfully!<br />Name: ${name} <br />Location: ${location}`
      );
    } else {
      setSuccessMessage("");
    }
  };
  return (
    <div className="container">
      <h1 className="title">Asterisk Field Validation</h1>
      <form className="form" data-testid="form">
        <div className="input-group">
          <label htmlFor="name" className="label">
            Name <span className="asterisk">*</span>
          </label>
          <input
            id="name"
            className="input"
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
            data-testid="name-input"
          />
          {errors.name && (
            <div className="error" data-testid="name-error">
              {errors.name}
            </div>
          )}
        </div>

        <div className="input-group">
          <label htmlFor="location" className="label">
            Location <span className="asterisk">*</span>
          </label>
          <input
            id="location"
            className="input"
            type="text"
            placeholder="Enter your location"
            onChange={(e) => setLocation(e.target.value)}
            data-testid="location-input"
          />
          {errors.location && (
            <div className="error" data-testid="location-error">
              {errors.location}
            </div>
          )}
        </div>

        <button
          type="submit"
          className="submit-button"
          onClick={(e) => handleSubmit(e)}
          data-testid="submit-button"
        >
          Submit
        </button>
        {successMessage && (
          <div
            className="success"
            dangerouslySetInnerHTML={{ __html: successMessage }}
            data-testid="success-message"
          />
        )}
      </form>
    </div>
  );
}

export default AsteriskFieldValidation;
