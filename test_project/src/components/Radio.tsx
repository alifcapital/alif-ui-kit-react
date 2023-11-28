
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
        <Radio ariaLabel="radio" name="red"/>
        <Radio ariaLabel="radio" name="red"/>
        <Radio ariaLabel="radio" name="red"/>
        <Radio ariaLabel="radio" name="blue"/>



    </div>
  );
};
