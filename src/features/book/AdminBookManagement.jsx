import { Box, Typography } from "@mui/material";
import { BookProvider } from "./BookProvider";
import { useFetchBooks } from "./hooks/useFetchBooks";
import { useBookContext } from "./hooks/useBookContext";
import LoadingUi from "../../components/shared/LoadingUi";
import CreateBook from "./components/CreateBook";
import { BooksTable } from "./components/BooksTable";
import PaginationControlled from "../../components/shared/PaginationControlled";
import { useState } from "react";
import SelectField from "../../components/ui/SelectField";

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
    const {isLoading}=useFetchBooks()
    const {books,pagination,updatePage,updateSearchValue}=useBookContext()
  const [filterValue,setFilterValue]=useState('all')

    if(isLoading && books){
        return <LoadingUi></LoadingUi>
    }

    const {page,limit,totalPage}=pagination

    const handleChange=(event,value)=>{
        const numberValue=Number(value)
        updatePage(numberValue)
    }

    const handleChangeFilterValue = (event) => {
        const newFilterValue=event.target.value
        setFilterValue(newFilterValue)
        updateSearchValue(newFilterValue)

  };

    return (
        <Box sx={{mt:2,mb:10}}>
            <Typography variant='h4' sx={{fontWeight:'bold',textAlign:'center'}}>Book Management</Typography>

            <Box sx={{display:'flex',justifyContent:'space-between',px:3}}>
                <SelectField label='Filter by status' value={filterValue} onChange={handleChangeFilterValue} options={[{value:'all',label:'all'},{value:'available',label:'abailable'},{value:'out_of_stock',label:'out_of_stock'}]}></SelectField>
                <CreateBook></CreateBook>
            </Box>
                <BooksTable books={books} page={page} limit={limit} ></BooksTable>
            {
                totalPage>1 && (
                    <PaginationControlled page={Number(page)} count={totalPage} handleChange={handleChange}></PaginationControlled>
                )
            }
        </Box>
    )
}