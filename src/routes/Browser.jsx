import React, { useState } from 'react'
import { BrowserRouter, Link, Navigate, Route, Router, Routes, useLocation } from 'react-router-dom'
import { GeneralAuth } from '../auth/generalAuth'
import Home from '../layouts/home/home'
import Landing from '../pages/landing/landing'
import VideoGames from '../layouts/home/videoGames'
import SharedLayouts from '../layouts/sharedLayouts'
import ForOfor from '../pages/404'
import Register from '../pages/register'
import WelcomBack from '../pages/WelcomBack'
import Protected from './protected'
import { ForgotPwd } from '../pages/ForgotPwd'


const Browser = () => {
    const [registred, setRegistred] = useState(false)
    
    return (
        <BrowserRouter>

            <Routes>
                {/* send from root to /landing */}
                <Route path='/' element={<Navigate to="/landing" />} />

                <Route path='/landing' element={registred ? <Navigate to="/home" /> : <Landing />} />

                <Route path="/register" element={registred ? <Navigate to="/home" /> : <Register />} />

                <Route path="/login" element={registred ? <Navigate to="/home" /> : <WelcomBack />} />

                <Route path="/forgot" element={<ForgotPwd/>} />

           
                <Route path="/home" element={<GeneralAuth><SharedLayouts/></GeneralAuth>}>
                    <Route index element={<VideoGames/>} />
                </Route>


                <Route path="*" element={<ForOfor></ForOfor>} />

            </Routes>
        </BrowserRouter>

    )
}

export default Browser