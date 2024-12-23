import React from "react";

const CurrentDate = () => {
  const dateString = new Date().toDateString();
  return <p className="text-lg mt-2">Today's date: {dateString}</p>;
};

export default CurrentDate;
