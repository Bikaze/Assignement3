import React from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import CurrentDate from "./components/CurrentDate";
import ParentHobbies from "./components/ParentHobbies";
import AppButton from "./components/AppButton";
import ProfileCard from "./components/ProfileCard";
import ItemList from "./components/ItemList";

const AppComponents = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-100 flex flex-col items-center gap-4 max-w-screen-md mx-auto">
      <WelcomeMessage />
      <CurrentDate />
      <ParentHobbies />
      <AppButton text="Click Me" color="blue" />
      <ProfileCard name="Jane Doe" age={25} email="jane@example.com" />
      <ItemList items={["Item One", "Item Two", "Item Three"]} />
    </div>
  );
};

export default AppComponents;
