import { Box, Typography } from '@mui/material';
import RegisterFormField from './components/RegisterFormField';
import { Link } from 'react-router';

export const Register=()=>{

    return(
        <Box sx={{textAlign:'center',mt:20}}>
            <RegisterFormField></RegisterFormField>
            <Box sx={{mt:4}}>
                <Typography>Already have an account? Please <Link to="/login">Login..</Link></Typography>
            </Box>
        </Box>
    )
}

Register.displayName='Register'