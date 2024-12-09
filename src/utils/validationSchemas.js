// src/utils/validationSchemas.js
import * as Yup from 'yup';

export const LecturerSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  subject: Yup.string().required('Subject is required'),
  phone: Yup.string()
    .matches(/^[0-9]+$/, 'Phone number must be numeric')
    .required('Phone number is required'),
});

export const StudentSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  studentId: Yup.string()
    .matches(/^[a-zA-Z0-9]+$/, 'Student ID must be alphanumeric')
    .required('Student ID is required'),
  dateOfBirth: Yup.date().required('Date of birth is required'),
});

export const DriverSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  licenseNumber: Yup.string().required('License number is required'),
  phone: Yup.string()
    .matches(/^[0-9]+$/, 'Phone number must be numeric')
    .required('Phone number is required'),
  vehicleType: Yup.string().required('Vehicle type is required'),
});

export const BookSchema = Yup.object().shape({
  title: Yup.string().required('Book title is required'),
  author: Yup.string().required('Author is required'),
  isbn: Yup.string().required('ISBN is required'),
  publishedYear: Yup.string()
    .matches(/^\d{4}$/, 'Published year must be a four-digit number')
    .required('Published year is required'),
});

export const ModuleSchema = Yup.object().shape({
  name: Yup.string().required('Module name is required'),
  code: Yup.string().required('Module code is required'),
  description: Yup.string().required('Description is required'),
  credits: Yup.number()
    .required('Credits are required')
    .positive('Credits must be positive'),
});