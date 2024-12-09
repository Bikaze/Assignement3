// src/App.jsx
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ProductDetails from './pages/ProductDetails'
import NotFound from './pages/NotFound'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
)

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout><Home /></Layout>,
  },
  {
    path: '/about',
    element: <Layout><About /></Layout>,
  },
  {
    path: '/contact',
    element: <Layout><Contact /></Layout>,
  },
  {
    path: '/product/:id',
    element: <Layout><ProductDetails /></Layout>,
  },
  {
    path: '/blog',
    element: <Layout><Blog /></Layout>,
    children: [
      {
        path: ':id',
        element: <BlogPost />,
      },
    ],
  },
  {
    path: '*',
    element: <Layout><NotFound /></Layout>,
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App