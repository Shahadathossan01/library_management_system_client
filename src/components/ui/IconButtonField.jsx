import IconButton from '@mui/material/IconButton';

export default function IconButtonField({disabled=false,color='default',label='',children,handleOnClick}) {
  return (
      <IconButton onClick={handleOnClick} aria-label={label} disabled={disabled} color={color}>
        {children}
      </IconButton>
  )
}
