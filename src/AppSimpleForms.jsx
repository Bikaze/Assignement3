import React from "react";
import SimpleLoginForm from "./components/SimpleLoginForm";
import SingleInputForm from "./components/SingleInputForm";
import ValidatedForm from "./components/ValidatedForm";
import MultiStepForm from "./components/MultiStepForm";
import MultiCheckboxForm from "./components/MultiCheckboxForm";

const AppSimpleForms = () => {
  return (
    <div>
      <SimpleLoginForm />
      <SingleInputForm />
      <ValidatedForm />
      <MultiStepForm />
      <MultiCheckboxForm />
    </div>
  );
};

export default AppSimpleForms;
