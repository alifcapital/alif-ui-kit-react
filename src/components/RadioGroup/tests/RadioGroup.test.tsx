import React from 'react';
import { render } from '@testing-library/react';

import { RadioGroup } from '../RadioGroup';

describe('Radio', () => {
  it('should have text value', () => {
    const label = 'Simple RadioGroup';
    const { getByText } = render(<RadioGroup ariaLabel={label} options={[]} name="" />);

    expect(getByText(label).innerHTML).toBe(label);
  });

  it('it should be checked', () => {
    const { container } = render(
      <RadioGroup
        disabled={true}
        name="red"
        options={[
          {
            value: '1',
            key: '1',
            label: 'red',
          },
        ]}
        ariaLabel="radio"
      />,
    );
    const elements = container.getElementsByClassName('RadioGroup-checked');

    expect(elements.length).toBe(1);
  });
});
