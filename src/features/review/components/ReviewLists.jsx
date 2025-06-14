import { Box } from '@mui/material';
import React from 'react';
import NoData from '../../../components/shared/NoData';
import LoadingUi from '../../../components/shared/LoadingUi';
import ShowError from '../../../components/shared/ShowError';
import ReviewListItem from './ReviewListItem';

const ReviewLists = ({reviews,isLoading,error}) => {
    if(isLoading) return <LoadingUi></LoadingUi>
    if(error) return <ShowError></ShowError>
    return (
        <Box sx={{px:20}}>
            {
                reviews?.length===0?(
                    <NoData></NoData>
                ) : (
                    reviews?.map((review)=>(
                        <ReviewListItem key={review._id} review={review}></ReviewListItem>
                    ))
                )
            }
        </Box>
    );
};

export default ReviewLists;