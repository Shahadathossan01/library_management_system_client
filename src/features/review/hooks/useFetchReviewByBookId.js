import { useCallback, useContext, useEffect, useState } from "react"
import { ReviewContext } from "../ReviewProvider"
import { getReviewById } from "../../../api/reviewApi"

export const useFetchReviewByBookId=({id})=>{
    const [isLoading,setIsLoading]=useState(false)
    const [error,setError]=useState(null)

    const {state,dispatch}=useContext(ReviewContext)

    const {deletedData=null,updatedData=null,createData=null}=state


    const fetchReviw=useCallback(async()=>{
        try{
            setIsLoading(true)
            const result=await getReviewById({id,page:state.page,limit:state.limit})
            dispatch({
                type: 'GET_REVIEWS_BY_BOOKID',
                payload: {
                    reviews: result?.data,
                    pagination: result?.pagination
                }
            })
            setError(null)
        }catch(error){
            setError(error)
        }finally{
            setIsLoading(false)
        }
    },[id,state.page,state.limit,dispatch])

    useEffect(()=>{
        fetchReviw()
    },[fetchReviw,updatedData,deletedData,createData])

    return {
        isLoading,
        error
    }
}