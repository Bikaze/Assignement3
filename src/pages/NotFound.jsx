// src/pages/NotFound.jsx
import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-8">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page not found</p>
        <Link to="/" className="text-blue-600 hover:text-blue-800">
          Go back home
        </Link>
      </div>
    </div>
  )
}

export default NotFound