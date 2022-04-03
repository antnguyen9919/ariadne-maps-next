import { createContext, useEffect, useState } from "react";

import { getAuth, onAuthStateChanged, signInWithEmailAndPassword,signOut } from "firebase/auth";

import '../config/firebase'
const AuthContext = createContext({
    user: null,
    login:()=>{},
    logout:()=>{},
    authReady: false,

});
const auth = getAuth();


export const AuthContextProvider =({children})=>{
    const [user,setUser] =useState(null)
    useEffect(()=>{
            const unsubscribe= onAuthStateChanged(auth,(user)=>{
                if(user){
                    setUser({
                        uid:user.uid,
                        email:user.email,
                        
                    })
                } else {setUser(null)
                }
            })
            return ()=>unsubscribe()
    },[])
    const login=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logout= async()=>{
        setUser(null)
        await signOut(auth)
    }


    

    return (
        <AuthContext.Provider value={{user,login,logout}} >
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext