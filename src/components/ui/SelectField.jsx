import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectField({ label='filter', value='all', onChange, options=[{ value: 'all', label: 'All' },], name='filter', size = 'small', minWidth = 120 }) {
  return (
    <FormControl sx={{ m: 1, minWidth }} size={size}>
      <InputLabel id={`${name}-label`}>{label}</InputLabel>
      <Select
        labelId={`${name}-label`}
        id={`${name}-select`}
        name={name}
        value={value}
        label={label}
        onChange={onChange}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
