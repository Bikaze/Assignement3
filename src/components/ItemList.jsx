import React from "react";

const ItemList = ({ items }) => {
  return (
    <ul className="list-decimal list-inside space-y-1">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default ItemList;
