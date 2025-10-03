"use client"

import { Button, Card, Label, TextInput } from "flowbite-react"
import { useFormik } from "formik"
import { loginSchema } from "../schemas/login"
import { useAuth } from "../hooks/use-auth"

export function LoginForm() {
  
  const { handleLogin } = useAuth()

  const {
    values,
    handleChange,
    handleSubmit,
    errors,
    touched,
    handleBlur,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async() => {
      await handleLogin(values.email, values.password)
    },
  })

  return (
    <Card className="w-full max-w-md">
      <h2 className="text-2xl font-bold">Login</h2>
      <p>Enter your email and password to access</p>

      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          {/* Email */}
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <TextInput
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              color={errors.email && touched.email ? "failure" : "gray"}
              required
            />
            {errors.email && touched.email && (
              <p className="text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <TextInput
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              color={errors.password && touched.password ? "failure" : "gray"}
              required
            />
            {errors.password && touched.password && (
              <p className="text-sm text-red-500">{errors.password}</p>
            )}
          </div>
        </div>

        <div className="flex flex-col space-y-4 mt-4">
          <Button type="submit" className="w-full cursor-pointer">
            Login
          </Button>

          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              Don't have an account?{" "}
              <a
                href="/register"
                className="text-primary hover:underline font-medium"
              >
                Create Account
              </a>
            </p>
          </div>
        </div>
      </form>
    </Card>
  )
}
