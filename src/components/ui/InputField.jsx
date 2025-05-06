import React from 'react';
import TextField from '@mui/material/TextField';

export default function InputField({type='text',error,helperText,value,onChange,name,label='outlined',variant = 'outlined',inputRef,...rest}) {
  return (
    <TextField
      id={name}
      label={label}
      variant={variant}
      type={type}
      error={error}
      helperText={helperText}
      name={name}
      value={value}
      onChange={onChange}
      inputRef={inputRef}
      {...rest}
    />
  );
}
