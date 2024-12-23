import React, { useState } from "react";

const DropdownMenu = () => {
  const [open, setOpen] = useState(false);
  const options = ["Option 1", "Option 2", "Option 3"];

  const buttonStyle = {
    padding: '10px 15px',
    borderRadius: '4px',
    backgroundColor: '#f57c00',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    margin: '10px 0'
  };
  const listStyle = {
    listStyle: 'none',
    padding: '0',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '4px',
    width: '120px'
  };
  const listItemStyle = {
    padding: '8px 12px',
    cursor: 'pointer'
  };

  return (
    <div>
      <button onClick={() => setOpen(!open)} style={buttonStyle}>Toggle Menu</button>
      {open && (
        <ul style={listStyle}>
          {options.map((opt) => (
            <li key={opt} style={listItemStyle}>{opt}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
