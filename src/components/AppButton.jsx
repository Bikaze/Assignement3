import React from "react";

const AppButton = ({ text, color }) => {
  return (
    <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded transition duration-300 hover:from-blue-600 hover:to-blue-700">
      {text}
    </button>
  );
};

export default AppButton;
