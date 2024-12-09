// src/pages/ProductDetails.jsx
import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  const { id } = useParams()

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Product Details</h1>
        <p className="text-xl text-gray-600">Viewing product with ID: {id}</p>
      </div>
    </div>
  )
}

export default ProductDetails