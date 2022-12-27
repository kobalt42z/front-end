import { Button, Modal } from 'flowbite-react';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import AddGame from '../../components/addGameform/addGame';
import { apiPost } from '../../services/services';

const VideoGames = () => {
  const [active, setActive] = useState(false)

  return (
    <>
    <div className="p-3">
    <Button.Group>
        <Button color="success" onClick={()=>setActive(true)} >
          Add <i className="px-3 fa-solid fa-plus"></i>
        </Button>
      
        <Button color="info">
         Search <i className="px-3 fa-solid fa-magnifying-glass"></i>
        </Button>
      </Button.Group>
    </div>
      
      <Modal
        show={active}
        size="xl"
        popup={true}
        onClose={() => setActive(false)}
      >
        <Modal.Header />
         
       
        <Modal.Body>
        <h1 className="text-2xl font-bold h-[50px]">Add Game</h1>
        <hr />
          <AddGame />
        </Modal.Body>
      </Modal>
    //  

    </>
  )
}

export default VideoGames