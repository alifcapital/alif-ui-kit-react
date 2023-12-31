
import { useRef, useState } from 'react';
import { CHECKBOX_SIZE, CHECKBOX_THEME, Checkbox } from '../../../src';

export const CheckboxApp: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  const handleChange = (checked: boolean, e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(checked)
  };

  return (
    <div>
      Theme light
      <Checkbox  theme={CHECKBOX_THEME.Light}  ariaLabel='aria-label' label="Однострочный" onChange={handleChange} value={checked} size={CHECKBOX_SIZE.Large} />
      <br />
      Theme Dark
      <Checkbox theme={CHECKBOX_THEME.Dark}  ariaLabel='aria-label' label="Однострочный" onChange={handleChange} value={checked} size={CHECKBOX_SIZE.Large} />
      <br />
      Theme Green
      <Checkbox   theme={CHECKBOX_THEME.Green} ariaLabel='aria-label' label="Однострочный" onChange={handleChange} value={checked} size={CHECKBOX_SIZE.Large} />
      <br />

      Large
      <Checkbox ref={ref}  ariaLabel='aria-label' label="Однострочный" onChange={handleChange} value={checked} size={CHECKBOX_SIZE.Large} />
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


        Theme Dark disabled
        <Checkbox theme={CHECKBOX_THEME.Dark}  disabled ariaLabel='aria-label' label="Однострочный" onChange={handleChange} value={checked} size={CHECKBOX_SIZE.Large} />
        Theme Green disabled
        <Checkbox disabled  theme={CHECKBOX_THEME.Green} ariaLabel='aria-label' label="Однострочный" onChange={handleChange} value={checked} size={CHECKBOX_SIZE.Large} />
    </div>
  );
};
