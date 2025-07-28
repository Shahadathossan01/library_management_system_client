import { Box } from '@mui/material';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import InputField from '../../../components/ui/InputField';
import ButtonField from '../../../components/ui/ButtonField';
import { useReviewContext } from '../hooks/useReviewContext';
import { toast } from 'react-toastify';

const ReviewCreateFrom = ({id}) => {
    const {control,handleSubmit,formState:{errors}}=useForm({
        defaultValues:{
            review:''
        }
    })
    const {create}=useReviewContext()
    const onSubmit=async(data)=>{
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

                <ButtonField size='small'>Add Review</ButtonField>
            </Box>
        </form>
    )
};

export default ReviewCreateFrom;