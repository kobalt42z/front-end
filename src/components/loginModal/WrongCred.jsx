import { XCircleIcon } from '@heroicons/react/24/solid'
import { Button, Modal } from 'flowbite-react'
import React from 'react'

export const WrongCred = (props) => {
  return (
    <Modal
    show={true}
    size="md"
    popup={true}
    onClose={  props.closeModal}
>
    <Modal.Header />
    <Modal.Body>
        <div className="text-center">
        <XCircleIcon fill='#C81E1E' className="mx-auto  iconc mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />

            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400 capitalize">
                worng credentials
            </h3>
            <div className="flex justify-center gap-4">
                <Button
                    color="failure"
                    onClick={props.closeModal}
                >
                    try again
                </Button>
               
             
            </div>
        </div>
    </Modal.Body>
</Modal>
  )
}
