// src/pages/Blog.jsx
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Blog = () => {
  const posts = [
    { id: 1, title: 'First Post' },
    { id: 2, title: 'Second Post' },
    { id: 3, title: 'Third Post' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map(post => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-semibold text-gray-900">{post.title}</h2>
            </Link>
          ))}
        </div>
        <Outlet />
      </div>
    </div>
  )
}

export default Blog