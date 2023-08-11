
import { useEffect, useState } from 'react';
import { CHECKBOX_SIZE, Checkbox } from '../../../src';

export const CheckboxApp: React.FC = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (checked: boolean) => {
    setChecked(checked)
  };


  return (
    <div>
      Large
      <Checkbox  ariaLabel='aria-label' label="Однострочный" onChange={handleChange} value={checked} size={CHECKBOX_SIZE.Large} />
      <br /> 
      Medium
      <Checkbox ariaLabel='aria-label' label="Однострочный" onChange={handleChange} value={checked}  />
      <br />
      Small
      <Checkbox ariaLabel='aria-label' label="Однострочный" onChange={handleChange} value={checked} size={CHECKBOX_SIZE.Small} />
      <br />
      Disabled
      <Checkbox ariaLabel='aria-label' label="Однострочный" onChange={handleChange} value={checked} disabled />
      <br />
      Error
      <Checkbox  error={!checked} ariaLabel='aria-label' label="Однострочный" onChange={handleChange} value={checked}  />
    </div>
  );
};
