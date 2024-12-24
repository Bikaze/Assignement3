import React from "react";
import SimpleLoginForm from "./components/SimpleLoginForm";
import SingleInputForm from "./components/SingleInputForm";
import ValidatedForm from "./components/ValidatedForm";
import MultiStepForm from "./components/MultiStepForm";
import MultiCheckboxForm from "./components/MultiCheckboxForm";

const AppSimpleForms = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-6">
      <SimpleLoginForm />
      <SingleInputForm />
      <ValidatedForm />
      <MultiStepForm />
      <MultiCheckboxForm />
    </div>
  );
};

export default AppSimpleForms;
