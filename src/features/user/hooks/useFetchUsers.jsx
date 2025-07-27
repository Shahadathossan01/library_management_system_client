import { useCallback, useContext, useEffect, useState } from "react"
import {UserContext } from "../UserProvider"
import { getAllUsers } from "../../../api/user"
import { useAuthContext } from "../../auth/hooks/useAuthContext"

export const useFetchUsers=()=>{
    const [isLoading,setIsLoading]=useState(false)
    const {access_token,user}=useAuthContext()
    const [error,setError]=useState(null)

    const {state,dispatch}=useContext(UserContext)

    const {page,limit,sort_by,sort_type,search,isDeleted}=state

    const fetchUsers=useCallback(async()=>{
        try{
            setIsLoading(true)
            const params={
                page,
                limit,
                sort_by,
                sort_type,
                search
            }

            const result=await getAllUsers({params,token:access_token})


            // ✅ If users are empty AND page > 1 → go to previous page
            
            if (result.data.length === 0 && page > 1) {
                dispatch({
                type: 'UPDATE_PAGE',
                payload: page - 1,
                })
                return // 👈 Stop current dispatch, next useEffect will refetch
            }

            dispatch({
                type:'GET_ALL_USERS',
                payload:{
                    users:result.data,
                    pagination:result.pagination
                }
            })

            setError(null)
        }catch(error){
            setError(error)
        }finally{
            setIsLoading(false)
        }
    },[page,limit,search,sort_by,sort_type,dispatch,isDeleted])

    useEffect(()=>{
        fetchUsers()
    },[fetchUsers])

    return {
        isLoading,
        error
    }
}