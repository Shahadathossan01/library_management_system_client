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
import { Box, Button, IconButton, Typography } from '@mui/material';
import SelectField from '../../../components/ui/SelectField';
import ModalUi from '../../../components/shared/ModalUi';
import { Controller, useForm } from 'react-hook-form';

const UpdateStatusForm=({handleClose})=>{
  const {handleSubmit,control,reset}=useForm()

  const onSubmit=(data)=>{

  }
  return (
    <Box sx={{display:'flex',justifyContent:'center'}}>
      <form onSubmit={()=>handleSubmit(onSubmit)}>
          <Controller
              name='status'
              control={control}
              render={({field})=><SelectField 
                  {...field}
                  label='Status'
                  size='small'
                  options={[{label:'cancelled',value:'cancelled'},{label:'overDue',value:'overDue'},{label:'returned',value:'returned'},{label:'public_hand',value:'public_hand'}]}                              
              />}
          />

          <Box>
            <Button type='submit' size='small' variant='contained'>confirm</Button>
          </Box>
      </form>
    </Box>
  )
}


const UpdateStatusSection=()=>{
  const [open,setOpen]=React.useState(false)

  const handleOpen=()=>{
    setOpen(true)
  }

  const handleClose=()=>{
    setOpen(false)
  }
  return (
<Box>
                      <Button onClick={handleOpen} variant='contained' size='small'>update status</Button>
                      <ModalUi open={open} handleClose={handleClose}>
                          <UpdateStatusForm handleClose={handleClose}></UpdateStatusForm>
                      </ModalUi>
                    </Box>
  )
}


export default function BookIssuesTable({bookIssues,limit=10,page=1,handleDeleteBookIssue}) {
    

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
                <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <IconButton onClick={()=>handleDeleteBookIssue({id:item?._id})}>
                      <DeleteIcon  sx={{color:'red'}}></DeleteIcon>
                    </IconButton>
                    <UpdateStatusSection></UpdateStatusSection>
                </Box>
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
