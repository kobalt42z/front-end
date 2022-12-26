import { createContext, useContext, useState } from "react";

export const GlobalContext = createContext();

export default ({ children }) => {
    const [User, setUser] = useState("yo")
    const [Token, setToken] = useState(null)



    const GlobalStorage = {
        User:[User, setUser],
        Token: {Token, setToken}
    }

    return <GlobalContext.Provider value={GlobalStorage}>{children}</GlobalContext.Provider>
}


/*
*   //? depack it to User
*   const {User} =React.useContext(GlobalContext)
*   //? depack User to setUser like  classic useState
*   const [user,setUser]= User
 
 */