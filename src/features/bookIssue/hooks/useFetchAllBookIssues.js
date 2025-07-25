import { useCallback, useContext, useEffect, useState } from "react"
import { BookIssueContext } from "../BookIssueProvider"
import { getAllBookIssues } from "../../../api/bookIssueApi"

export const useFetchAllBookIssues=()=>{
    const [isLoading,setIsLoading]=useState(false)
    const [error,setError]=useState(null)

    const {state,dispatch}=useContext(BookIssueContext)

    const {page,limit,sort_by,sort_type,isDeleteBookIssue,isUpdateStatus}=state

    const fetchAllBookIssues=useCallback(async()=>{
        try{
            setIsLoading(true)
            const params={
                page,
                limit,
                sort_by,
                sort_type
            }

            const result=await getAllBookIssues(params)

            if (result?.data.length === 0 && page > 1) {
                dispatch({
                type: 'UPDATE_PAGE',
                payload: page - 1,
                })
                return // 👈 Stop current dispatch, next useEffect will refetch
            }

            dispatch({
                type:'ALL_BOOK_ISSUES_FOR_ADMIN',
                payload:{
                    data:result.data,
                    pagination:result.pagination
                }
            })

            setError(null)
        }catch(error){
            console.log(error)
        }finally{
            setIsLoading(false)
        }
    },[page,limit,sort_by,sort_type,dispatch,isDeleteBookIssue,isUpdateStatus])


    useEffect(()=>{
        fetchAllBookIssues()
    },[fetchAllBookIssues])

    return{
        isLoading,
        error
    }
}
