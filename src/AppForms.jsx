// src/AppForms.jsx
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import LecturerForm from "./components/forms/LecturerForm";
import StudentForm from "./components/forms/StudentForm";
import DriverForm from "./components/forms/DriverForm";
import BookForm from "./components/forms/BookForm";
import ModuleForm from "./components/forms/ModuleForm";
import Home from "./components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "lecturer",
        element: <LecturerForm />,
      },
      {
        path: "student",
        element: <StudentForm />,
      },
      {
        path: "driver",
        element: <DriverForm />,
      },
      {
        path: "book",
        element: <BookForm />,
      },
      {
        path: "module",
        element: <ModuleForm />,
      },
    ],
  },
]);

const AppForms = () => {
  return <RouterProvider router={router} />;
};

export default AppForms;
