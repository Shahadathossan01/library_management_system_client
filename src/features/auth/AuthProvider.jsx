import { useReducer } from "react";
import { createContext } from "react";
import {jwtDecode} from 'jwt-decode';

const initialState={
    access_token: localStorage.getItem('access_token') || null,
}

const reducer=(state,action)=>{
    switch(action.type){
        case 'REGISTER':
        case 'LOGIN':
            localStorage.setItem('access_token',action.payload)
            localStorage.setItem('user',JSON.stringify(jwtDecode(action.payload)))
            return {access_token:action.payload}

        case 'LOGOUT':
            localStorage.removeItem('access_token')
            localStorage.removeItem('user')
            return {access_token: null}
        default:
            throw new Error('Invalid action type')
    }
}

export const AuthContext=createContext({state: initialState,dispatch:()=>{}})

export const AuthProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState)

    return (
        <AuthContext.Provider value={{state,dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}