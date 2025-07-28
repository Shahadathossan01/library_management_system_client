import { useCallback, useContext, useMemo } from "react"
import { deleteUserApi } from "../../../api/user"
import { UserContext } from "../UserProvider"
import { useAuthContext } from "../../auth/hooks/useAuthContext"

export const useUserContext=()=>{
    const {state,dispatch}=useContext(UserContext)
    const {access_token}=useAuthContext()
    const users=useMemo(()=>{
        return state.users
    },[state.users])

    const pagination=useMemo(()=>{
        return state.pagination
    },[state.pagination])

     const updatePage=useCallback((page)=>{

            dispatch({
                type:'UPDATE_PAGE',
                payload:page
            })
        },[dispatch])

    const updateSearchValue=(value)=>{
        if(value==='all'){
            dispatch({
                type:'UPDATE_SEARCH_VALUE',
                payload:''
            })
            return;
        }

        dispatch({
            type:'UPDATE_SEARCH_VALUE',
            payload:value
        })
    }

    const deleteUser=async({id})=>{
        try{
            const result=await deleteUserApi({id,token:access_token})

            dispatch({
                type: 'DELETE_USER',
                payload:result
            })

            return result;
        }catch(error){
            console.log(error)
        }
    }


    return {
        users,
        pagination,
        updatePage,
        updateSearchValue,
        deleteUser,
        isDeleted:state.isDeleted
    }
}