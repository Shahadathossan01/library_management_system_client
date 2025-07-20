import { useCallback, useContext, useEffect, useState } from "react"
import { getBookById } from "../../../api/bookApi"
import { BookIssueContext } from "../BookIssueProvider"


export const useFetchBookById=({id})=>{
    const [isLoading,setIsLoading]=useState(false)
    const [error,setError]=useState(null)

    const {state,dispatch}=useContext(BookIssueContext)

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