import React, { useState } from "react";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    payment: "",
  });

  const handleNext = () => setStep((s) => s + 1);
  const handlePrev = () => setStep((s) => s - 1);
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {step === 1 && (
        <div>
          <label>Name</label>
          <input name="name" value={formData.name} onChange={handleChange} />
        </div>
      )}
      {step === 2 && (
        <div>
          <label>Address</label>
          <input
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
      )}
      {step === 3 && (
        <div>
          <label>Payment Details</label>
          <input
            name="payment"
            value={formData.payment}
            onChange={handleChange}
          />
        </div>
      )}
      <div>
        {step > 1 && (
          <button type="button" onClick={handlePrev}>
            Back
          </button>
        )}
        {step < 3 && (
          <button type="button" onClick={handleNext}>
            Next
          </button>
        )}
        {step === 3 && <button type="submit">Submit</button>}
      </div>
    </form>
  );
};

export default MultiStepForm;
