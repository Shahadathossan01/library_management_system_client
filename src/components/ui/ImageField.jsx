import { Box } from "@mui/material";


const ImageField = ({title,img,width='100px',height='100px',rounded='',sx={}}) => {
    return (
        <Box
            component='img'
            src={img}
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