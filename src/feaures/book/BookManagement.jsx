import { Box } from "@mui/material";
import { BookProvider } from "./BookProvider";
import { useFetchBooks } from "./hooks/useFetchBooks";
import { useBookContext } from "./hooks/useBookContext";
import BookLists from "./components/BookLists";
import LoadingUi from "../../components/shared/LoadingUi";
import ShowError from "../../components/shared/ShowError";
import SkeletonUi from "../../components/shared/SkeletonUi";
import PaginationControlled from "../../components/shared/PaginationControlled";
import { useState } from "react";

export const BookManagement = () => {
    return (
        <BookProvider>
            <BookManagementContent></BookManagementContent>
        </BookProvider>
    );
};

BookManagement.displayName='BookManagement'

const BookManagementContent=()=>{
    const {isLoading,error}=useFetchBooks()
    const {books,pagination,updatePage}=useBookContext()
    const {totalItems,totalPage}=pagination

    const [page,setPage]=useState(1)

    const handleChange=(event,value)=>{
        setPage(value)
        updatePage(page)
    }

    if(isLoading) return <LoadingUi></LoadingUi>
    if(error) return <ShowError></ShowError>

    return(
        <Box>
            <BookLists isLoading={isLoading} books={books}></BookLists>
            <PaginationControlled page={page} count={totalPage} handleChange={handleChange}></PaginationControlled>
        </Box>
    )
}

BookManagementContent.displayName='BookManagementContent'