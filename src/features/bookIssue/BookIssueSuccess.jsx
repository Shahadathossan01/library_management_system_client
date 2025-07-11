import { useParams } from "react-router";
import { BookIssueProvider } from "./BookIssueProvider";
import { useBookIssueContext } from "./hooks/useBookIssueContext";
import { useEffect } from "react";
import { Box, Typography, Card, CardContent, Stack, Paper } from "@mui/material";
import ImageField from "../../components/ui/ImageField";
import LoadingUi from "../../components/shared/LoadingUi";
import { format, parseISO } from 'date-fns';

export const BookIssueSuccess = () => {
    return (
        <BookIssueProvider>
            <BookIssueSuccessContent />
        </BookIssueProvider>
    );
};

BookIssueSuccess.displayName = 'BookIssueSuccess';

const BookIssueSuccessContent = () => {
    const { id } = useParams();
    const { getBookIssue, bookIssue } = useBookIssueContext();

    useEffect(() => {
        getBookIssue({ id });
    }, []);

    if (!bookIssue) return <LoadingUi />;
    
    const book = bookIssue?.data?.book;

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh', p: 3 }}>
            <Card sx={{ maxWidth: 600, width: '100%', boxShadow: 3, p: 3 }}>
                <CardContent>
                    <Stack spacing={3} alignItems="center">
                        <Typography variant="h5" fontWeight="bold" color="primary">
                            Thank you for issuing a new book!
                        </Typography>

                        <Typography variant="body1" textAlign="center">
                            Reading opens the door to knowledge, imagination, and personal growth.
                            <br />
                            Keep nurturing your habit of reading!
                        </Typography>

                        <ImageField rounded="10px" height="300px" width="300px" img={book?.image} />

                        <Paper variant="outlined" sx={{ width: '100%', p: 2 }}>
                            <Typography variant="h6" gutterBottom>
                                Book Details
                            </Typography>
                            <Typography><strong>Book Name:</strong> {book?.name}</Typography>
                            <Typography><strong>Author Name:</strong> {book?.authorName}</Typography>
                            <Typography>
                                <strong>Issue Date:</strong> {format(parseISO(book?.createdAt), 'M-d-yyyy')}
                            </Typography>
                            <Typography>
                                <strong>Status: </strong> 
                                {bookIssue?.data?.status}
                            </Typography>
                        </Paper>

                        <Typography variant="body2" textAlign="center">
                            After receiving this book, you must return it within <strong>30 days</strong>.
                        </Typography>

                        <Typography variant="body1" fontWeight="medium">
                            Again, Thank You... Best of Luck!!
                        </Typography>
                    </Stack>
                </CardContent>
            </Card>
        </Box>
    );
};

BookIssueSuccessContent.displayName = 'BookIssueSuccessContent';
