import React from 'react';
import Header from './components/Header';
import { Box } from '@mui/material';
import { BookManagement } from '../book/BookManagement';
import LibraryHighlightsList from './components/LibraryHighlightsList';
import Footer from './components/Footer';


const Home = () => {
    return (
        <Box sx={{bgcolor:'#f9f9f9',pt:15}}>
            <Header></Header>
            <LibraryHighlightsList></LibraryHighlightsList>
            <BookManagement></BookManagement>
            <Footer></Footer>
        </Box>
    );
};

export default Home;