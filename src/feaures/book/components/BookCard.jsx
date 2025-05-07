import { Box, Card, CardContent, Typography, CardMedia, Button, Stack } from "@mui/material";

const BookCard = ({ book }) => {
  const { name, authorName, image, inStock, summary, status } = book;

  return (
    <Card
      sx={{
        maxWidth: 300,
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
        height="200"
        image={image}
        alt={name}
        sx={{ objectFit: "cover" }}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>{name}</Typography>
        <Typography variant="body1">Author: {authorName}</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          In Stock: {inStock}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Status: {status}
        </Typography>

        <Typography variant="subtitle2" sx={{ mt: 2 }}>Summary:</Typography>
        <Typography variant="body2" color="text.secondary">
          {summary.slice(0, 70)}{summary.length > 70 && "..."}
        </Typography>
      </CardContent>

      <Box sx={{ p: 2 }}>
        <Stack direction="row" spacing={1} justifyContent="space-between">
          <Button variant="contained" size="small" fullWidth>
            Book Issue
          </Button>
          <Button variant="outlined" size="small" fullWidth>
            Details
          </Button>
        </Stack>
      </Box>
    </Card>
  );
};

export default BookCard;
