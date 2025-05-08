import { useCallback, useContext, useMemo } from "react"
import { ReviewContext } from "../ReviewProvider"
import { createReview, deleteReview, updateReview } from "../../../api/reviewApi"

export const useReviewContext=()=>{
    const {state,dispatch}=useContext(ReviewContext)

    const reviews=useMemo(()=>{
        return state.reviews
    },[state.reviews])


    const pagination=useMemo(()=>{
        return state.pagination
    },[state.pagination])

    const updatePage=useCallback((page)=>{
        dispatch({
            type: 'UPDATE_PAGE',
            payload: page
        })
    },[dispatch])


    const update=useCallback(async({id,review,status})=>{
        const result=await updateReview({id,content:review,status})
        dispatch({
            type: 'UPDATE_REVIEW',
            payload: result
        })
    },[dispatch])

    const deleteReviewItem=useCallback(async({id})=>{
        const result=await deleteReview({id})

        dispatch({
            type: 'DELETE_REVIEW',
            payload: result
        })
    },[dispatch])

    const create=useCallback(async({id,content})=>{
        const result=await createReview({id,content})

        dispatch({
            type: 'CREATE_VEVIEW',
            payload: result
        })
    },[dispatch])


    return {
        reviews,
        pagination,
        updatePage,
        update,
        deleteReviewItem,
        create,
    }
}