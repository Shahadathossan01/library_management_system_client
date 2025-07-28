import React from 'react';
import { useNavigate, useParams } from 'react-router';
import { BookIssueProvider } from './BookIssueProvider';
import { useFetchBookById } from './hooks/useFetchBookById';
import ImageField from '../../components/ui/ImageField';
import TextField from '../../components/ui/TextField';
import { Avatar, Box, Button, Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useBookIssueContext } from './hooks/useBookIssueContext';
import { toast } from 'react-toastify';
const token=localStorage.getItem('access_token') || null;


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

      if(!token){
        navigate('/login', { state: { from: location }, replace: true })
        return
      }

        const res=await create({bookId:id})

        !res?.success && toast.error(res?.message)

        res?.success && toast.success('Successfully Issues New Boook.')

        res?.success && navigate(`/bookIssueSuccess/${res.bookIssueId}`)
    }

    return (
          <Box sx={{mt:15, flexGrow: 1, p: { xs: 2, md: 4 } ,justifyContent:'center',display:'flex'}}>
      <Paper
        elevation={3}
        sx={{
          p: { xs: 2, md: 4 },
          borderRadius: 3,
          bgcolor: 'background.default',
        }}
      >
        <Grid container spacing={4} alignItems="center">
          {/* Book Image */}
          <Grid sx={{display:'flex',justifyContent:'center'}} size={{xs:12,md:6}}>
            <Avatar
              variant="rounded"
              src={book?.image}
              alt={book?.name}
              sx={{
                width: '100%',
                height: { xs: 250, sm: 300 },
                objectFit: 'cover',
                borderRadius: 2,
              }}
            />
          </Grid>

          {/* Book Info */}
          <Grid sx={{display:'flex',justifyContent:'center'}} size={{xs:12,md:6}}>
            <Box>
              <Typography
                variant="h5"
                gutterBottom
              >
               <strong>Book Name:</strong> {book?.name}
              </Typography>

              <Typography variant="subtitle1" gutterBottom>
               <strong>Author Name:</strong> {book?.authorName}
              </Typography>

              <Typography variant="subtitle1" gutterBottom>
                <strong>Applicant: </strong>{user?.username ?? 'N/A'}
              </Typography>

              <Button
                onClick={handleClick}
                variant="contained"
                sx={{ mt: 3, px: 4 }}
                fullWidth
                size='small'
              >
                Confirm
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
    );
};

BookIssueFromContent.displayName='BookIssueFromContent'