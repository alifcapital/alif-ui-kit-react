
import { useRef, useState } from 'react';
import { Switch } from '../../../src';
import { SWITCH_SIZE, SWITCH_THEME } from '../../../src/components/Switch/SwitchConstants';

export const SwitchApp: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  const handleChange = (checked: boolean, e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(checked)
  };

  return (
    <div>
      Without Label
      <Switch ref={ref}  ariaLabel='aria-lable' />
      <br /> 
      Disabled
      <Switch  ariaLabel='aria-lable'  disabled />
      <br /> 
      Size Large
      <Switch  ariaLabel='aria-lable' label='Однострочный' size={SWITCH_SIZE.Large} checked={isChecked} onChange={handleChange} />
      <br /> 
      Size Medium
      <Switch  ariaLabel='aria-lable' label='Однострочный' size={SWITCH_SIZE.Medium} checked={isChecked} onChange={handleChange} />
      <br /> 
      Size Small
      <Switch  ariaLabel='aria-lable' label='Однострочный' size={SWITCH_SIZE.Small} checked={isChecked} onChange={handleChange} />
      <br /> 

      Theme Dark  
      <Switch  ariaLabel='aria-lable' label='Однострочный' theme={SWITCH_THEME.Dark} size={SWITCH_SIZE.Small} checked={isChecked} onChange={handleChange}/>
      <br /> 
      Theme Green
      <Switch  ariaLabel='aria-lable' label='Однострочный' theme={SWITCH_THEME.Green} size={SWITCH_SIZE.Small} checked={isChecked} onChange={handleChange} />
      <br /> 
    </div>
  );
};
