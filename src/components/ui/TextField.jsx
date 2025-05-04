import { Typography } from "@mui/material";


const TextField = ({variant='h6',sx={},children,...rest}) => {
    return (
        <Typography variant={variant} sx={{...sx}} {...rest}>
            {children}
        </Typography>
    );
};

export default TextField;