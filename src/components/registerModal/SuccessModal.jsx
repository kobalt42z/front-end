import { Button, Modal } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import Check from './check.svg'
const SuccessModal = (show) => {
    const [activ, setActiv] = useState(true);
    const navigate = useNavigate()
    const onClick = () => {
        navigate('/login')
    }
 
    return (
        <Modal
            show={activ}
            size="md"
            popup={true}
            onClose={() => setActiv(false)}
        >
            <Modal.Header />
            <Modal.Body>
                <div className="text-center">
                    <img src={Check} alt='check' className="mx-auto  iconc mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                    <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400 capitalize">
                        the account have been created succefully
                    </h3>
                    <div className="flex justify-center gap-4">
                        <Button
                            color="success"
                            onClick={onClick}
                        >
                            LogIn
                        </Button>
                        <Button
                            color="gray"
                            onClick={()=>setActiv(false) }
                        >
                            Ok
                        </Button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default SuccessModal