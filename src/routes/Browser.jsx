import React, { useState } from 'react'
import { BrowserRouter, Link, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Home from '../layouts/home/home'
import SharedLayouts from '../layouts/sharedLayouts'
import Register from '../pages/register'
import WelcomBack from '../pages/WelcomBack'


const Browser = () => {
    const [registred, setRegistred] = useState(false)

    return (
        <BrowserRouter>

            <Routes>
                {/* send from root to /home */}
                <Route path='/' element={<Navigate to="/home" />} />

                <Route path="/register" element={<Register/>} />

                <Route path="/login" element={<WelcomBack/>} />
                
                <Route path="/home" element={<SharedLayouts registred={registred}/>} >
                    <Route index element={<Home/>} />


                    <Route path="/home/doc" element={<h1 className="text-3xl font-bold underline text-center ">documentation!</h1>} />
                </Route>

                <Route path="*" element={<h1>404 not found</h1>} />

            </Routes>
        </BrowserRouter>

    )
}

export default Browser