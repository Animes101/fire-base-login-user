import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import PropTypes from 'prop-types';
import auth from './../firebase.console';

export const AuthContext=createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user ,setUser]=useState(null);
    const [loading ,setLoading]=useState(true);


    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const loginUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut=()=>{
        setLoading(true);
       return  signOut(auth)

    }

useEffect(()=>{

  const UnSubscrib=  onAuthStateChanged(auth,cureentUser=>{
      setUser(cureentUser);
      setLoading(false);

        console.log('current user',cureentUser);
    })

    return ()=>{
        UnSubscrib();
    }
},[])

const loginGoogle=()=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
}

const authInfo={user,createUser,loginUser,logOut,loading,loginGoogle}

  return <AuthContext.Provider value={authInfo}>
    {children}
    </AuthContext.Provider>;
};


export default AuthProvider;

AuthProvider.propsType={
    children:PropTypes.node,

}

