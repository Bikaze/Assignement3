import React from "react";

const ProfileCard = ({ name, age, email }) => {
  return (
    <div className="bg-gradient-to-r from-teal-400 to-green-400 p-6 rounded-xl shadow-2xl max-w-md w-full text-white transform transition-transform duration-300 hover:scale-105 hover:shadow-3xl">
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <p className="font-semibold">Age: {age}</p>
      <p className="font-semibold">Email: {email}</p>
    </div>
  );
};

export default ProfileCard;
