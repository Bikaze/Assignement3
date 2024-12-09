// src/components/forms/DriverForm.jsx
import React from 'react';
import { Formik, Form, Field } from 'formik';
import { DriverSchema } from '../../utils/validationSchemas';

const DriverForm = () => {
  const vehicleTypes = ['Car', 'Truck', 'Motorcycle'];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Driver Registration
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <Formik
            initialValues={{
              name: '',
              licenseNumber: '',
              phone: '',
              vehicleType: '',
            }}
            validationSchema={DriverSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <Field name="name" type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3" />
                  {errors.name && touched.name && <div className="mt-1 text-red-500 text-sm">{errors.name}</div>}
                </div>

                <div>
                  <label htmlFor="licenseNumber" className="block text-sm font-medium text-gray-700">License Number</label>
                  <Field name="licenseNumber" type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3" />
                  {errors.licenseNumber && touched.licenseNumber && <div className="mt-1 text-red-500 text-sm">{errors.licenseNumber}</div>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <Field name="phone" type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3" />
                  {errors.phone && touched.phone && <div className="mt-1 text-red-500 text-sm">{errors.phone}</div>}
                </div>

                <div>
                  <label htmlFor="vehicleType" className="block text-sm font-medium text-gray-700">Vehicle Type</label>
                  <Field as="select" name="vehicleType" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3">
                    <option value="">Select a vehicle type</option>
                    {vehicleTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </Field>
                  {errors.vehicleType && touched.vehicleType && <div className="mt-1 text-red-500 text-sm">{errors.vehicleType}</div>}
                </div>

                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                  Register
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default DriverForm;