import { useContext } from "react"
import { AuthContext } from "../AuthProvider"
import { loginUser, registerUser } from "../../../api/authApi"
import { jwtDecode } from "jwt-decode"

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
            const user=jwtDecode(access_token)
            dispatch({
                type:'LOGIN',
                payload: access_token
            })
            return {success:true,user}
        }catch(error){
            return {success: false,message: error}
        }
    }

    const logout=()=>{
        dispatch({
            type: 'LOGOUT'
        })

        return
    }

    return {
        state,
        register,
        login,
        logout,
        access_token:state.access_token,
        user:state.user
    }
}