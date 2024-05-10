import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null)
    const [loading, setLoading]= useState(true)

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)

        
    }
    const updateUser=(name,image)=>{
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: image
        })
    }
    const authInfo={user,loading, createUser, updateUser}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;