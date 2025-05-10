import { useCallback, useContext, useEffect, useState } from "react"
import { BookContext } from "../BookProvider"
import { getBooks } from "../../../api/bookApi"

export const useFetchBooks=()=>{
    const [isLoading,setIsLoading]=useState(false)
    const [error,setError]=useState(null)
    const {state,dispatch}=useContext(BookContext)

    const {page,limit,sort_by,sort_type,search}=state

    const fetchBooks=useCallback(async()=>{
        try{
            setIsLoading(true)
            const params={
                page,
                limit,
                sort_by,
                sort_type,
                search
            }

            const result=await getBooks(params)

            dispatch({
                type: 'GETBOOKS',
                payload:{
                    books: result.data,
                    pagination: result.pagination
                }
            })



            setError(null)
        }catch(error){
            setError(error)
        }finally{
            setIsLoading(false)
        }
    },[page,limit,search,sort_by,sort_type,dispatch])


    useEffect(()=>{
        fetchBooks()
    },[fetchBooks])

    return{
        isLoading,
        error,
    }
}
