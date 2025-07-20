import React from 'react';
import { useNavigate, useParams } from 'react-router';
import { BookIssueProvider } from './BookIssueProvider';
import { useFetchBookById } from './hooks/useFetchBookById';
import ImageField from '../../components/ui/ImageField';
import TextField from '../../components/ui/TextField';
import { Avatar, Box, Button, Grid, Paper, Typography } from '@mui/material';
import { useBookIssueContext } from './hooks/useBookIssueContext';
import { toast } from 'react-toastify';



export const BookIssueFrom = () => {
    const {id}=useParams()

    return (
        <BookIssueProvider>
                <BookIssueFromContent id={id}></BookIssueFromContent>
        </BookIssueProvider>
    );
};

BookIssueFrom.displayName='BookIssueFrom'

const BookIssueFromContent = ({id}) => {
    const {book}=useFetchBookById({id})
    const user=localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')):null
    const {create}=useBookIssueContext()
    const navigate=useNavigate()
    const handleClick=async()=>{
        const res=await create({bookId:id})
        console.log(res)
        !res?.success && toast.error(res?.message)

        res?.success && toast.success('Successfully Issues New Boook.')

        res?.success && navigate(`/bookIssueSuccess/${res.bookIssueId}`)
    }

    return (
          <Box sx={{ flexGrow: 1, padding: 4 }}>
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} sm={6}>
            <Avatar
              variant="rounded"
              src={book?.image}
              alt={book?.name}
              sx={{ width: '100%', height: 300, objectFit: 'cover' }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h5" gutterBottom>
              Book Name: <strong>{book?.name}</strong>
            </Typography>
            <Typography variant="h6" gutterBottom>
              Author Name: <strong>{book?.authorName}</strong>
            </Typography>
            <Typography variant="h6">
              Applicant Name: <strong>{user?.username ?? ''}</strong>
            </Typography>
            <Button onClick={handleClick} sx={{mt:3}} variant='contained'>Confirm</Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
    );
};

BookIssueFromContent.displayName='BookIssueFromContent'