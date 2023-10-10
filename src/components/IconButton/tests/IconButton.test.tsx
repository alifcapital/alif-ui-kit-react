import { render, screen } from '@testing-library/react';
import React from 'react';
import { IconButton } from '../IconButton';

describe('IconButton', () => {
  const iconName = 'TEST_SVG';
  const Icon = () => (
    <svg role="img">
      <title>{iconName}</title>
    </svg>
  );

  it('should have button type by default', () => {
    render(
      <IconButton ariaLabel="IconButton">
        <Icon />
      </IconButton>,
    );

    const button = screen.getByRole('button');

    expect(button).toHaveAttribute('type', 'button');
  });

  it('should have icon', () => {
    const { getByRole } = render(
      <IconButton ariaLabel="IconButton">
        <Icon />
      </IconButton>,
    );

    expect(getByRole('img', { name: iconName })).toBeInTheDocument();
  });
});
