"use client"

import { Button, Card, Label, TextInput } from "flowbite-react"
import { useFormik } from "formik"
import { registerSchema } from "../schemas/register"

export const RegisterForm = () => {
  const {
    values,
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      repeat_password: "",
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      console.log("Form submitted:", values)
    },
  })

  return (
    <div className="max-w-md mx-auto mt-8 p-4">
      <Card className="w-full sm:w-[400px]">
        <div className="mb-4 max-w-full">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
            User Registration
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-2">
            Create your account to get started
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Full name */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name">Full Name</Label>
            </div>
            <TextInput
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              color={errors.name && touched.name ? "failure" : "gray"}
            />
            {errors.name && touched.name && (
              <p className="text-sm text-red-500">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email">Email</Label>
            </div>
            <TextInput
              id="email"
              name="email"
              type="email"
              placeholder="example@email.com"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              color={errors.email && touched.email ? "failure" : "gray"}
            />
            {errors.email && touched.email && (
              <p className="text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password">Password</Label>
            </div>
            <TextInput
              id="password"
              name="password"
              type="password"
              placeholder="Your password here"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              color={errors.password && touched.password ? "failure" : "gray"}
            />
            {errors.password && touched.password && (
              <p className="text-sm text-red-500">{errors.password}</p>
            )}
          </div>

          {/* Confirm password */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="repeat_password">Confirm Password</Label>
            </div>
            <TextInput
              id="repeat_password"
              name="repeat_password"
              type="password"
              placeholder="Repeat your password"
              value={values.repeat_password}
              onChange={handleChange}
              onBlur={handleBlur}
              color={
                errors.repeat_password && touched.repeat_password
                  ? "failure"
                  : "gray"
              }
            />
            {errors.repeat_password && touched.repeat_password && (
              <p className="text-sm text-red-500">{errors.repeat_password}</p>
            )}
          </div>

          <Button type="submit" className="w-full">
            Create Account
          </Button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <a
              href="/"
              className="text-primary hover:underline font-medium"
            >
              Sign in here
            </a>
          </p>
        </div>
      </Card>
    </div>
  )
}
