import { Box, IconButton, Typography } from '@mui/material';
import { useAdminContext } from '../hooks/useAdminContext';
import { useFetchUsers } from '../hooks/useFetchUsers';
import LoadingUi from '../../../components/shared/LoadingUi';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ClearIcon from '@mui/icons-material/Clear';
import PaginationControlled from '../../../components/shared/PaginationControlled';
import SelectField from '../../../components/ui/SelectField';
import { useState } from 'react';

const UserTable=({users,page=1,limit=10})=>{
    const {deleteUser}=useAdminContext()
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>No.</TableCell>
            <TableCell align="right">Username</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Role</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Village</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users?.map((item,index) => (
            <TableRow
              key={item?._id}
               sx={{
    '&:last-child td, &:last-child th': { border: 0 },
    bgcolor: item?.role === 'admin' ? 'gray' : 'transparent',
  }}
            >
              <TableCell component="th" scope="row">
                 {(page - 1) * limit + index + 1}
              </TableCell>
              <TableCell align="right">{item?.username}</TableCell>
              <TableCell align="right">{item?.email}</TableCell>
              <TableCell align="right">{item?.role}</TableCell>
              <TableCell align="right">{item?.profile?.phone}</TableCell>
              <TableCell align="right">{item?.village}</TableCell>
              <TableCell align="right">
                <IconButton onClick={()=>deleteUser({id:item?._id})}>
                    <ClearIcon></ClearIcon>
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}





const UserManagement = () => {
    const {isLoading,error}=useFetchUsers()
    const {users,pagination,updatePage,updateSearchValue}=useAdminContext()
    const {page,limit,totalPage}=pagination

    const [filterValue,setFilterValue]=useState('all')

    isLoading && <LoadingUi></LoadingUi>
    
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
        <Box>
            <Typography>user management section</Typography>
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

export default UserManagement;