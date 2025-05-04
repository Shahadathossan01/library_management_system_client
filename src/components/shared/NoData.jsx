import { Box, Typography } from "@mui/material";
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';

const NoData = ({ message = "No Data Found", icon = <HourglassEmptyIcon fontSize="large" />, sx = {} }) => {
  return (
    <Box textAlign="center" py={4} sx={sx}>
      <Box mb={1} color="text.secondary">
        {icon}
      </Box>
      <Typography variant="body1" color="text.secondary">
        {message}
      </Typography>
    </Box>
  );
};

export default NoData;
