import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ClearIcon from '@mui/icons-material/Clear';
import { Box, IconButton, Typography } from '@mui/material';
import ImageField from '../../../components/ui/ImageField';
import { useBookContext } from '../hooks/useBookContext';
import EditIcon from '@mui/icons-material/Edit';
import EditBook from './EditBook';

export const BooksTable=({books,page=1,limit=10})=>{
  const {deleteBook}=useBookContext()

  const handleDeleteBook=({id})=>{
    console.log(id)
    deleteBook({id})
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow sx={{bgcolor:'gray'}}>
            <TableCell sx={{color:'white',width:'10%'}} align="center">No.</TableCell>
            <TableCell sx={{color:'white',width:'10%'}} align="center">Image</TableCell>
            <TableCell sx={{color:'white',width:'30%'}} align="center">Book Name</TableCell>
            <TableCell sx={{color:'white',width:'30%'}} align="center">Author Name</TableCell>
            <TableCell sx={{color:'white',width:'10%'}} align="center">Status</TableCell>
            <TableCell sx={{color:'white',width:'20%'}} align="center">In Stock</TableCell>
            <TableCell sx={{color:'white',width:'10%'}} align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            books?.length===0 && <Typography sx={{p:2}}>No data!</Typography>
          }
          {books?.map((item,index) => (
            <TableRow
              key={item?._id}
               sx={{
    '&:last-child td, &:last-child th': { border: 0 },height:'2px'
  }}
            >
              <TableCell component="th" scope="row">
                 {(page - 1) * limit + index + 1}
              </TableCell>

              <TableCell align="center">
                <ImageField img={item?.image} height='50px' width='50px' rounded='50%'></ImageField>
              </TableCell>
              <TableCell align="center">{item?.name}</TableCell>
              <TableCell align="center">{item?.authorName}</TableCell>
              <TableCell align="center">{item?.status}</TableCell>
              <TableCell align="center">{item?.inStock}</TableCell>

              <TableCell align="center">
                <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:1}}>
                <EditBook id={item?._id}></EditBook>
                    <IconButton onClick={()=>handleDeleteBook({id:item?._id})}>
                    <ClearIcon></ClearIcon>
                </IconButton>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}