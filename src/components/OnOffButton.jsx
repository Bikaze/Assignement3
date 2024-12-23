import React, { useState } from "react";

const OnOffButton = () => {
  const [isOn, setIsOn] = useState(false);
  const buttonStyle = {
    padding: '10px 20px',
    borderRadius: '4px',
    backgroundColor: isOn ? '#4CAF50' : '#ccc',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    outline: 'none'
  };
  return <button style={buttonStyle} onClick={() => setIsOn(!isOn)}>{isOn ? "ON" : "OFF"}</button>;
};

export default OnOffButton;
