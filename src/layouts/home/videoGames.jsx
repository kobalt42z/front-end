import { Button, Card, Modal } from 'flowbite-react';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';
import AddGame from '../../components/addGameform/addGame';
import { GlobalContext } from '../../contexts/context';
import { apiPost } from '../../services/services';

const VideoGames = () => {
  const [active, setActive] = useState(false)
  const [Game, setGame] = useState('second')

  useEffect(() => {

  }, []);
  return (
    <>
      <div className="p-3">
        <Button.Group>
          <Button color="success" onClick={() => setActive(true)} >
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

      <div className="output-data grid grid-cols-4 grid-row-4 px-5 text-white">
        <div className=" block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

          <div className="">
            <Link to={'s'}> <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              2002 FIFA World Cup
            </h5></Link>
            <h6 className='italic'>Third-person Action-Adventure/Stealth</h6>



            <p className="font-normal text-gray-700 dark:text-gray-400 capitalize pt-8 flex justify-between">
              <div className="">
                <h4 className='text-gray-400'><span className='font-bold text-gray-400'>Year : </span>2005</h4>
                <Link to={''}><h4 className='font-bold'>Devs: <span className='font-normal'>EA Games</span></h4></Link>
              </div>
              <div className="">

                <Link to={''}><h4 className='font-bold'>Platform: <span className='font-normal'>xbox</span></h4></Link>
                <Link to={''}><h4 className='font-bold'>Publisher: <span className='font-normal'>EA Games</span></h4></Link>
              </div>

            </p>
          </div>

        </div>

      </div>


    </>
  )
}

export default VideoGames