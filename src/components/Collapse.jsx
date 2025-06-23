import React, { useState } from "react";
import "../styles/collapse.scss";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`collapse${isOpen ? " open" : ""}`}>
      <div
        className="collapse-header"
        onClick={() => setIsOpen(!isOpen)}
        tabIndex={0}
        role="button"
        aria-expanded={isOpen}
        aria-controls={`collapse-content-${title.replace(/\s+/g, "-")}`}
        onKeyPress={e => {
          if (e.key === "Enter" || e.key === " ") setIsOpen(!isOpen);
        }}
      >
        <span className="collapse-title">{title}</span>
        <span className={`collapse-icon${isOpen ? " rotated" : ""}`}>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M7 10l5 5 5-5" fill="none" stroke="#fff" strokeWidth="2"/>
          </svg>
        </span>
      </div>
      {isOpen && (
        <div
          className="collapse-content"
          id={`collapse-content-${title.replace(/\s+/g, "-")}`}
        >
          {children}
        </div>
      )}
    </div>
  );
}

export default Collapse;