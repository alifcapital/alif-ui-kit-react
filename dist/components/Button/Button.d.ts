import React from 'react';
import { IButtonProps } from './ButtonTypes';
declare const Button: React.ForwardRefExoticComponent<Omit<IButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export { Button };
