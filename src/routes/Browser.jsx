import React, { useState } from 'react'
import { BrowserRouter, Link, Navigate, Route, Router, Routes, useLocation } from 'react-router-dom'
import Home from '../layouts/home/home'
import Landing from '../layouts/home/landing'
import VideoGames from '../layouts/home/videoGames'
import SharedLayouts from '../layouts/sharedLayouts'
import ForOfor from '../pages/404'
import Register from '../pages/register'
import WelcomBack from '../pages/WelcomBack'
import Protected from './protected'


const Browser = () => {
    const [registred, setRegistred] = useState(false)
    
    return (
        <BrowserRouter>

            <Routes>
                {/* send from root to /landing */}
                <Route path='/' element={<Navigate to="/landing" />} />

                <Route path='/landing' element={registred ? <Navigate to="/home" /> : <Landing />} />

                <Route path="/register" element={<Register />} />

                <Route path="/login" element={<WelcomBack />} />

           
                <Route path="/home" element={<SharedLayouts registred={true} />}>

                    {/* jump to empty page wih shared layout TOFIX */}
                    <Route index element={<Home/>} />
                    <Route path="/home/register" element={<Register/>} />
                    <Route path="/home/videoGame" element={<VideoGames/>} />

                </Route>


                <Route path="*" element={<ForOfor></ForOfor>} />

            </Routes>
        </BrowserRouter>

    )
}

export default Browser