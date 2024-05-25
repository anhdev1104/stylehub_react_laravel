import { Checkbox, FormControlLabel } from '@mui/material';
import { useController } from 'react-hook-form';

const CheckboxControler = ({ name, control, label }) => {
  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
    defaultValue: false, // Giá trị mặc định của checkbox
  });
  return <FormControlLabel control={<Checkbox checked={value} onChange={onChange} />} label={label} />;
};

export default CheckboxControler;
