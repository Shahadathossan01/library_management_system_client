import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import { parseISO, format, addDays } from 'date-fns';
import { useBookIssueContext } from '../hooks/useBookIssueContext';
import { IconButton, Typography } from '@mui/material';
export default function BookIssuesTable({bookIssues,limit=10,page=1}) {
    const {deleteBookIssue}=useBookIssueContext()

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>NO.</TableCell>
            <TableCell align="right">Book Name</TableCell>
            <TableCell align="right">Author Name</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Issue Date</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            bookIssues?.length===0 ? (
              <Typography sx={{p:2}}>No Book issues yet!</Typography>
            ):
            (
              bookIssues?.map((item,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {(page - 1) * limit + index + 1}
              </TableCell>
              <TableCell align="right">{item?.book?.name}</TableCell>
              <TableCell align="right">{item?.user?.username}</TableCell>
              <TableCell align="right">{item?.status}</TableCell>
              <TableCell align="right">{format(new Date(item?.createdAt), 'MM/dd/yyyy')}</TableCell>
              <TableCell  align="right">
                <IconButton onClick={()=>deleteBookIssue({id:item?._id})}>

                <DeleteIcon  sx={{color:'red'}}></DeleteIcon>
                </IconButton>
              </TableCell>
            </TableRow>
          ))
            )
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}
