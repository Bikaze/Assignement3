import React, { useState } from "react";

const CounterComponent = () => {
  const [count, setCount] = useState(0);

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    margin: '10px 0'
  };
const buttonStyle = {
  backgroundColor: "red", // Red background color
  color: "white", // White text for contrast
  border: "none", // Optional: Removes default border
  padding: "10px 20px", // Optional: Adjust padding for better appearance
  cursor: "pointer", // Optional: Adds pointer cursor on hover
  borderRadius: "5px", // Optional: Adds rounded corners
};
const buttonStyle2 = {
  backgroundColor: "green", // Red background color
  color: "white", // White text for contrast
  border: "none", // Optional: Removes default border
  padding: "10px 20px", // Optional: Adjust padding for better appearance
  cursor: "pointer", // Optional: Adds pointer cursor on hover
  borderRadius: "5px", // Optional: Adds rounded corners
};

  return (
    <div style={containerStyle}>
      <p>Count: {count}</p>
      <button style={buttonStyle2} onClick={() => setCount((c) => c + 1)}>+</button>
      <button style={buttonStyle} onClick={() => setCount((c) => c - 1)}>-</button>
    </div>
  );
};

export default CounterComponent;
