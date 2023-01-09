import React, { useEffect, useState } from 'react'
import Register from './register'
import { useForm } from 'react-hook-form'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { apiPost } from '../services/services';
import { LOGIN_URL, REGISTER_URL, TOKEN_KEY, USER_KEY } from '../constant/constant';
import { Alert } from 'flowbite-react';
import { MustSignIn } from '../components/Alerts/mustSignIn';
import { GlobalContext } from '../contexts/context';
import { WrongCred } from '../components/loginModal/WrongCred';
import AlredyLogged from '../auth/alredyLogged';

const WelcomBack = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const { User } = React.useContext(GlobalContext)
    const [user, setUser] = User
    const [Wrong, setWrong] = useState(false);

    const  logout = () => {
        localStorage.removeItem(TOKEN_KEY)
        localStorage.removeItem(USER_KEY)
      }
      
    const closeModal = () => {
        setWrong(false)
    }
    async function login(data) {
        console.log(data)
        try {
            let resp = await apiPost(LOGIN_URL, data);
            console.log(resp);
            localStorage.setItem(TOKEN_KEY, resp.token);
            localStorage.setItem(USER_KEY, JSON.stringify(resp.user));
            setTimeout(logout, 1000 * 15 );
            setUser(resp.user)
            navigate('/home');
            
        } catch (err) {
            if (err === 401) {
                console.log("wrong credentials");
                setWrong(true)
            }
            console.log(err);
        }


    };


    // save the user to local storage when state updates
 

    useEffect(() => {


    }, []);
    return (
        <>
            <AlredyLogged />
            <div className="container mx-auto ">
                {Wrong && <WrongCred closeModal={closeModal} />}
                {location.state?.authFaild && <MustSignIn />}

                <div className="flex justify-center px-6 my-12">
                    <div className="w-full xl:w-3/4 lg:w-11/12 flex">

                        <div
                            className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg wbBg"

                        ></div>

                        <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
                            <h3 className="pt-4 text-2xl text-center">Welcome Back!</h3>
                            <form onSubmit={handleSubmit(login)} className="px-8 pt-6 pb-8 mb-4 bg-white rounded" >
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" >
                                        Username/Email
                                    </label>
                                    <input
                                        className={`w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline
                                        ${errors.account && 'border-red-500'}`}
                                        id="username"
                                        type="text"
                                        placeholder="Username"

                                        {...register("account", {
                                            required: {
                                                value: true,
                                                message: "Please enter a username/email"
                                            },
                                            minLength: {
                                                value: 3,
                                                message: "the username/email is not valid"
                                            },
                                            maxLength: {
                                                value: 50,
                                                message: "the username/email is too long"
                                            },

                                        })}

                                    />
                                    {errors.account && <span className="text-xs italic text-red-500">{errors.account.message}</span>}
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" >
                                        Password
                                    </label>
                                    <input
                                        className={`w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline ${errors.password && 'border-red-500'
                                            }`}
                                        id="password"
                                        type="password"
                                        placeholder="******************"
                                        {...register("password", {
                                            required: {
                                                value: true,
                                                message: "Please provid password"
                                            },
                                            minLength: {
                                                value: 8,
                                                message: "password must be at least 8 characters"
                                            },
                                            maxLength: {
                                                value: 16,
                                                message: "password can be at most 16 characters"
                                            },
                                        })}
                                    />

                                    {errors.password && <span className="text-xs italic text-red-500">{errors.password.message}</span>}

                                </div>
                                {/* <div className="mb-4">
                                <input className="mr-2 leading-tight" type="checkbox" id="checkbox_id" />
                                <label className="text-sm" >
                                    Remember Me
                                </label>
                            </div> */}
                                <div className="mb-6 text-center">
                                    <button
                                        className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                        type="submit"
                                    >
                                        Sign In
                                    </button>
                                </div>
                                <hr className="mb-6 border-t" />
                                <div className="text-center">
                                    <Link
                                        className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                        to={"/register"}
                                    >
                                        Create an Account!
                                    </Link>
                                </div>


                                <div className="text-center">
                                    <Link
                                        className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                        to={"/forgot"}
                                    >
                                        Forgot Password?
                                    </Link>
                                </div>
                                <div className="text-center capitalize">
                                    <Link
                                        className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                        to={"/landing"}
                                    >
                                        go back
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WelcomBack