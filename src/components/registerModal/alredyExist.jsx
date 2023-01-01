import React, { useState } from 'react'
import { Button, Modal } from 'flowbite-react'
import Xcircle from './Xcircle.svg'
import Check from './check.svg'
import { useNavigate } from 'react-router-dom'


const AlredyExist = (props) => {

    const navigate = useNavigate();
    const [activ, setActiv] = useState(true);
    const onClick = () => {
        navigate('/login')
    }
    const reaload = () => {
        navigate('/register')
    }
    return (
        <React.Fragment>
           
            <Modal
                show={activ}
                size="md"
                popup={true}
                onClose={  props.closeModal}
            >
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                    <img src={Check} alt='faild' className="mx-auto  iconc mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />

                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400 capitalize">
                            the username or email is alredy taken try another or login 
                        </h3>
                        <div className="flex justify-center gap-4">
                            <Button
                                color="gray"
                                onClick={props.closeModal}
                            >
                                ok
                            </Button>
                            <Button
                                color="info"
                                onClick={()=>onClick()}
                            >login
                            </Button>
                         
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    )
}

export default AlredyExist