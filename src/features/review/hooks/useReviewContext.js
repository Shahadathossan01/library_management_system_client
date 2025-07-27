import { useCallback, useContext, useMemo } from "react"
import { ReviewContext } from "../ReviewProvider"
import { createReview, deleteReview, updateReview } from "../../../api/reviewApi"
import { useAuthContext } from "../../auth/hooks/useAuthContext"

export const useReviewContext=()=>{
    const {state,dispatch}=useContext(ReviewContext)
    const {access_token}=useAuthContext()
    const reviews=useMemo(()=>{
        return state.reviews
    },[state.reviews])


    const pagination=useMemo(()=>{
        return state.pagination
    },[state.pagination])

    const updatePage = (page) => {
        dispatch({ type: 'UPDATE_PAGE', payload: page });
      };


      const update = async ({ id, review, status }) => {
        const result = await updateReview({ id, content: review, status ,token:access_token});
        dispatch({ type: 'UPDATE_REVIEW', payload: result });
      };

    const deleteReviewItem=useCallback(async({id})=>{
        const result=await deleteReview({id,token:access_token})

        dispatch({
            type: 'DELETE_REVIEW',
            payload: result
        })
    },[dispatch])

    const create=useCallback(async({id,content})=>{
        const result=await createReview({id,content,token:access_token})

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