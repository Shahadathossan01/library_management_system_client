import { Box } from '@mui/material';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import InputField from '../../../components/ui/InputField';
import ButtonField from '../../../components/ui/ButtonField';
import { useReviewContext } from '../hooks/useReviewContext';

const ReviewCreateFrom = ({id}) => {
    const {control,handleSubmit,formState:{errors}}=useForm({
        defaultValues:{
            review:''
        }
    })
    const {create}=useReviewContext()
    const onSubmit=(data)=>{
        create({id,content:data.review})
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

                <ButtonField>Add Review</ButtonField>
            </Box>
        </form>
    )
};

export default ReviewCreateFrom;