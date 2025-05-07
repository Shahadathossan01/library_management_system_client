import { useReducer } from "react";
import { createContext } from "react";

const initialState={
    access_token: localStorage.getItem('access_token') || null,
}

const reducer=(state,action)=>{
    switch(action.type){
        case 'REGISTER':
        case 'LOGIN':
            localStorage.setItem('access_token',action.payload)
            return {access_token:action.payload}

        case 'LOGOUT':
            console.log('logout')
            localStorage.removeItem('access_token')
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