import { Box, Button } from '@mui/material';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import InputField from '../../../components/ui/InputField';
import ButtonField from '../../../components/ui/ButtonField';
import { useReviewContext } from '../hooks/useReviewContext';
import { toast } from 'react-toastify';
import { useAuthContext } from '../../auth/hooks/useAuthContext';
import { useLocation, useNavigate } from 'react-router';

const ReviewCreateFrom = ({id}) => {
    const {access_token}=useAuthContext()
    const location=useLocation()
    const navigate=useNavigate()
    const {control,handleSubmit,formState:{errors}}=useForm({
        defaultValues:{
            review:''
        }
    })
    const {create}=useReviewContext()
    const onSubmit=async(data)=>{

        if(!access_token){
        navigate('/login', { state: { from: location }, replace: true })
        return
      }
      
       const {code,message}=await create({id,content:data.review})
       if(code === 201){
        toast.success(message)
       }
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'center',gap:2}}>
                <Controller
                    name='review'
                    control={control}
                    rules={{required:'This is required'}}
                    render={({field})=><InputField size='small' label='Review' error={!! errors.review} helperText={errors.review?.message} {...field} />}
                />

                <Button type='submit' sx={{height:'40px'}} variant='contained' size='small'>Add Review</Button>
            </Box>
        </form>
    )
};

export default ReviewCreateFrom;