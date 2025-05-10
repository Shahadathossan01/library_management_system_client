import { useContext } from "react"
import { BookIssueContext } from "../BookIssueProvider"
import { createBookIssue } from "../../../api/bookIssueApi"

export const useBookIssueContext=()=>{
    const {state,dispatch}=useContext(BookIssueContext)

    const create=async({bookId,status='pending'})=>{
        try{
            const result= await createBookIssue({bookId,status})
            console.log(result)
            dispatch({
                type: 'CREATE_BOOKISSUE',
                payload: result
            })

        return {success:true,bookIssueId:result?.data?._id}

        }catch(error){
            return {success: false,message: error}
        }
    }


    return {
        create
    }
}