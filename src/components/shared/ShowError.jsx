import { Alert } from "@mui/material";

const ShowError = ({ message = "Something went wrong", severity = "error", sx = {} }) => {
  return (
    <Alert severity={severity} sx={{ my: 2, ...sx }}>
      {message}
    </Alert>
  );
};

export default ShowError;
