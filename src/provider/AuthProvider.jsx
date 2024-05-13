import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();

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
    const signIn =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const google =()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const loggedOut = async ()=>{
        setLoading(true)
        const {data}= await axios(`${import.meta.env.VITE_API_URL}/logout`,{withCredentials:true})
        console.log(data)
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth, currentUser=>{
             setUser(currentUser);
             console.log('current user', currentUser)
             setLoading(false)
         });
         return()=>{
             return unsubscribe();
         }
     },[])
    const authInfo={user,loading, createUser, updateUser, signIn, google, loggedOut}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;