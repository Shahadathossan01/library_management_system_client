import { useContext, useMemo } from "react"
import { ProfileContext } from "../ProfileProvider"
import { updateProfileApi } from "../../../api/user"
import { useAuthContext } from "../../auth/hooks/useAuthContext"

export const useUserProfileContext=()=>{
    const {state,dispatch}=useContext(ProfileContext)
    const {access_token,user}=useAuthContext()
    const profileData=useMemo(()=>{
        return state.profileData
    },[state.profileData])

    const updateProfile=async({formData})=>{
        try{
            const res=await updateProfileApi({formData,token:access_token,id:user?._id})
            
            if(res?.code === 200){
                dispatch({
                    type:'UPDATE_PROFILE',
                    payload:res
                })

                return {
                    code:res?.code
                }
            }
        }catch(error){
            console.log(error)
        }
    }

    const uploadProfileImage=async({formData})=>{
        try{
            const res=await updateProfileApi({formData,token:access_token,id:user?._id})
            if(res?.code === 200){
                dispatch({
                    type:'UPDATE_PROFILE',
                    payload:res
                })

                return {
                    code:res?.code
                }
            }
        }catch(error){
            console.log(error)
        }
    }

    return {
        profileData,
        updateProfile,
        uploadProfileImage
    }
}
