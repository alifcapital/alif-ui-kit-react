import React from 'react';
import clsx from 'clsx';

import { ITextProps } from './TextTypes';
import './TextStyles.scss';

export const Text: React.FC<ITextProps> = ({ children, bold, underline, uppercase, className }) => (
  <div
    className={clsx({
      ['Text']: true,
      ['Text-bold']: !!bold,
      ['Text-underline']: !!underline,
      ['Text-uppercase']: !!uppercase,

      [className || '']: !!className,
    })}
  >
    {children}
  </div>
);
