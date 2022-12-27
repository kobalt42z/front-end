import { Alert, Button, Modal } from 'flowbite-react';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { LOGIN_URL, REGISTER_URL } from '../constant/constant';
import { GlobalContext } from '../contexts/context';
import { apiPost } from '../services/services';
import './register.css'
import Check from './check.svg'

// ! TODO: add regex to register 
// ! TODO: fix prevent default and hndle submit

const Register = () => {
    const { User } = React.useContext(GlobalContext)
    const [user, setUser] = User
    const [show, setShow] = useState(false)
    const navigate = useNavigate()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onClick = () => {
        navigate('/login')
    }
    const onSubmit = data => {
        console.log(data);
        let body = {
            userName: data.UserName,
            firstName: data.FirstName,
            lastName: data.LastName,
            email: data.Email,
            password: data.Password,
        }
        // ? to check how to throw up sucsess message
        let resp = apiPost(REGISTER_URL, body)
       
        console.log(resp || "faild");
        setActiv(true)

    };

    

    const [activ, setActiv] = useState(false);
    return (
        <div className="container mx-auto">

            <div className="flex justify-center px-6 my-12">
                <Modal
                    show={activ}
                    size="md"
                    popup={true}
                    onClose={() => setActiv(false)}
                >
                    <Modal.Header />
                    <Modal.Body>
                        <div className="text-center">
                            <img src={Check} alt='check' className="mx-auto  iconc mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400 capitalize">
                                the account have been created succefully
                            </h3>
                            <div className="flex justify-center gap-4">
                                <Button
                                    color="success"
                                    onClick={onClick}
                                >
                                    LogIn
                                </Button>
                                <Button
                                    color="gray"
                                    onClick={() => setActiv(false)}
                                >
                                    Ok
                                </Button>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
                <div className="w-full xl:w-3/4 lg:w-11/12 flex">

                    <div
                        className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg registerBg">
                    </div>

                    <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                        <h3 className="pt-4 text-2xl text-center">Create an Account!</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                            <div className="mb-4 md:flex md:justify-between">
                                <div className="mb-4 md:mr-2 md:mb-0">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" >
                                        First Name
                                    </label>
                                    <input
                                        className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline
                                        ${errors.FirstName && "border-red-500"}
                                        `}
                                        id="firstName"
                                        type="text"
                                        placeholder="First Name"
                                        {...register("FirstName",
                                            {
                                                required: "Must provide first name ", minLength: {
                                                    value: 2, message: "Must be at least 2 characters"
                                                }, maxLength: {
                                                    value: 30, message: "Must be at most 30 characters"
                                                }, pattern: {
                                                    value: /^[A-Za-z]+$/i, message: "Must be only letters"
                                                }
                                            })}
                                    />
                                    {errors.FirstName && <p className="text-xs italic text-red-500">{errors.FirstName.message}</p>}
                                </div>
                                <div className="md:ml-2">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" >
                                        Last Name
                                    </label>
                                    <input
                                        className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline capitalize
                                        ${errors.LastName && "border-red-500"}
                                        `}
                                        id="lastName"
                                        type="text"
                                        placeholder="Last Name"
                                        {...register("LastName",
                                            {
                                                required: {
                                                    value: true,
                                                    message: "Must provide last name"
                                                }, minLength: {
                                                    value: 2,
                                                    message: "Must be at least 2 characters"
                                                },
                                                maxLength: {
                                                    value: 15,
                                                    message: "Must be at most 15 characters"
                                                },
                                                pattern: {
                                                    value: /^[A-Za-z]+$/i,
                                                    message: "Must be only letters"
                                                }
                                            })}

                                    />
                                    {errors.LastName && <p className="text-xs italic text-red-500">{errors.LastName.message}</p>}
                                </div>
                            </div>
                            <div className="mb-4 md:flex md:justify-between">

                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-bold text-gray-700" >
                                    Email
                                </label>
                                <input
                                    className={`w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline
                                    ${errors.Email ? "border-red-500" : "border-gray-200"}
                                    `}
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                    {...register("Email", {
                                        required: "must provide a valid Email",
                                        maxLength: {
                                            value: 100, message: "Must be at most 30 characters"
                                        },
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Must be a valid email"
                                        }
                                    })}

                                />
                                {errors.Email && <p className="text-xs italic text-red-500">{errors.Email.message}</p>}
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-bold text-gray-700" >
                                    UserName
                                </label>
                                <input
                                    className={`w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline
                                    ${errors.UserName ? "border-red-500" : "border-gray-200"}
                                    `}
                                    id="UserName"
                                    type="username"
                                    placeholder="UserName"
                                    {...register("UserName", {
                                        required: "must provide a valid Username",
                                        minLength: {
                                            value: 5, message: "Must be at least 5 characters"
                                        },
                                        maxLength: {
                                            value: 30, message: "Must be at most 30 characters"
                                        },

                                    })}

                                />
                                {errors.UserName && <p className="text-xs italic text-red-500">{errors.UserName.message}</p>}
                            </div>
                            <div className="mb-4 md:flex md:justify-between">
                                <div className="mb-4 md:mr-2 md:mb-0">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" >
                                        Password
                                    </label>
                                    <input
                                        className={`w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline
                                        
                                        ${errors.Password && "border-red-500"}`}

                                        id="password"
                                        type="password"
                                        placeholder="******************"
                                        {...register("Password", {
                                            required: {
                                                value: true, message: "Must provide a password"
                                            }, minLength: {
                                                value: 8, message: "Must be at least 8 characters"
                                            }, maxLength: {
                                                value: 16, message: "Must be at most 16 characters"
                                            }
                                        })}

                                    />
                                    {errors.Password && <p className="text-xs italic text-red-500">{errors.Password.message}</p>}
                                </div>
                                <div className="md:ml-2">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" >
                                        Confirm Password
                                    </label>
                                    <input
                                        className={`w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline
                                        ${errors.ConfirmPassword && "border-red-500"}
                                        `}
                                        id="c_password"
                                        type="password"
                                        placeholder="******************"
                                        {...register("ConfirmPassword", {
                                            required: {
                                                value: true, message: "you must confirm your password"
                                            }, validate: {
                                                value: (value) => value === watch("Password") || "The passwords do not match",
                                            }
                                        })} />
                                    {errors.ConfirmPassword && <p className="text-xs italic text-red-500">{errors.ConfirmPassword.message}</p>}
                                </div>
                            </div>
                            <div className="mb-6 text-center">
                                <button
                                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                    type="submit"

                                >
                                    Register Account

                                </button>
                            </div>
                            <hr className="mb-6 border-t" />
                            {/* //! forgot password 
                            <div className="text-center">
                                <a
                                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                    href="#"
                                >
                                    Forgot Password?
                                </a>
                            </div> */}
                            <div className="text-center">
                                <Link
                                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                    to="/login"
                                >
                                    Already have an account? Login!
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register