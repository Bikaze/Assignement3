// src/components/Layout.jsx
import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex space-x-8">
              <Link
                to="/"
                className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-gray-500"
              >
                Home
              </Link>
              <Link
                to="/lecturer"
                className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-gray-500"
              >
                Lecturer
              </Link>
              <Link
                to="/student"
                className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-gray-500"
              >
                Student
              </Link>
              <Link
                to="/driver"
                className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-gray-500"
              >
                Driver
              </Link>
              <Link
                to="/book"
                className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-gray-500"
              >
                Book
              </Link>
              <Link
                to="/module"
                className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-gray-500"
              >
                Module
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
