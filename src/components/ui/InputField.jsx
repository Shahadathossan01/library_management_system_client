import React from 'react';
import TextField from '@mui/material/TextField';

export default function InputField({value,onChange,name,label='outlined',variant = 'outlined',inputRef,...rest}) {
  return (
    <TextField
      id={name}
      label={label}
      variant={variant}
      name={name}
      value={value}
      onChange={onChange}
      inputRef={inputRef}
      {...rest}
    />
  );
}
