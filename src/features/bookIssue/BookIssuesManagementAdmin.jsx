import React from 'react';
import { BookIssueProvider } from './BookIssueProvider';
import { Typography } from '@mui/material';
import { useFetchAllBookIssues } from './hooks/useFetchAllBookIssues';
import { useBookIssueContext } from './hooks/useBookIssueContext';
import LoadingUi from '../../components/shared/LoadingUi';
import BookIssuesTable from './components/BookIssuesTable';

export const BookIssuesManagementAdmin = () => {
    return (
        <>
            <BookIssueProvider>
                <BookIssuesManagementAdminContent></BookIssuesManagementAdminContent>    
            </BookIssueProvider>   
        </>
    );
};

BookIssuesManagementAdmin.displayName='BookIssuesManagementAdmin'

const BookIssuesManagementAdminContent = () => {
    const {isLoading,error}=useFetchAllBookIssues()
    isLoading && <LoadingUi></LoadingUi>
    const {allBookIssuesForAdminData,allBookIssuesForAdminPagination,deleteBookIssue}=useBookIssueContext()

    
    const {page,limit,totalPage}=allBookIssuesForAdminPagination


    return (
        <>
            <Typography>Book Issue Management</Typography>
            <BookIssuesTable page={page} limit={limit} bookIssues={allBookIssuesForAdminData} handleDeleteBookIssue={deleteBookIssue}></BookIssuesTable>
        </>
    );
};

BookIssuesManagementAdminContent.displayName='BookIssuesManagementAdminContent'