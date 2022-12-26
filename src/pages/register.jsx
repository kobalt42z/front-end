import React from 'react'
import { useForm } from 'react-hook-form'
import './register.css'

// ! TODO: add regex to register 
// ! TODO: fix prevent default and hndle submit

const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
    };

    // console.log(watch("FirstName")); to watch the field in live mode

    return (
        <div className ="container mx-auto">
            <div className ="flex justify-center px-6 my-12">

                <div className ="w-full xl:w-3/4 lg:w-11/12 flex">

                    <div
                        className ="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg registerBg"> 
                    </div>

                    <div className ="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                        <h3 className ="pt-4 text-2xl text-center">Create an Account!</h3>
                        <form className ="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                            <div className ="mb-4 md:flex md:justify-between">
                                <div className ="mb-4 md:mr-2 md:mb-0">
                                    <label className ="block mb-2 text-sm font-bold text-gray-700" >
                                        First Name
                                    </label>
                                    <input
                                        className ="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="firstName"
                                        type="text"
                                        placeholder="First Name"
                                        {... register("FirstName",
                                        {required: true,minLength:2,maxLength:30, pattern: /^[A-Za-z]+$/i})}
                                    />
                                </div>
                                <div className ="md:ml-2">
                                    <label className ="block mb-2 text-sm font-bold text-gray-700" >
                                        Last Name
                                    </label>
                                    <input
                                        className ="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="lastName"
                                        type="text"
                                        placeholder="Last Name"
                                        {...register("Last Name",{required: true,minLength:2,maxLength:30, pattern: /^[A-Za-z]+$/i})}
                                        
                                    />
                                </div>
                            </div>
                            <div className ="mb-4">
                                <label className ="block mb-2 text-sm font-bold text-gray-700" >
                                    Email
                                </label>
                                <input
                                    className ="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                    {... register("Email",{required: true,max:100})}
                                    // ! mail regex as pattern
                                />
                            </div>
                            <div className ="mb-4 md:flex md:justify-between">
                                <div className ="mb-4 md:mr-2 md:mb-0">
                                    <label className ="block mb-2 text-sm font-bold text-gray-700" >
                                        Password
                                    </label>
                                    <input
                                        className ="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="password"
                                        type="password"
                                        placeholder="******************"
                                        {...register("password",{required:true ,min:8,max:16})}
                                    />
                                    <p className ="text-xs italic text-red-500">Please choose a password.</p>
                                </div>
                                <div className ="md:ml-2">
                                    <label className ="block mb-2 text-sm font-bold text-gray-700" >
                                        Confirm Password
                                    </label>
                                    <input
                                        className ="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="c_password"
                                        type="password"
                                        placeholder="******************"
                                    />
                                </div>
                            </div>
                            <div className ="mb-6 text-center">
                                <button
                                    className ="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                    type="submit"
                                >
                                    Register Account
                                </button>
                            </div>
                            <hr className ="mb-6 border-t" />
                            <div className ="text-center">
                                <a
                                    className ="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                    href="#"
                                >
                                    Forgot Password?
                                </a>
                            </div>
                            <div className ="text-center">
                                <a
                                    className ="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                    href="./index.html"
                                >
                                    Already have an account? Login!
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register