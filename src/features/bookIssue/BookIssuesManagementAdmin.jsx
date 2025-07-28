import React, { useState } from 'react';
import { BookIssueProvider } from './BookIssueProvider';
import { Typography } from '@mui/material';
import { useFetchAllBookIssues } from './hooks/useFetchAllBookIssues';
import { useBookIssueContext } from './hooks/useBookIssueContext';
import LoadingUi from '../../components/shared/LoadingUi';
import BookIssuesTable from './components/BookIssuesTable';
import PaginationControlled from '../../components/shared/PaginationControlled';
import SelectField from '../../components/ui/SelectField';

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
    console.log('error',error)
    const [filterValue,setFilterValue]=useState('all')
    isLoading && <LoadingUi></LoadingUi>
    const {allBookIssuesForAdminData,allBookIssuesForAdminPagination,deleteBookIssue,updatePage,updateSearchValue}=useBookIssueContext()

    
    const page = allBookIssuesForAdminPagination?.page || 1;
const limit = allBookIssuesForAdminPagination?.limit || 10;
const totalPage = allBookIssuesForAdminPagination?.totalPage || 1;

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
        <>
            <Typography>Book Issue Management</Typography>
            <SelectField
                label='Filter by status'
                value={filterValue}
                onChange={handleChangeFilterValue}
                options={[
                    {label:'all',value:'all'},
                     { label: 'pending', value: 'pending' },
                    { label: 'cancelled', value: 'cancelled' },
                    { label: 'overdue', value: 'overdue' }, // ✅ Capital D
                    { label: 'returned', value: 'returned' },
                    { label: 'public_hand', value: 'public_hand' },
                ]}
            
            
            />
            <BookIssuesTable role='admin' page={page} limit={limit} bookIssues={allBookIssuesForAdminData} handleDeleteBookIssue={deleteBookIssue}></BookIssuesTable>

            {
                totalPage>1 && (
                    <PaginationControlled 
                        page={Number(page)}
                        count={totalPage}
                        handleChange={handleChange}
                    ></PaginationControlled>
                )
            }
            
        </>
    );
};

BookIssuesManagementAdminContent.displayName='BookIssuesManagementAdminContent'