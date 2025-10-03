
"use client";

import { Button, Modal, ModalBody, ModalHeader } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

interface Props {
    userSelectedId: string
    isOpen: boolean
    setClose: () => void
}

export const DeleteUserModal = ({ userSelectedId, isOpen, setClose }: Props) => {

  const handleDelete = () => { 
    
  }

  return (
    <>
      <Modal show={isOpen} size="md" onClose={setClose} popup>
        <ModalHeader />
        <ModalBody>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this user?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="red" onClick={setClose}>
                Yes, I'm sure
              </Button>
              <Button color="alternative" onClick={setClose}>
                No, cancel
              </Button>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}
