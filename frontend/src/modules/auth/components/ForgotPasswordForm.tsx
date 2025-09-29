"use client"

import { Button, Card, Label, TextInput } from "flowbite-react"
import { useFormik } from "formik"
import { forgotPasswordSchema } from "../schemas/forgot-password"

export const ForgotPasswordForm = () => {
  const {
    values,
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: forgotPasswordSchema,
    onSubmit: (values) => {
      console.log("Recover password attempt:", values)
    },
  })

  return (
    <Card className="w-full max-w-md">
      <h2 className="text-2xl font-bold">Recover Password</h2>
      <p>
        Enter your email and we will send you instructions to reset your
        password
      </p>

      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          {/* Email */}
          <div className="flex flex-col space-y-2">
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
        </div>

        {/* Submit */}
        <div className="flex flex-col space-y-4 mt-4">
          <Button type="submit" className="w-full">
            Recover Password
          </Button>
          <div className="text-center space-y-2">
            <a
              href="/"
              className="text-sm text-muted-foreground hover:text-primary hover:underline"
            >
              Back to login
            </a>
          </div>
        </div>
      </form>
    </Card>
  )
}
