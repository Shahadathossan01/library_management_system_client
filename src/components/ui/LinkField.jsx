import { Button } from '@mui/material';
import React from 'react';

const LinkField = ({href='',children}) => {
    return (
        <Button href={href}>{children}</Button>
    );
};

export default LinkField;