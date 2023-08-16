import React from 'react';
import { render } from '@testing-library/react';

import { Switch } from '../Switch';
import { SWITCH_THEME, SWITCH_SIZE } from '../SwitchConstants';

describe('Switch', () => {
  it('should have label', () => {
    const label = 'Simple Switch';
    const { getByText } = render(<Switch ariaLabel={label} label={label} />);

    expect(getByText(label).innerHTML).toBe(label);
  });

  it('it should be checked', () => {
    const { container } = render(<Switch checked ariaLabel="switch" />);
    const elements = container.getElementsByClassName('Switch-light-active');

    expect(elements.length).toBe(1);
  });

  it('it should be unchecked', () => {
    const { container } = render(<Switch checked={false} ariaLabel="switch" />);
    const elements = container.getElementsByClassName('Switch-light-active');

    expect(elements.length).not.toBe(1);
  });

  it('it should be disabled', () => {
    const { container } = render(<Switch disabled ariaLabel="switch" />);
    const elements = container.getElementsByClassName('Switch-disabled');

    expect(elements.length).toBe(1);
  });

  it('should have dark mode', () => {
    const { container } = render(
      <Switch ariaLabel="ariaLabel" label="Label" theme={SWITCH_THEME.Dark} />,
    );

    expect(container.getElementsByClassName('Switch-dark').length).toBe(1);
    expect(container.getElementsByClassName('Switch-label-dark').length).toBe(1);
  });

  it('should have green mode', () => {
    const { container } = render(
      <Switch ariaLabel="ariaLabel" label="Label" theme={SWITCH_THEME.Green} />,
    );

    expect(container.getElementsByClassName('Switch-green').length).toBe(1);
    expect(container.getElementsByClassName('Switch-label-green').length).toBe(1);
  });

  it('should have large size', () => {
    const { container } = render(
      <Switch ariaLabel="ariaLabel" label="Label" size={SWITCH_SIZE.Large} />,
    );

    expect(container.getElementsByClassName('Switch-large').length).toBe(1);
  });

  it('should have medium size', () => {
    const { container } = render(
      <Switch ariaLabel="ariaLabel" label="Label" size={SWITCH_SIZE.Medium} />,
    );

    expect(container.getElementsByClassName('Switch-medium').length).toBe(1);
  });

  it('should have small size', () => {
    const { container } = render(
      <Switch ariaLabel="ariaLabel" label="Label" size={SWITCH_SIZE.Small} />,
    );

    expect(container.getElementsByClassName('Switch-small').length).toBe(1);
  });
});
