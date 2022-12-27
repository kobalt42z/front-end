import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'
import NavBar from '../components/Navbar/NavBar'

const SharedLayouts = ({registred}) => {
    // ?chek how to share state between components
  
  return (
    <>
   {registred? <NavBar/>:<Header/> }
       
        <Outlet/>
        <h1>footer</h1>
    </>
  )
}

export default SharedLayouts