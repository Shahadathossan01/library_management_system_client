import { Box, Typography } from '@mui/material';
import React from 'react';
import { useFetchBookIssuesByUserId } from './hooks/useFetchBookIssuesByUserId';
import { useBookIssueContext } from './hooks/useBookIssueContext';
import LoadingUi from '../../components/shared/LoadingUi';
import ShowError from '../../components/shared/ShowError';
import { BookIssueProvider } from './BookIssueProvider';
import BookIssuesTable from './components/BookIssuesTable';
import PaginationControlled from '../../components/shared/PaginationControlled';

export const BookIssues=()=>{
    return(
        <BookIssueProvider>
            <BookIssuesContent></BookIssuesContent>
        </BookIssueProvider>
    )
}

BookIssues.displayName='BookIssues'

const BookIssuesContent = () => {
    const {isLoading,error}=useFetchBookIssuesByUserId()
    const {bookIssues,pagination,updatePage,deleteBookIssue}=useBookIssueContext()

    if(isLoading) return <LoadingUi></LoadingUi>

    if(!pagination) return <LoadingUi></LoadingUi>
    
    const {page,totalPage,limit}=pagination

    const handleChange=(event,value)=>{
        const numberValue=Number(value)
        updatePage(numberValue)
    }

    return (
        <Box sx={{mt:15}}>
            <BookIssuesTable bookIssues={bookIssues} limit={limit} page={page} handleDeleteBookIssue={deleteBookIssue}></BookIssuesTable>
            {
                totalPage>1 && (
                    <PaginationControlled page={Number(page)} count={totalPage} handleChange={handleChange}></PaginationControlled>
                )
            }
        </Box>
    );
};

BookIssues.displayName='BookIssuesContent';