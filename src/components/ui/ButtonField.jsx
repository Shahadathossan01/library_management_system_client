import { Button } from "@mui/material";

const ButtonField = ({variant='contained',disabled=false,size='medium',color='success',value='button'}) => {
    return (
        <Button variant={variant} disabled={disabled} size={size} color={color}>{value}</Button>
    );
};

export default ButtonField;