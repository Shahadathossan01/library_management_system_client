import { Box } from '@mui/material';
import RegisterFormField from './components/RegisterFormField';

export const Register=()=>{

    return(
        <Box sx={{textAlign:'center'}}>
            <RegisterFormField></RegisterFormField>
        </Box>
    )
}

Register.displayName='Register'