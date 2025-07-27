import { useCallback, useContext, useEffect, useState } from "react"
import { ProfileContext } from "../ProfileProvider"
import { getUserProfile } from "../../../api/user"
import { useAuthContext } from "../../auth/hooks/useAuthContext"

export const useFetchUserProfile=()=>{
    const [isLoading,setIsLoading]=useState(false)
    const {access_token,user}=useAuthContext()
    const [error,setError]=useState(null)
    const {state,dispatch}=useContext(ProfileContext)

    const fetchUserProfile=useCallback(async()=>{
         const _triggerRefetch = state.updatedData;

        try{
            setIsLoading(true)
            const result=await getUserProfile({token:access_token,id:user?._id})
            
            dispatch({
                type:'GET_PROFILEDATA',
                payload: result
            })

            setIsLoading(false)
        }catch(error){
            setError(error)
        }finally{
            setIsLoading(false)
        }
    },[dispatch,state.updatedData])

    useEffect(()=>{
        fetchUserProfile()
    },[fetchUserProfile])

    return {
        isLoading,
        error
    }
}

