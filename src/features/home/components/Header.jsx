import React from 'react';
import TextField from '../../../components/ui/TextField';
import { Box, Typography } from '@mui/material';
import LinkField from '../../../components/ui/LinkField';

const Header = () => {
    return (
        <Box>
            <TextField variant='h6' sx={{textAlign:'center',mt:4}}>Welcome to our public library</TextField>
            <TextField variant='body2'>
                Anwarkhali Gono Pathagar is a community-based public library dedicated to promoting education, literacy, and lifelong learning among the people of Anwarkhali and surrounding areas. Our mission is to create a welcoming space where individuals of all ages can access books, digital resources, and educational opportunities—completely free of charge.We believe that knowledge is for everyone. That’s why we offer a wide collection of Bengali and English books, children’s literature, educational materials, and digital learning tools. In addition to lending services, we host reading sessions, study groups, cultural events, and educational workshops for students and learners.
                Whether you're a curious reader, a student preparing for exams, or someone looking to grow your knowledge, Anwarkhali Gono Pathagar is your home for inspiration, information, and community learning.
            </TextField>
            <Box textAlign={'center'}>
                <LinkField sx={{textAlign:'center'}}>facebook</LinkField>
            </Box>

        </Box>
    );
};

export default Header;