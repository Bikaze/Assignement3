// src/pages/BlogPost.jsx
import React from 'react'
import { useParams } from 'react-router-dom'

const BlogPost = () => {
  const { id } = useParams()

  return (
    <div className="mt-12 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Blog Post {id}</h2>
      <p className="text-gray-600">This is the content of blog post {id}.</p>
    </div>
  )
}

export default BlogPost