import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth =()=>{
    return useContext(AuthContext);
}
export function AuthContextProvider ({children}){
    const [authUser,setAuthUser] = useState(JSON.parse(localStorage.getItem('admin')) || null)

    return (
        <AuthContext.Provider value={{authUser,setAuthUser}}>
            {children}
        </AuthContext.Provider>
    )
}

