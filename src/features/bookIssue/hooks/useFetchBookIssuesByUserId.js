import { useCallback, useContext, useEffect, useState } from "react"
import { BookIssueContext } from "../BookIssueProvider"
import { getBookIssuesByUserId } from "../../../api/bookIssueApi"

export const useFetchBookIssuesByUserId=()=>{
    const [isLoading,setIsLoading]=useState(false)
    const [error,setError]=useState(null)
    const {state,dispatch}=useContext(BookIssueContext)

    const {page,limit,sort_by,sort_type,isDeleteBookIssue}=state

    const fetchBookIssues=useCallback(async()=>{
        
        try{
            setIsLoading(true)
            const params={
                page,
                limit,
                sort_by,
                sort_type
            }

            const result=await getBookIssuesByUserId({params})

           
            dispatch({
                type: 'GET_ALL_BOOKISSUE',
                payload:{
                    bookIssues: result.data,
                    pagination: result.pagination
                }
            })

            setError(null)

        }catch(error){
            setError(error)
        }finally{
            setIsLoading(false)
        }

    },[page,limit,sort_by,sort_type,dispatch,isDeleteBookIssue])

    useEffect(()=>{
        fetchBookIssues()
    },[fetchBookIssues])

    return{
        isLoading,
        error,
        bookIssues:state.bookIssues
    }
}

