import Grid from '@mui/material/Grid';
import { toast } from 'react-toastify';
import { Box, Typography, Card, CardMedia, CardContent, Stack, Button } from '@mui/material';
import { Link } from 'react-router';
import Summary from './Summary';

const LeftSide = ({ book }) => {
    return (
        <Card sx={{ width: '100%', maxWidth: 400,maxHeight:450, boxShadow: 3 }}>
            <CardMedia
                component="img"
                image={book?.image}
                alt={book?.name}
                height="350"
                sx={{ objectFit: 'cover' }}
            />
            <CardContent>
                <Stack spacing={1}>
                    <Typography variant="h6">
                        📖 <strong>Book Name:</strong> {book?.name || 'Unknown Title'}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                        ✍️ <strong>Author:</strong> {book?.authorName || 'Unknown Author'}
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    );
};

const RightSide = ({ book }) => {
    return (
        <Box
            sx={{
                p: 3,
                boxShadow: 3,
                borderRadius: 2,
                border: '1px solid #ccc',
                flexDirection: 'column',
                bgcolor: '#f9f9f9',
                height:'120px',
            }}
        >
            <Stack spacing={2}>
                <Typography variant="subtitle1">
                    <strong>Status:</strong> {book?.status || 'N/A'}
                </Typography>
                <Typography variant="subtitle1">
                    <strong>In Stock:</strong> {book?.inStock ?? 0}
                </Typography>
                {book?.inStock > 0 ? (
                    <Link to={`/bookIssueFrom/${book._id}`}>
                        <Button variant="contained" size="medium">
                            Book Issue
                        </Button>
                    </Link>
                ) : (
                    <Button
                        onClick={() => toast.error('Out of Stock!')}
                        variant="contained"
                        size="medium"
                        disabled
                        sx={{ bgcolor: '#bdbdbd' }}
                    >
                        Book Issue
                    </Button>
                )}
            </Stack>
        </Box>
    );
};

const BookSection = ({ book }) => {
    return (
        <Box sx={{ flexGrow: 1,p:2 }}>
            <Grid container spacing={4} justifyContent='center'>
                <Grid size={{xs:12,md:6}} display="flex" justifyContent="center">
                    <LeftSide book={book} />
                </Grid>
                <Grid size={{xs:12,md:6}} sx={{display:'flex',justifyContent:'center'}}>
                    <Box>
                        <RightSide book={book} />
                    <Summary book={book}></Summary>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default BookSection;
