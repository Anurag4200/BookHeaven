import React, { createContext, useContext, useState } from 'react'

export const AuthContext = createContext()
export default function AuthProvider({children}){
    const initialAuthUser=localStorage.getItem("User")
    const [authUser,setAuthUser]=useState(initialAuthUser?JSON.parse(initialAuthUser):null)
    return (
        <AuthContext.Provider value={[authUser,setAuthUser]}>
            {children}
        </AuthContext.Provider>
    )
    

    
}
export const useAuth=()=>useContext(AuthContext)
    
    


// isko humne is liye banaya hai taki user jo login hai use globally use kar paye
