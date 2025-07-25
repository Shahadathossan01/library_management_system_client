import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import { Link } from 'react-router';

const RightSide = ({ book }) => {
    return (
        <Box sx={{ padding: 2, boxShadow: 2, borderRadius: 2 ,mt:{xs:2,sm:18}}}>
            <Stack spacing={2}>
                <Typography variant="subtitle1">
                    <strong>Status:</strong> {book?.status || 'N/A'}
                </Typography>
                <Typography variant="subtitle1">
                    <strong>In Stock:</strong> {book?.inStock ?? 0}
                </Typography>
                <Link to={`/bookIssueFrom/${book?._id}`}>
                    <Button disabled={(book?.status==='available' || book?.inStock ==0) && false} variant="contained" color="primary">
                    Book Issue
                </Button>
                </Link>
            </Stack>
        </Box>
    );
};

export default RightSide;
