import React, { useState } from "react";

const FormLogger = () => {
  const [inputText, setInputText] = useState("");

  const formStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    margin: '10px 0'
  };
  const inputStyle = {
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc'
  };
  const buttonStyle = {
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#2196F3',
    color: '#fff',
    cursor: 'pointer'
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputText);
    setInputText("");
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        style={inputStyle}
      />
      <button type="submit" style={buttonStyle}>Submit</button>
    </form>
  );
};

export default FormLogger;
