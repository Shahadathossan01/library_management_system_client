import { Box } from "@mui/material";
import Grid from '@mui/material/Grid';
import BookCard from "./BookCard";
import NoData from "../../../components/shared/NoData";
import SkeletonUi from "../../../components/shared/SkeletonUi";

const BookLists = ({books}) => {
    
    return (
        <Box sx={{ flexGrow: 1 ,p:2,mt:3}}>
        <Grid container spacing={2}>

            {   
                books.length ==0? <NoData></NoData>:
                books.map((book)=>(
                    <Grid key={book._id} size={{xs:12,sm:6,md:3}} display="flex" justifyContent="center">
                        <BookCard book={book}></BookCard>
                    </Grid>
                ))
            }
        </Grid>
      </Box>
    );
};

export default BookLists;