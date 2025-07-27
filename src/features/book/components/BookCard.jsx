import { Box, Card, CardContent, Typography, CardMedia, Button, Stack } from "@mui/material";
import { NavLink } from "react-router";

const BookCard = ({ book }) => {
  const { name, authorName, image, inStock, summary, status } = book;

  return (
    <Card
      sx={{
        width:'100%',
        height: "100%",
        borderRadius: 2,
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardMedia
        component="img"
        height="200px"
        width="300px"
        image={image}
        alt={name}
        sx={{ objectFit: "cover" }}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>{name}</Typography>
        <Typography variant="body1">Author: {authorName}</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          <strong>In Stock: {inStock}</strong>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Status: {status}</strong>
        </Typography>

      </CardContent>

      <Box sx={{ px: 1,pb:2 }}>
        <Stack direction="row" spacing={1} justifyContent="space-between">
          <NavLink to={`/bookIssueFrom/${book._id}`}>
            <Button variant="contained" size="small" fullWidth>
              Book Issue
            </Button>
          </NavLink>
          <NavLink to={`/bookDetails/${book._id}`}>
            <Button variant="outlined" size="small" fullWidth>
              Details
            </Button>
          </NavLink>
        </Stack>
      </Box>
    </Card>
  );
};

export default BookCard;
