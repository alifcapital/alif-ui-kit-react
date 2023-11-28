
import { useRef, useState } from 'react';
import { RADIO_SIZE, RADIO_THEME, Radio } from '../../../src';

export const RadioApp: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  const handleChange = (checked: boolean, e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(checked)
  };

  return (
    <div>
      Theme light
      <Radio  theme={RADIO_THEME.Light}  ariaLabel='aria-label' label="Однострочный" onChange={handleChange} value={checked} size={RADIO_SIZE.Large} />
      <br />
      Theme Dark
      <Radio theme={RADIO_THEME.Dark}  ariaLabel='aria-label' label="Однострочный" onChange={handleChange} value={checked} size={RADIO_SIZE.Medium} />
      <br />
      Theme Green
      <Radio   theme={RADIO_THEME.Green} ariaLabel='aria-label' label="Однострочный" onChange={handleChange} value={checked} size={RADIO_SIZE.Small} />
      <br />

      Large
      <Radio ref={ref}  ariaLabel='aria-label' label="Однострочный" onChange={handleChange} value={checked} size={RADIO_SIZE.Large} />
      <br />
      Medium checked
      <Radio ariaLabel='aria-label' label="Однострочный" onChange={handleChange} value={checked}  />
      <br />
      Small
      <Radio ariaLabel='aria-label' label="Однострочный" onChange={handleChange} value={checked} size={RADIO_SIZE.Small} />
      <br />
      Disabled
      <Radio ariaLabel='aria-label' label="Однострочный" onChange={handleChange} value={checked} disabled />
      <br />
      Error
      <Radio  error={!checked} ariaLabel='aria-label' label="Однострочный" onChange={handleChange} value={checked}  />



        Theme light disabled
        <Radio disabled  theme={RADIO_THEME.Light}  ariaLabel='aria-label' label="Однострочный" onChange={handleChange} value={checked} size={RADIO_SIZE.Large} />
        <br />
        Theme Dark disabled
        <Radio disabled theme={RADIO_THEME.Dark}  ariaLabel='aria-label' label="Однострочный" onChange={handleChange} value={checked} size={RADIO_SIZE.Medium} />
        <br />
        Theme Green disabled
        <Radio disabled  theme={RADIO_THEME.Green} ariaLabel='aria-label' label="Однострочный" onChange={handleChange} value={checked} size={RADIO_SIZE.Small} />
        <br />



    </div>
  );
};
