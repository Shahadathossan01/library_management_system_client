
import { useState } from 'react';
import { useFetchUsers } from './hooks/useFetchUsers';
import { useUserContext } from './hooks/useUserContext';
import { UserProvider } from './UserProvider';
import { UserTable } from './components/UserTable';
import SelectField from '../../components/ui/SelectField';
import { Box, Typography } from '@mui/material';
import PaginationControlled from '../../components/shared/PaginationControlled';
import LoadingUi from '../../components/shared/LoadingUi';

export const UserManagement = () => {
    console.log('called')
    return (
        <UserProvider>
            <UserManagementContent></UserManagementContent>
        </UserProvider>
    );
};

UserManagement.displayName='UserManagement'

const UserManagementContent = () => {
    const {isLoading,error}=useFetchUsers()
    const {users,pagination,updatePage,updateSearchValue}=useUserContext()
    const {page,limit,totalPage}=pagination
    
    isLoading && <LoadingUi></LoadingUi>
    
    const [filterValue,setFilterValue]=useState('all')

    
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
            <Typography variant='h4' sx={{fontWeight:'bold',textAlign:'center'}}>User Management</Typography>
            <SelectField label='Filter by role' value={filterValue} onChange={handleChangeFilterValue} options={[{value:'all',label:'All'},{value:'user',label:'User'},{value:'admin',label:'Admin'}]}></SelectField>
            <UserTable users={users} page={page} limit={limit} totalPage={totalPage}></UserTable>

            {
                totalPage>1 && (
                    <PaginationControlled page={Number(page)} count={totalPage} handleChange={handleChange}></PaginationControlled>
                )
            }
        </Box>
    );
};

UserManagementContent.displayName='UserManagementContent'
