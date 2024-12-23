import React from "react";

const AppButton = ({ text, color }) => {
  return (
    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
      {text}
    </button>
  );
};

export default AppButton;
