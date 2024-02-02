import { Search } from 'alif-icon-kit-react';

import { Button, BUTTON_COLOR, BUTTON_SIZE, BUTTON_VARIANT } from '../../../src';
import { useRef } from 'react';

export const ButtonApp: React.FC = () => {
  const ref = useRef<HTMLButtonElement>(null);

  return (
    <div>
      <Button ref={ref} ariaLabel="Button" hasFullWidth>
        Кнопка
      </Button>
      <br /> <br />
    </div>
  );
};
