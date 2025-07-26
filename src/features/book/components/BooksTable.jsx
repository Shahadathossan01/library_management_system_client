import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ClearIcon from '@mui/icons-material/Clear';
import { Box, IconButton } from '@mui/material';
import ImageField from '../../../components/ui/ImageField';
import { useBookContext } from '../hooks/useBookContext';
import EditIcon from '@mui/icons-material/Edit';
import EditBook from './EditBook';

export const BooksTable=({books,page=1,limit=10})=>{
  const {deleteBook}=useBookContext()
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>No.</TableCell>
            <TableCell align="right">Image</TableCell>
            <TableCell align="right">Book Name</TableCell>
            <TableCell align="right">Author Name</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">In Stock</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books?.map((item,index) => (
            <TableRow
              key={item?._id}
               sx={{
    '&:last-child td, &:last-child th': { border: 0 },
    bgcolor: item?.role === 'admin' ? 'gray' : 'transparent',
  }}
            >
              <TableCell component="th" scope="row">
                 {(page - 1) * limit + index + 1}
              </TableCell>

              <TableCell align="right">
                <ImageField img={item?.image} height='50px' width='50px' rounded='50%'></ImageField>
              </TableCell>
              <TableCell align="right">{item?.name}</TableCell>
              <TableCell align="right">{item?.authorName}</TableCell>
              <TableCell align="right">{item?.status}</TableCell>
              <TableCell align="right">{item?.inStock}</TableCell>

              <TableCell align="right">
                <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',gap:1}}>
                    <IconButton onClick={()=>deleteBook({id:item?._id})}>
                    <ClearIcon></ClearIcon>
                </IconButton>
                <EditBook id={item?._id}></EditBook>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}