import { Footer } from 'flowbite-react'
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import HomeFooter from '../components/footer/HomeFooter'


import Header from '../components/header/Header'
import NavBar from '../components/Navbar/NavBar'

const SharedLayouts = ({registred}) => {
    // ?chek how to share state between components
  
  return (
    <>
  <NavBar/> 
<div className="h-[90vh]">
<Outlet/>
</div>
  
  <HomeFooter/>
    </>
  )
}

export default SharedLayouts