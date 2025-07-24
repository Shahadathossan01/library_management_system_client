import { Box } from '@mui/material';
import LoginFormField from './components/LoginFormField';

export const Login=()=>{

    return(
        <Box sx={{textAlign:'center',mt:10}}>
            <LoginFormField></LoginFormField>
        </Box>
    )
}

Login.displayName='Login'