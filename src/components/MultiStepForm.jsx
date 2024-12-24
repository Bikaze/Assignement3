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
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow rounded space-y-4">
      {step === 1 && (
        <div className="space-y-1">
          <label className="block font-semibold">Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
        </div>
      )}
      {step === 2 && (
        <div className="space-y-1">
          <label className="block font-semibold">Address</label>
          <input
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
        </div>
      )}
      {step === 3 && (
        <div className="space-y-1">
          <label className="block font-semibold">Payment Details</label>
          <input
            name="payment"
            value={formData.payment}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
        </div>
      )}
      <div className="flex justify-between">
        {step > 1 && (
          <button type="button" onClick={handlePrev} className="bg-gray-300 py-2 px-4 rounded">
            Back
          </button>
        )}
        {step < 3 && (
          <button type="button" onClick={handleNext} className="bg-blue-500 text-white py-2 px-4 rounded">
            Next
          </button>
        )}
        {step === 3 && (
          <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">
            Submit
          </button>
        )}
      </div>
    </form>
  );
};

export default MultiStepForm;
