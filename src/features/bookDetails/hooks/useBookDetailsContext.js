import { useContext, useMemo } from "react"
import { BookDetailsContext } from "../BookDetailsProvider"

export const useBookDetailsContext=()=>{
    const {state,dispatch}=useContext(BookDetailsContext)

    const book=useMemo(()=>{
        return state.book
    },[state.book])



    return {
        book
    }
}