import { Box, Divider } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router';
import { useFetchBookById } from './hooks/useFetchBookById';
import { useBookDetailsContext } from './hooks/useBookDetailsContext';
import { BookDetailsProvider } from './BookDetailsProvider';
import BookSection from './components/BookSection';
import LoadingUi from '../../components/shared/LoadingUi';
import ShowError from '../../components/shared/ShowError';
import Summary from './components/Summary';
import { ReviewManagement } from '../review';

export const BookDetails = () => {
    return (
        <BookDetailsProvider>
            <BookDetailsContent></BookDetailsContent>
        </BookDetailsProvider>
    );
};

BookDetails.displayName='BookDetails'

const BookDetailsContent = () => {
    const {id}=useParams()
    const {isLoading,error}=useFetchBookById({id})
    const {book}=useBookDetailsContext()
    if(isLoading) return <LoadingUi></LoadingUi>
    if(error) return <ShowError></ShowError>

    return (
        <Box sx={{mt:15}}>
            <BookSection book={book}></BookSection>
            <Divider></Divider>
            <ReviewManagement id={book?._id}></ReviewManagement>
        </Box>
    );
};

BookDetailsContent.displayName="BookDetailsContent"
