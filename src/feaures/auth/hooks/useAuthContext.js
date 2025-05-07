import { useContext } from "react"
import { AuthContext } from "../AuthProvider"
import { loginUser, registerUser } from "../../../api/authApi"

export const useAuthContext=()=>{
    const {state,dispatch}=useContext(AuthContext)

    const register=async({username,email,password})=>{
        try{
            const access_token= await registerUser({username,email,password})

            dispatch({
                type: 'REGISTER',
                payload: access_token
            })

            return {success:true}
        }catch(error){
            return {success: false, message: error}
        }
    }

    const login=async({email,password})=>{
        try{
            const access_token=await loginUser({email,password})
            dispatch({
                type:'LOGIN',
                payload: access_token
            })
            return {success:true}
        }catch(error){
            return {success: false,message: error}
        }
    }

    const logout=()=>{
        dispatch({
            type: 'LOGOUT'
        })
    }

    return {
        state,
        register,
        login,
        logout
    }
}