import { Box } from "@mui/material";
import PaginationControlled from "../../../components/shared/PaginationControlled";
import { useReviewContext } from "../hooks/useReviewContext";

const Pagination = () => {
    const {pagination,updatePage}=useReviewContext()

    if(!pagination) return null
    const {page,totalPage}=pagination
    

    const handleChange=(event,value)=>{
        const numberValue=Number(value)
        updatePage(numberValue)
    }
    return (
        <Box sx={{mt:5}}>
            <PaginationControlled sx={{justifyContent: 'center'}} handleChange={handleChange} page={Number(page)} count={totalPage}></PaginationControlled>
        </Box>
    );
};

export default Pagination;