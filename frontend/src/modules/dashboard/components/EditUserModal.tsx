
"use client";

import { Button, Label, Modal, ModalBody, ModalHeader, TextInput } from "flowbite-react";
import { useFormik } from 'formik';

interface Props {
    isOpen: boolean,
    setClose: () => void
}

export const EditUserModal = ({ isOpen, setClose }: Props) => {

    const { values, handleChange } = useFormik({
        initialValues: {
            email: '',
        },
        onSubmit: ()  => {

        }
    })

  return (
    <>
      <Modal show={isOpen} size="md" onClose={setClose} popup>
        <ModalHeader>Edit Modal</ModalHeader>
        <ModalBody>
          <div className="space-y-6">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email">Email</Label>
              </div>
              <TextInput
                id="email"
                placeholder="name@company.com"
                value={values.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name">Name</Label>
              </div>
              <TextInput id="name" type="password" placeholder="ej. Jhon Doe" required />
            </div>
          </div>

          <div>
            <Button type="submit">Save</Button>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}
