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
    padding: '8px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer'
  };

  return (
    <div style={containerStyle}>
      <p>Count: {count}</p>
      <button style={buttonStyle} onClick={() => setCount((c) => c + 1)}>+</button>
      <button style={buttonStyle} onClick={() => setCount((c) => c - 1)}>-</button>
    </div>
  );
};

export default CounterComponent;
