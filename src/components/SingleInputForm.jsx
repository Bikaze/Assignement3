import React, { useState } from "react";

const SingleInputForm = () => {
  const [text, setText] = useState("");

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow rounded space-y-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border p-2 w-full rounded"
      />
      <p className="text-gray-700">You typed: {text}</p>
    </div>
  );
};

export default SingleInputForm;
