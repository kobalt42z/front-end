import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { EXP_KEY, TOKEN_KEY, VERYFY_TOKEN } from '../constant/constant'
import { GlobalContext } from '../contexts/context'
import { apiGet } from '../services/services'

const AlredyLogged = () => {
    const { User } = React.useContext(GlobalContext)
    const [user, setUser] = User
    const navigate = useNavigate()


    const verifyToken = async () => {
        try {
           
            
            //check if token is valid
            let resp = await apiGet(VERYFY_TOKEN)
         
            // if user is already logged in navigate to home page
            if (resp.status === 200) {
                navigate('/home') 
            }
            
           
           
        } catch (error) {
            console.log(error);
        }


    }

    useEffect(() => {
        verifyToken()

    }, [])

        return (
          <>
          
          </>
        )
    }
    export default AlredyLogged