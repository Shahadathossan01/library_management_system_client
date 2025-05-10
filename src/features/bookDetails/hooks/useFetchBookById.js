import { useCallback, useContext, useEffect, useState } from "react"
import { BookDetailsContext } from "../BookDetailsProvider"
import { getBookById } from "../../../api/bookApi"

export const useFetchBookById=({id})=>{
    const [isLoading,setIsLoading]=useState(false)
    const [error,setError]=useState(null)
    const {state,dispatch}=useContext(BookDetailsContext)

    const fetchBook=useCallback(async()=>{
        try{
            setIsLoading(true)
            const result=await getBookById({id})

            dispatch({
                type: 'GET_SINGLE_BOOK',
                payload: result.data
            })
            setIsLoading(false)
        }catch(error){
            setError(error)
        }finally{
            setIsLoading(false)
        }
    },[id,dispatch])

    useEffect(()=>{
        fetchBook()
    },[fetchBook])

    return {
        isLoading,
        error,
        book:state.book
    }
}