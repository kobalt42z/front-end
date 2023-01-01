import React, { useState } from 'react'
import { Button, Modal } from 'flowbite-react'
import Xcircle from './Xcircle.svg'
import Check from './check.svg'
const FailModal = (props) => {
    const [activ, setActiv] = useState(true);
    const onClick = () => {
        navigate('/login')
    }
    return (
        <React.Fragment>
           
            <Modal
                show={activ}
                size="md"
                popup={true}
                onClose={props.closeModal}
            >
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                    <img src={Check} alt='faild' className="mx-auto  iconc mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />

                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400 capitalize">
                            error during the register
                        </h3>
                        <div className="flex justify-center gap-4">
                            <Button
                                color="failure"
                                onClick={props.closeModal}
                            >
                                ok
                            </Button>
                         
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    )
}

export default FailModal