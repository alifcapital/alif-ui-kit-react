import React from 'react';
import { render } from '@testing-library/react';

import { Radio } from '../Radio';

describe('Radio', () => {
  it('should have text value', () => {
    const label = 'Simple Radio';
    const { getByText } = render(<Radio ariaLabel={label} label={label} />);

    expect(getByText(label).innerHTML).toBe(label);
  });

  it('it should be checked', () => {
    const { container } = render(<Radio value={true} ariaLabel="radio" />);
    const elements = container.getElementsByClassName('Radio-checked');

    expect(elements.length).toBe(1);
  });

  it('it should be unchecked', () => {
    const { container } = render(<Radio value={false} ariaLabel="checkbox" />);
    const elements = container.getElementsByClassName('Radio-unchecked');

    expect(elements.length).toBe(1);
  });

  it('it should be with error', () => {
    const { container } = render(<Radio error ariaLabel="checkbox" />);
    const elements = container.getElementsByClassName('Radio-error');

    expect(elements.length).toBe(1);
  });

  it('it should be disabled', () => {
    const { container } = render(<Radio disabled ariaLabel="checkbox" />);
    const elements = container.getElementsByClassName('Radio-disabled');

    expect(elements.length).toBe(1);
  });
});
