import { Box } from '@mui/material';
import React from 'react';
import PageHeader from './components/PageHeader';
import { AuthProvider } from './AuthProvider';
import RegisterFormField from './components/RegisterFormField';

export const Register = () => {
    return (
      <AuthProvider>
            <RegisterContent />
      </AuthProvider>  
    );
};

Register.displayName='Register'

const RegisterContent=()=>{

    return(
        <Box sx={{textAlign:'center',mt:10}}>
            <PageHeader></PageHeader>
            <RegisterFormField></RegisterFormField>
        </Box>
    )
}

RegisterContent.displayName='RegisterContent'