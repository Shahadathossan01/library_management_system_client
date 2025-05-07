import { useCallback, useContext, useMemo } from "react"
import { BookContext } from "../BookProvider"

export const useBookContext=()=>{
    const {state,dispatch}=useContext(BookContext)

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
    return {
        books,
        pagination,
        updatePage
    }
}