import React from 'react';
import Header from './components/Header';
import { Box } from '@mui/material';
import { BookManagement } from '../book/BookManagement';

const Home = () => {
    return (
        <Box>
            <Header></Header>
            <BookManagement></BookManagement>
        </Box>
    );
};

export default Home;