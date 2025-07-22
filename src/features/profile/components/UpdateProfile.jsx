import { Box, Typography } from '@mui/material';
import React from 'react';
import UpdateProfileForm from './UpdateProfileForm';



const UpdateProfile = ({handleClose}) => {
    return (
        <Box>
            <Typography sx={{textAlign:'center'}}>Update your profile</Typography>
            <UpdateProfileForm handleClose={handleClose}></UpdateProfileForm>
        </Box>
    );
};

export default UpdateProfile;