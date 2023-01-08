import { createContext, useContext, useEffect, useState } from "react";
import { USER_KEY } from "../constant/constant";

export const GlobalContext = createContext();

export default ({ children }) => {

    const [User, setUser] = useState("empty")
    


    const GlobalStorage = {
        User:[User, setUser],
       
    }


    // onload check if user is already logged in 
    // if true load user data from local storage
    useEffect(() => {
        if (localStorage[USER_KEY] !== undefined) {
            console.log(JSON.parse(localStorage[USER_KEY]));
            setUser(JSON.parse(localStorage[USER_KEY]))
            
        }
        
    }, [])

    return <GlobalContext.Provider value={GlobalStorage}>{children}</GlobalContext.Provider>
}


/*
*   //? depack it to User
*   const {User} = React.useContext(GlobalContext) 
*   //? depack User to setUser like  classic useState
*   const [user,setUser]= User
 
 */

