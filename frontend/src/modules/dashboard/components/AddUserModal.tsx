"use client";

import {
  Button,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  TextInput,
} from "flowbite-react";
import { useFormik } from "formik";
import { addUserSchema } from "../schemas/addUser.scheme";

interface Props {
  isOpen: boolean;
  setClose: () => void;
}

export const AddUserModal = ({ isOpen, setClose }: Props) => {
  const { 
    values, 
    errors, 
    handleChange, 
    handleSubmit, 
    handleBlur,
    isValid,
    isSubmitting,
    resetForm
  } = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
      repeat_password: ""
    },
    validationSchema: addUserSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      // Aquí va tu lógica para guardar el nuevo usuario
      console.log("Nuevo usuario:", {
        name: values.name,
        email: values.email,
        password: values.password
      });
      
      setSubmitting(false);
      resetForm();
      setClose();
    },
  });

  const handleClose = () => {
    resetForm();
    setClose();
  };

  return (
    <>
      <Modal show={isOpen} size="md" onClose={handleClose}>
        <ModalHeader className="!border-b !border-b-gray-200">
          Add User
        </ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="name">Name</Label>
                </div>
                <TextInput
                  id="name"
                  name="name"
                  type="text"
                  placeholder="ej. John Doe"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  color={errors.name ? "failure" : "gray"}
                />
                {errors.name && (
                  <span className="text-red-500 text-sm mt-1 block">
                    {errors.name}
                  </span>
                )}
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email">Email</Label>
                </div>
                <TextInput
                  id="email"
                  name="email"
                  placeholder="name@company.com"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  color={errors.email ? "failure" : "gray"}
                />
                {errors.email && (
                  <span className="text-red-500 text-sm mt-1 block">
                    {errors.email}
                  </span>
                )}
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password">Password</Label>
                </div>
                <TextInput
                  id="password"
                  name="password"
                  type="password"
                  placeholder="*********"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  color={errors.password ? "failure" : "gray"}
                />
                {errors.password && (
                  <span className="text-red-500 text-sm mt-1 block">
                    {errors.password}
                  </span>
                )}
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="repeat_password">Repeat Password</Label>
                </div>
                <TextInput
                  id="repeat_password"
                  name="repeat_password"
                  type="password"
                  placeholder="*********"
                  value={values.repeat_password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  color={errors.repeat_password ? "failure" : "gray"}
                />
                {errors.repeat_password && (
                  <span className="text-red-500 text-sm mt-1 block">
                    {errors.repeat_password}
                  </span>
                )}
              </div>

              <div className="flex justify-end space-x-2 pt-4">
                <Button 
                  type="submit" 
                  disabled={!isValid || isSubmitting}
                >
                  {isSubmitting ? "Saving..." : "Save"}
                </Button>
              </div>
            </div>
          </form>
        </ModalBody>
      </Modal>
    </>
  );
};