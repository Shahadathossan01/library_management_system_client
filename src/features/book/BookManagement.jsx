import { Box, Typography } from "@mui/material";
import { BookProvider } from "./BookProvider";
import { useFetchBooks } from "./hooks/useFetchBooks";
import { useBookContext } from "./hooks/useBookContext";
import BookLists from "./components/BookLists";
import LoadingUi from "../../components/shared/LoadingUi";
import ShowError from "../../components/shared/ShowError";
import SkeletonUi from "../../components/shared/SkeletonUi";
import PaginationControlled from "../../components/shared/PaginationControlled";

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
    if(!pagination) return <LoadingUi></LoadingUi>

    const {page,totalPage}=pagination

    const handleChange=(event,value)=>{
        const numberValue=Number(value)
        updatePage(numberValue)
    }

    if(isLoading) return <LoadingUi></LoadingUi>


    return(
        <Box sx={{mt:10}}>
        <Typography sx={{textAlign:'center',fontWeight:'bold'}} variant="h3">Books</Typography>
        <Box sx={{bgcolor:'#ebcbae',p:1}}>
            <BookLists isLoading={isLoading} books={books}></BookLists>
            {
                totalPage>1 && (
                    <PaginationControlled sx={{justifyContent:'center'}} page={Number(page)} count={totalPage} handleChange={handleChange}></PaginationControlled>
                )
            }
        </Box>
        </Box>
    )
}

BookManagementContent.displayName='BookManagementContent'