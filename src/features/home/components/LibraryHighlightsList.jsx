import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';

const libraryHighlights = [
  "✅ Anyone can borrow books without paying any fees.",
  "📘 Our collection includes fiction, non-fiction, academic texts, biographies, and children's books.",
  "🏠 You can take books home and return them when you're done.",
  "📖 Whether you're studying, researching, or simply reading for fun — we have something for everyone.",
  "🌍 The library is open to all, regardless of age or background.",
  "🔁 After reading, return the book so others can enjoy it too."
];

const LibraryHighlightsList = () => {
  return (
    <Box
      sx={{
        maxWidth: 800,
        mx: 'auto',
        mt: 4,
        mb:4,
        px: 2,
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Typography variant="h5" component="h2" gutterBottom align="center" sx={{ fontWeight: 'bold',mt:5,pt:2}}>
        Why Choose Our Library?
      </Typography>

      <List>
        {libraryHighlights.map((item, index) => {
          const emoji = item.slice(0, 2).trim();
          const text = item.slice(2).trim();

          return (
            <ListItem key={index} sx={{ py: 0.4 }}>
              <ListItemIcon sx={{ minWidth: 10, fontSize: '1rem', color: 'primary.main' }}>
                {emoji}
              </ListItemIcon>
              <ListItemText
                primary={text}
 
              />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default LibraryHighlightsList;
