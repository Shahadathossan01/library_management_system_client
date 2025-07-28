import { useCallback, useContext, useMemo } from "react"
import { BookContext } from "../BookProvider"
import { createBookApi, deleteBookApi, editBookApi } from "../../../api/bookApi"
import { useAuthContext } from "../../auth/hooks/useAuthContext"

export const useBookContext=()=>{
    const {state,dispatch}=useContext(BookContext)
    const {access_token}=useAuthContext()
    const books=useMemo(()=>{
        return state.books
    },[state.books])

    const pagination=useMemo(()=>{
        return state.pagination
    },[state.pagination])

    const updatePage=useCallback((page)=>{
        dispatch({
            type: 'UPDATE_PAGE',
            payload: page
        })
    },[dispatch])

    const  deleteBook=async({id})=>{
        try{
            const result=await deleteBookApi({id,token:access_token})

            dispatch({
                type:'DELETE_BOOK',
                payload:result
            })
        }catch(error){
            error
        }
    }

    const createBook=async({formData})=>{
        try{
            const result=await createBookApi({formData,token:access_token})

            dispatch({
                type:'CREATE_BOOK',
                payload:result
            })
        }catch(error){
            error
        }
    }

    const editBook=async({id,formData})=>{
        console.log('id',id)
        try{
            const result=await editBookApi({id,formData,token:access_token})
            console.log(result)
            dispatch({
                type:'EDIT_BOOK',
                payload:result
            })

        }catch(error){
            console.log(error)
        }
    }

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
        books,
        pagination,
        updatePage,
        deleteBook,
        createBook,
        editBook,
        updateSearchValue
    }
}