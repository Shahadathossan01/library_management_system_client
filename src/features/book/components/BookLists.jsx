import { Box } from "@mui/material";
import Grid from '@mui/material/Grid';
import BookCard from "./BookCard";
import NoData from "../../../components/shared/NoData";

const BookLists = ({books}) => {

    if(books.length===0){
        return <NoData></NoData>
    }
    
    return (
        <Box sx={{ flexGrow: 1 ,p:2,mt:3}}>
        <Grid container spacing={4}>

            {
                books.map((book)=>(
                    <Grid key={book._id} size={{xs:12,sm:6,md:3,lg:3}} display="flex" justifyContent="center">
                        <BookCard book={book}></BookCard>
                    </Grid>
                ))
            }
        </Grid>
      </Box>
    );
};

export default BookLists;