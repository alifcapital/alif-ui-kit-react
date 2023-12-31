'use client';

import React from 'react';

import { IIconButtonProps } from './IconButtonTypes';
import './IconButtonStyles.scss';

const IconButton = React.forwardRef<HTMLButtonElement, IIconButtonProps>((props, ref) => {
  const { id, ariaLabel, children, onClick } = props;

  const hadnleOnClick = () => {
    onClick && onClick();
  };

  return (
    <button
      type="button"
      onClick={hadnleOnClick}
      ref={ref}
      aria-label={ariaLabel}
      id={id}
      className="IconButton"
      tabIndex={-1}
    >
      <div style={{ display: 'flex' }} tabIndex={0}>
        {children}
      </div>
    </button>
  );
});

IconButton.displayName = 'IconButton';

export { IconButton };
