import React from 'react';
import { render } from '@testing-library/react';

import { Checkbox } from '../Checkbox';
import { CHECKBOX_VALUE } from '../CheckboxConstants';

describe('Checkbox', () => {
  it('should have text value', () => {
    const label = 'Simple Checkbox';
    const { getByText } = render(<Checkbox ariaLabel={label} label={label} />);

    expect(getByText(label).innerHTML).toBe(label);
  });

  it('it should be checked', () => {
    const { container } = render(<Checkbox value={true} ariaLabel="checkbox" />);
    const elements = container.getElementsByClassName('Checkbox-checked');

    expect(elements.length).toBe(1);
  });

  it('it should be unchecked', () => {
    const { container } = render(<Checkbox value={false} ariaLabel="checkbox" />);
    const elements = container.getElementsByClassName('Checkbox-unchecked');

    expect(elements.length).toBe(1);
  });

  it('it should be indeterminate', () => {
    const { container } = render(
      <Checkbox value={CHECKBOX_VALUE.indeterminate} ariaLabel="checkbox" />,
    );
    const elements = container.getElementsByClassName('Checkbox-checked');

    expect(elements.length).toBe(1);
  });

  it('it should be with error', () => {
    const { container } = render(<Checkbox error ariaLabel="checkbox" />);
    const elements = container.getElementsByClassName('Checkbox-error');

    expect(elements.length).toBe(1);
  });

  it('it should be disabled', () => {
    const { container } = render(<Checkbox disabled ariaLabel="checkbox" />);
    const elements = container.getElementsByClassName('Checkbox-disabled');

    expect(elements.length).toBe(1);
  });
});
