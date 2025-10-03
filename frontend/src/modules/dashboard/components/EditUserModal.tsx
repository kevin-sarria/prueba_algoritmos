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
import type { User } from "../types/user.interface";
import { editUserSchema } from "../schemas/editUser.scheme";

interface Props {
  userSelected: User | null;
  isOpen: boolean;
  setClose: () => void;
}

export const EditUserModal = ({ userSelected, isOpen, setClose }: Props) => {
  const { 
    values, 
    errors,
    handleChange, 
    handleSubmit, 
    handleBlur,
    isValid,
    isSubmitting
  } = useFormik({
    initialValues: {
      email: userSelected?.email || "",
      name: userSelected?.name || "",
    },
    enableReinitialize: true,
    validationSchema: editUserSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values, { setSubmitting }) => {
      console.log("Datos a guardar:", values);
      setSubmitting(false);
      setClose();
    },
  });

  return (
    <>
      <Modal show={isOpen} size="md" onClose={setClose}>
        <ModalHeader className="!border-b !border-b-gray-200">
          Edit User
        </ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
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
                  required
                />
                {errors.email && (
                  <span className="text-red-500 text-sm mt-1 block">
                    {errors.email}
                  </span>
                )}
              </div>
              
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
                  required
                />
                {errors.name && (
                  <span className="text-red-500 text-sm mt-1 block">
                    {errors.name}
                  </span>
                )}
              </div>

              <div className="flex justify-end space-x-2 pt-4">
                <Button 
                  type="submit" 
                  disabled={!isValid || isSubmitting}
                >
                  Save
                </Button>
              </div>
            </div>
          </form>
        </ModalBody>
      </Modal>
    </>
  );
};