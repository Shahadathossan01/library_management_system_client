import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

export default function PaginationControlled({ page = 1, handleChange, count = 10 ,sx={justifyContent: 'flex-end'}}) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', my: 2 , ...sx}}>
      <Stack spacing={0} alignItems="flex-end">
        <Typography>Page: {page}</Typography>
        <Pagination count={count} page={page} onChange={handleChange} />
      </Stack>
    </Box>
  );
}
