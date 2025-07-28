import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Stack } from '@mui/material';

const LeftSide = ({ book }) => {
    return (
        <Card sx={{ maxWidth: 350, boxShadow: 3 }}>
            <CardMedia
                component="img"
                image={book?.image}
                alt={book?.name}
                height="350"
                sx={{ objectFit: 'cover' }}
            />
            <CardContent>
                <Stack spacing={1}>
                    <Typography variant="h6" component="h2">
                       Book Name: {book?.name || 'Unknown Title'}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                       Author Name: {book?.authorName || 'Unknown Author'}
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    );
};

export default LeftSide;
