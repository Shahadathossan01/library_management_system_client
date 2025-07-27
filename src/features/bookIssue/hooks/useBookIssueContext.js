import { useCallback, useContext, useMemo } from "react"
import { BookIssueContext } from "../BookIssueProvider"
import { createBookIssue, deleteBookIssueApi, getSingleBookIssue, updateStatusApi } from "../../../api/bookIssueApi"
import axios from "axios"
import { useAuthContext } from "../../auth/hooks/useAuthContext"

export const useBookIssueContext=()=>{
    const {state,dispatch}=useContext(BookIssueContext)

    const {access_token,user}=useAuthContext()

    const create=async({bookId,status='pending'})=>{
        try{
            const result= await createBookIssue({bookId,status,token:access_token})
            
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
            const result=await getSingleBookIssue({id,token:access_token})

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
            const res=await deleteBookIssueApi({id,token:access_token})
 
            dispatch({
                type:'DELETE_BOOKISSUE',
                payload:res
            })
            
            
        }catch(error){
            console.log(error)
        }
    }

    const updateStatus = async ({ id, status }) => {
  try {
    const res = await updateStatusApi({ id, status ,token:access_token});

    // Assuming response always returns updated data
    if (res?.data?.status === status) {
      dispatch({
        type: 'UPDATE_STATUS',
        payload: res
      });
      return { success: true, status }; // ✅ return status for toast
    } else {
      return { success: false, message: 'Status not updated' };
    }
  } catch (error) {
    console.log(error);
    return { success: false, message: 'Something went wrong' };
  }
};

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
        updateStatus,
        updateSearchValue

    }
}