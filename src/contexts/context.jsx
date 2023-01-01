import { createContext, useContext, useState } from "react";

export const GlobalContext = createContext();

export default ({ children }) => {
    const [User, setUser] = useState("yo")
    


    const GlobalStorage = {
        User:[User, setUser],
       
    }

    return <GlobalContext.Provider value={GlobalStorage}>{children}</GlobalContext.Provider>
}


/*
*   //? depack it to User
*   const {User} = React.useContext(GlobalContext) 
*   //? depack User to setUser like  classic useState
*   const [user,setUser]= User
 
 */

