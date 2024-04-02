import { createContext, useState } from "react";
import {createUserWithEmailAndPassword } from "firebase/auth";
import PropTypes from 'prop-types';
import auth from './../firebase.console';

export const AuthContext=createContext(null);

const AuthProvider = ({children}) => {

    const [user ,setUser]=useState(null);


    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const authInfo={createUser}
    
  return <AuthContext.Provider value={authInfo}>
    {children}
    </AuthContext.Provider>;
};


export default AuthProvider;

AuthProvider.propsType={
    children:PropTypes.node,

}

