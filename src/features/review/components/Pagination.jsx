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
        <PaginationControlled sx={{justifyContent: 'center'}} handleChange={handleChange} page={Number(page)} count={totalPage}></PaginationControlled>
    );
};

export default Pagination;