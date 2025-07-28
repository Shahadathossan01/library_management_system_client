
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
          <TableRow sx={{bgcolor:'gray'}}>
            <TableCell sx={{color:'white',width:'10%'}} align="center">No.</TableCell>
            <TableCell sx={{color:'white',width:'10%'}} align="center">Username</TableCell>
            <TableCell sx={{color:'white',width:'10%'}} align="center">Email</TableCell>
            <TableCell sx={{color:'white',width:'10%'}} align="center">Role</TableCell>
            <TableCell sx={{color:'white',width:'10%'}} align="center">Phone</TableCell>
            <TableCell sx={{color:'white',width:'10%'}} align="center">Village</TableCell>
            <TableCell sx={{color:'white',width:'10%'}} align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users?.map((item,index) => (
            <TableRow
              key={item?._id}
               sx={{
    '&:last-child td, &:last-child th': { border: 0 },
    bgcolor: item?.role === 'admin' ? '#cfd8dc' : 'transparent',height:'2px'
  }}
            >
              <TableCell component="th" scope="row">
                 {(page - 1) * limit + index + 1}
              </TableCell>
              <TableCell align="center">{item?.username}</TableCell>
              <TableCell align="center">{item?.email}</TableCell>
              <TableCell align="center">{item?.role}</TableCell>
              <TableCell align="center">{item?.profile?.phone || 'N/A'}</TableCell>
              <TableCell align="center">{item?.village || 'N/A'}</TableCell>
              <TableCell align="center">
                {
                  item?.role==='admin'?(
                    <IconButton disabled onClick={()=>deleteUser({id:item?._id})}>
                    <ClearIcon></ClearIcon>
                </IconButton>
                  ):(
                    <IconButton onClick={()=>deleteUser({id:item?._id})}>
                    <ClearIcon sx={{color:'red'}}></ClearIcon>
                </IconButton>
                  )
                }
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}