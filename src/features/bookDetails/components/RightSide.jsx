import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import { Link, NavLink } from 'react-router';
import { toast } from 'react-toastify';

const RightSide = ({ book }) => {
    return (
        <Box sx={{ padding: 2, boxShadow: 2, borderRadius: 2 ,mt:{xs:2,sm:18},border:'1px solid gray',width:'60%',display:'flex',justifyContent:'center'}}>
            <Stack spacing={2}>
                <Typography variant="subtitle1">
                    <strong>Status:</strong> {book?.status || 'N/A'}
                </Typography>
                <Typography variant="subtitle1">
                    <strong>In Stock:</strong> {book?.inStock ?? 0}
                </Typography>
                {book?.inStock> 0 ? (
                    <NavLink to={`/bookIssueFrom/${book._id}`}>
                    <Button variant="contained" size="small">
                        Book Issue
                    </Button>
                    </NavLink>
                ) : (
                    <Button onClick={()=>{toast.error('Out of Stock!')}} sx={{bgcolor:'#bdbdbd'}} variant="contained" size="small">
                    Book Issue
                    </Button>
                )}
            </Stack>
        </Box>
    );
};

export default RightSide;
