import { Box } from '@mui/material';
import React from 'react';
import PageHeader from './components/PageHeader';
import { AuthProvider } from './AuthProvider';
import LoginFormField from './components/LoginFormField';

export const Login=()=>{

    return(
        <Box sx={{textAlign:'center',mt:10}}>
            <PageHeader></PageHeader>
            <LoginFormField></LoginFormField>
        </Box>
    )
}

Login.displayName='Login'