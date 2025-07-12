import React, { useState } from "react";
import "./styles.css";
import { Menu } from "lucide-react";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar${isOpen ? " open" : ""}`} data-testid="sidebar">
      <button
        className="toggle-btn"
        data-testid="btn-toggle"
        onClick={handleClick}
        aria-label="Toggle sidebar"
      >
        <Menu size={32} color="white" data-testid="icon-menu" />
      </button>
      {isOpen && (
        <nav className="nav-menu" data-testid="nav-menu">
          <ul className="nav-list">
            <li className="nav-item" data-testid="nav-item-home">
              Home
            </li>
            <li className="nav-item" data-testid="nav-item-about">
              About
            </li>
            <li className="nav-item" data-testid="nav-item-services">
              Services
            </li>
            <li className="nav-item" data-testid="nav-item-contact">
              Contact
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default Sidebar;
