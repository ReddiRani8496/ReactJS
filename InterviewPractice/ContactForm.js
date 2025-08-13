import React, { useState } from "react";
import "./styles.css";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isFormSubmited, setIsFormSubmited] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [error, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};
    if (name.trim() === "") {
      errors.name = "Name is required";
    }
    if (email.trim() === "") {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email format";
    }
    if (message.trim() === "") {
      errors.message = "Message is required";
    }
    setError(errors);
    if (Object.keys(errors).length > 0) {
      return;
    }
    setSubmittedName(name);
    setName("");
    setEmail("");
    setMessage("");
    setIsFormSubmited(true);
  };

  return (
    <div>
      {!isFormSubmited ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <br />
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />{" "}
          <br />
          {error.name && (
            <div className="error">
              {error.name}
              <br />
            </div>
          )}
          <label htmlFor="email">Email:</label>
          <br />
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
          <br />
          {error.email && (
            <div className="error">
              {error.email}
              <br />
            </div>
          )}
          <label htmlFor="message">Message:</label>
          <br />
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <br />
          {error.message && (
            <div className="error">
              {error.message}
              <br />
            </div>
          )}
          <br />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <h1>Thank you, {submittedName || "User"}!</h1>
        </div>
      )}
    </div>
  );
}

export default ContactForm;
