import * as yup from 'yup';

export const editUserSchema = yup.object({
  name: yup
    .string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name cannot exceed 50 characters'),
  
  email: yup
    .string()
    .required('Email is required')
    .email('Please enter a valid email address')
});