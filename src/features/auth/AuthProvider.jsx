import { useReducer } from "react";
import { createContext } from "react";
import {jwtDecode} from 'jwt-decode';

const token = localStorage.getItem("access_token") || null;
const decodedUser = token ? jwtDecode(token) : null;

const initialState={
    access_token: token,
    user:decodedUser
}

const reducer=(state,action)=>{
    switch(action.type){
        case 'REGISTER':
        case "LOGIN": {
            const token = action.payload;
            const user = jwtDecode(token);
            localStorage.setItem("access_token", token);
            localStorage.setItem("user", JSON.stringify(user));

            return { access_token: token, user };

            }

        case 'LOGOUT':
            localStorage.removeItem('access_token')
            localStorage.removeItem('user')
            return {access_token: null,user:null}
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