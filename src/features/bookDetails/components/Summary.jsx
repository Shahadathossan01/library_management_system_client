import { Box } from "@mui/material";
import TextField from "../../../components/ui/TextField";


const Summary = ({book}) => {
    return (
        <Box sx={{mt:12,padding:'0px 10px 10px 10px'}}>
            <TextField variant="h6">Summary</TextField>
            <TextField variant="body1">{book?.summary}</TextField>
        </Box>   
    )
};

export default Summary;