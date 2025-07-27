import React from 'react';
import TextField from '../../../components/ui/TextField';
import { Box, Divider, Link, Typography } from '@mui/material';
import LinkField from '../../../components/ui/LinkField';

const Header = () => {
    return (
        <Box>
            <Box sx={{textAlign:'center'}}>
                <Typography variant='h3' sx={{fontWeight:'bold'}}>Welcome to our</Typography>
                <Typography variant='h4'>Public Library</Typography>
                <Divider></Divider>
            </Box>
            <Box textAlign={'center'} mt={2}>
                <Link href="#" variant="body2">
                    facebook page
                </Link>
            </Box>

        </Box>
    );
};

export default Header;