import { Search } from 'alif-icon-kit-react';

import { IconButton } from '../../../src';
import { useRef } from 'react';


export const IconButtonApp: React.FC = () => {
  const ref = useRef<HTMLButtonElement>(null);

  return (
    <div>
       Icon Button <br/>
      <IconButton ref={ref} ariaLabel='icon button' >
        <Search/>
      </IconButton>
      <br /> <br />
    </div>
  );
};