
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ClearIcon from '@mui/icons-material/Clear';
import { useUserContext } from '../hooks/useUserContext';
import { IconButton } from '@mui/material';


export const UserTable=({users,page=1,limit=10})=>{
    const {deleteUser}=useUserContext()
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
              <TableCell align="right">{item?.profile?.phone || 'N/A'}</TableCell>
              <TableCell align="right">{item?.village || 'N/A'}</TableCell>
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