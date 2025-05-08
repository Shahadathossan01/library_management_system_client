import React, { useState } from 'react';
import { ReviewProvider } from './ReviewProvider';
import { Box } from '@mui/material';
import LoadingUi from '../../components/shared/LoadingUi';
import { useFetchReviewByBookId } from './hooks/useFetchReviewByBookId';
import { useReviewContext } from './hooks/useReviewContext';
import TextField from '../../components/ui/TextField';
import NoData from '../../components/shared/NoData';
import ReviewLists from './components/ReviewLists';
import ReviewCreateFrom from './components/ReviewCreateFrom';
import PaginationControlled from '../../components/shared/PaginationControlled';
import Pagination from './components/Pagination';

export const ReviewManagement = ({id}) => {
    if(!id) return <LoadingUi></LoadingUi>
    return (
        <ReviewProvider>
            <ReviewManagementContent id={id}></ReviewManagementContent>
        </ReviewProvider>
    );
};


const ReviewManagementContent = ({id}) => {
    const {isLoading,error}=useFetchReviewByBookId({id})
    const {reviews,pagination,updatePage}=useReviewContext()

    return (
        <Box sx={{mt:10,display:'flex',flexDirection:'column',justifyContent:'center'}}>
            <TextField sx={{textAlign:'center'}}>Reviews</TextField>
            <ReviewCreateFrom id={id}></ReviewCreateFrom>
            <ReviewLists reviews={reviews} isLoading={isLoading} error={error}></ReviewLists>
            <Pagination></Pagination>
        </Box>
    );
};

