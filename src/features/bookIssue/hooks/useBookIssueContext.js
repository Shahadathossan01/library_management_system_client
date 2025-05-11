import { useContext } from "react"
import { BookIssueContext } from "../BookIssueProvider"
import { createBookIssue, getSingleBookIssue } from "../../../api/bookIssueApi"

export const useBookIssueContext=()=>{
    const {state,dispatch}=useContext(BookIssueContext)

    const create=async({bookId,status='pending'})=>{
        try{
            const result= await createBookIssue({bookId,status})
            
            dispatch({
                type: 'CREATE_BOOKISSUE',
                payload: result
            })

        return {success:true,bookIssueId:result?.data?._id}

        }catch(error){
            return {success: false,message: error}
        }
    }

    const getBookIssue=async({id})=>{
        try{
            const result=await getSingleBookIssue({id})

            dispatch ({
                type:'GET_SINGLE_BOOKISSUE',
                payload:result
            })

        }catch(error){
            console.log(error)
        }
    }


    return {
        create,
        getBookIssue,
        bookIssue:state.bookIssue
    }
}