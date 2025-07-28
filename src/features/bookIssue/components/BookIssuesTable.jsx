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
import { toast } from 'react-toastify';
import { useAuthContext } from '../../auth/hooks/useAuthContext';

const UpdateStatusForm=({handleClose,id})=>{
  const {handleSubmit,control,reset}=useForm()
  const {updateStatus}=useBookIssueContext()
  
  const onSubmit=async(data)=>{
    
    const status=data?.status
    
   const result = await updateStatus({ id, status });

  if (result.success) {
    toast.success(`${result.status} Book`);
    handleClose();
    reset();
  } else {
    toast.error(result.message || 'Failed to update status');
  }

   handleClose()
   reset()
  }
  return (
    <Box sx={{display:'flex',justifyContent:'center'}}>
      <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
              name='status'
              control={control}
              render={({field})=><SelectField 
                  {...field}
                  label='Status'
                  size='small'
                  options={[
                    { label: 'pending', value: 'pending' },
                    { label: 'cancelled', value: 'cancelled' },
                    { label: 'overdue', value: 'overdue' }, // ✅ Capital D
                    { label: 'returned', value: 'returned' },
                    { label: 'public_hand', value: 'public_hand' },
                  ]}                              
              />}
          />

          <Box>
            <Button type='submit' size='small' variant='contained'>confirm</Button>
          </Box>
      </form>
    </Box>
  )
}


const UpdateStatusSection=({id})=>{
  const [open,setOpen]=React.useState(false)

  const handleOpen=()=>{
    setOpen(true)
  }

  const handleClose=()=>{
    setOpen(false)
  }
  return (
        <>
          <Button onClick={handleOpen} variant='contained' size='small'>update status</Button>
          <Box>
              <ModalUi open={open} handleClose={handleClose}>
              <UpdateStatusForm id={id} handleClose={handleClose}></UpdateStatusForm>
          </ModalUi>
          </Box>
        </>
  )
}


export default function BookIssuesTable({bookIssues,limit=10,page=1,handleDeleteBookIssue,role='user'}) {
    const {user}=useAuthContext()

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow sx={{bgcolor:'gray'}}>
            <TableCell sx={{color:'white'}}>NO.</TableCell>
            <TableCell sx={{color:'white',width:'30%'}} align="center">Book Name</TableCell>
            <TableCell sx={{color:'white',width:'30%'}} align="center">Author Name</TableCell>
            <TableCell sx={{color:'white',width:'10%'}} align="center">Status</TableCell>
            <TableCell sx={{color:'white',width:'10%'}} align="center">Issue Date</TableCell>
            <TableCell sx={{color:'white',width:'20%'}} align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            bookIssues?.length===0 ? (
              <Typography sx={{p:2}}>No data!</Typography>
            ):
            (
              bookIssues?.map((item,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } ,height:'5px'}}
            >
              <TableCell component="th" scope="row">
                {(page - 1) * limit + index + 1}
              </TableCell>
              <TableCell align="center">{item?.book?.name}</TableCell>
              <TableCell align="center">{item?.user?.username}</TableCell>
              <TableCell align="center">{item?.status}</TableCell>
              <TableCell align="center">{format(new Date(item?.createdAt), 'MM/dd/yyyy')}</TableCell>
              <TableCell  align="center">
                <Box sx={{display:'flex',justifyContent:'space-evenly',alignItems:'center'}}>
                    {
                      role==='admin' && <UpdateStatusSection id={item?._id}></UpdateStatusSection>
                    }

                    {
                      (item?.status === 'overdue' || item?.status === 'public_hand') && user?.role !== 'admin' ? (
                        <IconButton disabled>
                          <DeleteIcon sx={{ color: 'black' }} />
                        </IconButton>
                      ) : (
                        <IconButton onClick={() => handleDeleteBookIssue({ id: item?._id })}>
                          <DeleteIcon sx={{ color: 'red' }} />
                        </IconButton>
                      )
                    }


                    
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
