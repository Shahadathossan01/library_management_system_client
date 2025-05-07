import { Box, Typography } from '@mui/material';
import React from 'react';
import TextField from '../../../components/ui/TextField';
import ImageField from '../../../components/ui/ImageField';
import IconButtonField from '../../../components/ui/IconButtonField';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ModalUi from '../../../components/shared/ModalUi';
import InputField from '../../../components/ui/InputField';
import { Controller, useForm } from 'react-hook-form';
import ButtonField from '../../../components/ui/ButtonField';
import { useReviewContext } from '../hooks/useReviewContext';

const EditReview=({id})=>{
    const {control,handleSubmit,formState:{errors},reset}=useForm()
    const {update}=useReviewContext()
    const onSubmit=(data)=>{
        update({id,review:data.review})
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{display:'flex', justifyContent:'center',gap:5}}>
                <Controller
                    name='review'
                    control={control}
                    rules={{required:'This is required'}}
                    render={({field})=><InputField label='Review' error={!! errors.review} helperText={errors.review?.message} {...field} />}
                />

                <ButtonField>Edit</ButtonField>
            </Box>
        </form>
    )
}


const ReviewListItem = ({review,index}) => {
    const currentUser = JSON.parse(localStorage.getItem('user'));
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const {deleteReviewItem}=useReviewContext()
    return (
        <Box sx={{display:'flex',gap:'20px',mt:8}}>
            <TextField>{index+1}</TextField>
            <ImageField height='50px' width='50px' rounded='50px' img={review.user.profile.avator} />
            <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
                <TextField variant='subtitle2'>{review.user.username?review.user.username: review.user.profile.firstName + ' ' + review.user.profile.lastName}</TextField>
                <TextField variant='body2'>{review.content}</TextField>
            </Box>
            {
                currentUser?._id ===review.user._id &&  (
                    <Box>
                <IconButtonField><EditIcon onClick={handleOpen}></EditIcon></IconButtonField>
                <IconButtonField><DeleteIcon onClick={()=>deleteReviewItem({id:review?._id})}></DeleteIcon></IconButtonField>
                <ModalUi open={open} handleClose={handleClose}>
                    <EditReview id={review?._id}></EditReview>
                </ModalUi>
            </Box>
                )
            }
        </Box>
    );
};

export default ReviewListItem;