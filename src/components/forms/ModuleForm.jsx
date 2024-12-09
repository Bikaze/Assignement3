// src/components/forms/ModuleForm.jsx
import React from 'react';
import { Formik, Form, Field } from 'formik';
import { ModuleSchema } from '../../utils/validationSchemas';

const ModuleForm = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Module Registration
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <Formik
            initialValues={{
              name: '',
              code: '',
              description: '',
              credits: '',
            }}
            validationSchema={ModuleSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Module Name</label>
                  <Field name="name" type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3" />
                  {errors.name && touched.name && <div className="mt-1 text-red-500 text-sm">{errors.name}</div>}
                </div>

                <div>
                  <label htmlFor="code" className="block text-sm font-medium text-gray-700">Module Code</label>
                  <Field name="code" type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3" />
                  {errors.code && touched.code && <div className="mt-1 text-red-500 text-sm">{errors.code}</div>}
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                  <Field name="description" as="textarea" rows="3" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3" />
                  {errors.description && touched.description && <div className="mt-1 text-red-500 text-sm">{errors.description}</div>}
                </div>

                <div>
                  <label htmlFor="credits" className="block text-sm font-medium text-gray-700">Credits</label>
                  <Field name="credits" type="number" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3" />
                  {errors.credits && touched.credits && <div className="mt-1 text-red-500 text-sm">{errors.credits}</div>}
                </div>

                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                  Register Module
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ModuleForm;