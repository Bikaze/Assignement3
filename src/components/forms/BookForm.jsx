// src/components/forms/BookForm.jsx
import React from 'react';
import { Formik, Form, Field } from 'formik';
import { BookSchema } from '../../utils/validationSchemas';

const BookForm = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Book Registration
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <Formik
            initialValues={{
              title: '',
              author: '',
              isbn: '',
              publishedYear: '',
            }}
            validationSchema={BookSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form className="space-y-6">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700">Book Title</label>
                  <Field name="title" type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3" />
                  {errors.title && touched.title && <div className="mt-1 text-red-500 text-sm">{errors.title}</div>}
                </div>

                <div>
                  <label htmlFor="author" className="block text-sm font-medium text-gray-700">Author</label>
                  <Field name="author" type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3" />
                  {errors.author && touched.author && <div className="mt-1 text-red-500 text-sm">{errors.author}</div>}
                </div>

                <div>
                  <label htmlFor="isbn" className="block text-sm font-medium text-gray-700">ISBN</label>
                  <Field name="isbn" type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3" />
                  {errors.isbn && touched.isbn && <div className="mt-1 text-red-500 text-sm">{errors.isbn}</div>}
                </div>

                <div>
                  <label htmlFor="publishedYear" className="block text-sm font-medium text-gray-700">Published Year</label>
                  <Field name="publishedYear" type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3" />
                  {errors.publishedYear && touched.publishedYear && <div className="mt-1 text-red-500 text-sm">{errors.publishedYear}</div>}
                </div>

                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                  Register Book
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default BookForm;