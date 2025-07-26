import { Box, Typography } from "@mui/material";
import { BookProvider } from "./BookProvider";
import { useFetchBooks } from "./hooks/useFetchBooks";
import { useBookContext } from "./hooks/useBookContext";
import LoadingUi from "../../components/shared/LoadingUi";
import CreateBook from "./components/CreateBook";
import { BooksTable } from "./components/BooksTable";
import PaginationControlled from "../../components/shared/PaginationControlled";

export const AdminBookManagement = () => {
    return (
        <>
            <BookProvider>
                <AdminBookManagementContent></AdminBookManagementContent>
            </BookProvider>
        </>
    );
};

AdminBookManagement.displayName='AdminBookManagement'

const AdminBookManagementContent=()=>{
    const {isLoading,error}=useFetchBooks()
    const {books,pagination,updatePage}=useBookContext()

    isLoading && <LoadingUi></LoadingUi>
    console.log(pagination)
    const {page,limit,totalPage}=pagination

    console.log(books)
    const handleChange=(event,value)=>{
        const numberValue=Number(value)
        updatePage(numberValue)
    }

    return (
        <Box>
            <Typography sx={{textAlign:'center'}}>Book Management</Typography>
            <CreateBook></CreateBook>
            <Box>
                <BooksTable books={books} page={page} limit={limit} ></BooksTable>
            </Box>
            {
                totalPage>1 && (
                    <PaginationControlled page={Number(page)} count={totalPage} handleChange={handleChange}></PaginationControlled>
                )
            }
        </Box>
    )
}