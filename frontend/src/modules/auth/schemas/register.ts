import * as Yup from "yup"

export const registerSchema = Yup.object().shape({
  name: Yup.string()
    .required("Full name is required")
    .min(3, "Full name must be at least 3 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[^A-Za-z0-9]/, "Password must contain at least one special character"),
  repeat_password: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Passwords must match")
    .required("Please confirm your password"),
})
