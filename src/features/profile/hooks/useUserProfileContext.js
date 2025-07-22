import { useContext, useMemo } from "react"
import { ProfileContext } from "../ProfileProvider"
import { updateProfileApi } from "../../../api/user"

export const useUserProfileContext=()=>{
    const {state,dispatch}=useContext(ProfileContext)

    const profileData=useMemo(()=>{
        return state.profileData
    },[state.profileData])

    const updateProfile=async({formData})=>{
        try{
            const res=await updateProfileApi({formData})

            dispatch({
                type:'UPDATE_PROFILE',
                payload:res
            })
        }catch(error){
            console.log(error)
        }
    }

    const uploadProfileImage=async({formData})=>{
        try{
            const res=await updateProfileApi({formData})

            dispatch({
                type:'UPDATE_PROFILE',
                payload:res
            })
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
