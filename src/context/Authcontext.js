import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth';
import app from '../firebase/Firebase'

export const AuthContext = createContext();
const auth = getAuth();

const Authcontext = ({children}) => {
    const [user,setuser] = useState(null);
    const [loding,setloding] = useState(true)

    const crateUser =(email,pass)=>{
        setloding(true)
        return createUserWithEmailAndPassword(auth,email,pass)
    }

    const signUser = (email,pass)=>{
        setloding(true)
        return signInWithEmailAndPassword(auth,email,pass)
    }

    const logoutUser =()=>{
        setloding(true)
        return signOut(auth)
    }

    const updateUser = (profile)=>{
        return updateProfile(auth.currentUser, profile)
    }

    useEffect(()=>{
        const unscribe = onAuthStateChanged(auth, currentUser=>{
            setuser(currentUser);
            setloding(false)
        })
        return ()=> unscribe()
    },[])
 
    const authInfo = {user, crateUser, signUser, logoutUser,
         updateUser, loding};
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default Authcontext;