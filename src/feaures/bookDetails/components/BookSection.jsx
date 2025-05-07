import { Box } from '@mui/material';
import React from 'react';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import Grid from '@mui/material/Grid';
const BookSection = ({book}) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid size={{xs:12,sm:6}} sx={{display:'flex',justifyContent:'center',mt:4}}>
                    <LeftSide book={book}></LeftSide>
                </Grid>
                <Grid size={{xs:12,sm:6}}>
                    <RightSide book={book}></RightSide>
                </Grid>
            </Grid>
        </Box>
    );
};

export default BookSection;