import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import PropTypes from 'prop-types';
import auth from './../firebase.console';

export const AuthContext=createContext(null);

const AuthProvider = ({children}) => {

    const [user ,setUser]=useState(null);


    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const loginUser=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut=()=>{
       return  signOut(auth)

    }

    const authInfo={user,createUser,loginUser,logOut}
useEffect(()=>{

  const UnSubscrib=  onAuthStateChanged(auth,cureentUser=>{
      setUser(cureentUser);

        console.log('current user',cureentUser);
    })

    return ()=>{
        UnSubscrib();
    }
},[])

  return <AuthContext.Provider value={authInfo}>
    {children}
    </AuthContext.Provider>;
};


export default AuthProvider;

AuthProvider.propsType={
    children:PropTypes.node,

}

