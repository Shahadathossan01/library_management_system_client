import { useCallback, useContext, useMemo } from "react"
import { BookIssueContext } from "../BookIssueProvider"
import { createBookIssue, deleteBookIssueApi, getSingleBookIssue, updateStatusApi } from "../../../api/bookIssueApi"
import axios from "axios"

export const useBookIssueContext=()=>{
    const {state,dispatch}=useContext(BookIssueContext)

    const create=async({bookId,status='pending'})=>{
        try{
            const result= await createBookIssue({bookId,status})
            
            dispatch({
                type: 'CREATE_BOOKISSUE',
                payload: result
            })

            return result;

        }catch(error){
            console.log(error)
        }
    }

    const getBookIssue=async({id})=>{
        try{
            const result=await getSingleBookIssue({id})

            dispatch ({
                type:'GET_SINGLE_BOOKISSUE',
                payload:result
            })

        }catch(error){
            console.log(error)
        }
    }

    const bookIssues=useMemo(()=>{
        return state.bookIssues
    },[state.bookIssues])

    const allBookIssuesForAdminData=useMemo(()=>{
        return state.allBookIssuesForAdminData
    },[state.allBookIssuesForAdminData])

    const pagination=useMemo(()=>{
        return state.pagination
    },[state.pagination])

    const allBookIssuesForAdminPagination=useMemo(()=>{
        return state.allBookIssuesForAdminPagination
    },[state.allBookIssuesForAdminPagination])

    const updatePage=useCallback((page)=>{
        dispatch({
            type:'UPDATE_PAGE',
            payload:page
        })
    },[dispatch])

    const deleteBookIssue=async({id})=>{

        try{
            const res=await deleteBookIssueApi({id})
 
            dispatch({
                type:'DELETE_BOOKISSUE',
                payload:res
            })
            
            
        }catch(error){
            console.log(error)
        }
    }

    const updateStatus=async({id})=>{

        try{
            const res=await updateStatusApi({id})

            dispatch({
                type: 'UPDATE_STATUS',
                payload: res
            })
        }catch(error){
            console.log(error)
        }
    }

    return {
        create,
        getBookIssue,
        bookIssue:state.bookIssue,
        bookIssues,
        pagination,
        updatePage,
        deleteBookIssue,
        isDeleteBookIssue:state.isDeleteBookIssue,
        allBookIssuesForAdminData,
        allBookIssuesForAdminPagination,
        updateStatus

    }
}