import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./styles.css";

function Accordion({ items }) {
  const [selectedAccordion, setSelectedAccordion] = useState("");

  const handleClick = (item) => {
    setSelectedAccordion(selectedAccordion === item.title ? "" : item.title);
  };

  return (
    <div className="accordion">
      {items?.length > 0 ? (
        items?.map((item) => {
          const isOpen = item.title === selectedAccordion;
          return (
            <div
              className="accordion-item"
              key={item.title}
              onClick={() => handleClick(item)}
            >
              <div
                className="accordion-title"
                aria-expanded={isOpen}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  cursor: "pointer",
                }}
              >
                <span>{item.title}</span>
                {isOpen ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {isOpen && <p className="accordion-content">{item.content}</p>}
            </div>
          );
        })
      ) : (
        <h1>No items available</h1>
      )}
    </div>
  );
}

export default Accordion;
