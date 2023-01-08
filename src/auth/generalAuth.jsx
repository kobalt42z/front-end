import { Spinner } from 'flowbite-react';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { EXP_KEY, TOKEN_KEY, VERYFY_TOKEN } from '../constant/constant'
import { apiGet } from '../services/services'
import { GlobalContext } from '../contexts/context'

export const GeneralAuth = (props) => {
    const navigate = useNavigate();
    const { User } = React.useContext(GlobalContext)
    const [user, setUser] = User
    const [Loading, setLoading] = useState(true);


    
    const verifyToken = async () => {
        try {
            //check if token exist
            if (localStorage[TOKEN_KEY] === null) { navigate('/login', { state: { authFaild: true } }) };
           
            //check if token is valid
            let resp = await apiGet(VERYFY_TOKEN)
            console.log(resp.data.decodedToken.exp);
            localStorage.setItem(EXP_KEY, resp.data.decodedToken.exp)
            //if token is invalid navigate to login page with state that toggle the failure to auth message
            if (!resp.status === 200) {
                navigate('/login', { state: { authFaild: true } }) 
            }
            setLoading(false)
           
            //if token is invalid navigate to login page with state that toggle the failure to auth message
        } catch (error) {
            navigate('/login', { state: { authFaild: true } }) 
        }


    }
    useEffect(() => {
        verifyToken()

    }, []);
    return (
        <>{Loading ?
            <div className="flex justify-center items-center h-[100vh]">
                <Spinner color='failure' size="xl" />
            </div> : props.children

        }
        </>
    )
}
