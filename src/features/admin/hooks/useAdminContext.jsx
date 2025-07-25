import { useCallback, useContext, useMemo } from "react"
import { AdminContext } from "../AdminProvider"
import axios from "axios"
import { deleteUserApi } from "../../../api/user"

export const useAdminContext=()=>{
    const {state,dispatch}=useContext(AdminContext)

    const users=useMemo(()=>{
        return state.users
    },[state.users])

    const pagination=useMemo(()=>{
        return state.pagination
    },[state.pagination])

     const updatePage=useCallback((page)=>{
        console.log(page)
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
            const result=await deleteUserApi({id})

            dispatch({
                type: 'DELETE_USER',
                payload:result
            })
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