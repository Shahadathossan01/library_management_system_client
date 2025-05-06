import { Button } from "@mui/material";

const ButtonField = ({variant='contained',disabled=false,size='medium',color='success',children,type='submit'}) => {
    return (
        <Button type={type} variant={variant} disabled={disabled} size={size} color={color}>{children}</Button>
    );
};

export default ButtonField;