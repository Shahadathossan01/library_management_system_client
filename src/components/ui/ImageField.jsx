import { Box } from "@mui/material";


const ImageField = ({title,img,width='100px',height='100px',rounded='',sx={}}) => {
    return (
        <Box
            component='img'
            srcSet={`${img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${img}?w=248&fit=crop&auto=format`}
            alt={title}
            loading="lazy"
            width={width}
            height={height}
            sx={{
                borderRadius: rounded,
                ...sx
            }}
            
          />
    );
};

export default ImageField;