import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.png'
const Header = () => {
  return (
    <>
      <div className="container flex justify-around py-5 w-[100%] ">
          <div className="logo flex items-center justify-start w-[50%]">
            <img src={logo} alt="logo"  className='mx-3'/>
            <h1 className='text-[40px] font-thin'>game CODEX API</h1>
          </div>
          <div className="capitalize flex items-center  font-semibold justify-evenly w-[50%]
          text-lg text-center 
          ">
            <h4>Documentation</h4>
            <h4>About us</h4>
            <h4>Prices</h4>
            <h4>Contact us</h4>

            <Link to={"/login"} className=" capitalize  shadow  hover:text-white focus:shadow-outline focus:outline-none text-gray-400 text-lg  font-bold py-3 px-3 rounded">Sign In</Link>
           
            <Link to={"/register"} className=" capitalize  shadow bg-cyan-600 hover:bg-cyan-800 focus:shadow-outline focus:outline-none text-[#111111] text-lg font-bold py-3 px-7 rounded">Sign Up</Link>
           
          </div>


       
      </div>
    </>
  )
}

export default Header