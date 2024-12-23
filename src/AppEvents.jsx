import React from "react";
import OnOffButton from "./components/OnOffButton";
import CounterComponent from "./components/CounterComponent";
import HoverColorBox from "./components/HoverColorBox";
import FormLogger from "./components/FormLogger";
import DropdownMenu from "./components/DropdownMenu";

const appContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '20px',
  fontFamily: 'Arial, sans-serif'
};

const AppEvents = () => {
  return (
    <div style={appContainerStyle}>
      <OnOffButton />
      <CounterComponent />
      <HoverColorBox />
      <FormLogger />
      <DropdownMenu />
    </div>
  );
};

export default AppEvents;
