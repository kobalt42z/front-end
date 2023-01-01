import { Spinner } from 'flowbite-react';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { TOKEN_KEY, VERYFY_TOKEN } from '../constant/constant'
import { apiGet } from '../services/services'

export const GeneralAuth = (props) => {
    const navigate = useNavigate();
    const [Loading, setLoading] = useState(true);
    const verifyToken = async () => {
       
        try {

            if (localStorage[TOKEN_KEY]=== null) 
                { navigate('/login', { state: { authFaild: true } }) };

            let resp = await apiGet(VERYFY_TOKEN)
            if (!resp.status === 200) {
                navigate('/login', { state: { authFaild: true } }) //! login page will recive state that toggle the  fauilure to auth  message 
            }
            setLoading(false)
        } catch (error) {
            navigate('/login', { state: { authFaild: true } }) //! login page will recive state that toggle the  fauilure to auth  message 
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
