import React from "react";

const ProfileCard = ({ name, age, email }) => {
  return (
    <div className="bg-gradient-to-r from-teal-400 to-green-400 p-6 rounded-lg shadow max-w-md w-full text-white">
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <p className="font-semibold">Age: {age}</p>
      <p className="font-semibold">Email: {email}</p>
    </div>
  );
};

export default ProfileCard;
