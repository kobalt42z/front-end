import React, { useState } from 'react'
import { BrowserRouter, Link, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Home from '../layouts/home/home'
import Landing from '../layouts/home/landing'
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


                <Route path="/home" element={<SharedLayouts />}>

                    {/* jump to empty page wih shared layout TOFIX */}
                    <Route index element={
                        <Protected user={registred}>
                            <Home />
                            </Protected>} />

                </Route>


                <Route path="*" element={<ForOfor></ForOfor>} />

            </Routes>
        </BrowserRouter>

    )
}

export default Browser