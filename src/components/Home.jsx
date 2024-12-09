// src/components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const forms = [
    { path: '/lecturer', title: 'Lecturer Registration', description: 'Register new lecturers with their subject expertise' },
    { path: '/student', title: 'Student Registration', description: 'Enroll new students with their personal details' },
    { path: '/driver', title: 'Driver Registration', description: 'Register drivers with their vehicle information' },
    { path: '/book', title: 'Book Registration', description: 'Add new books to the library catalog' },
    { path: '/module', title: 'Module Registration', description: 'Create new course modules with credit information' }
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Registration Forms</h1>
        <p className="text-xl text-gray-600 mb-8">Choose from our collection of registration forms</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {forms.map(({ path, title, description }) => (
          <Link key={path} to={path} className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">{title}</h2>
            <p className="text-gray-600">{description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;