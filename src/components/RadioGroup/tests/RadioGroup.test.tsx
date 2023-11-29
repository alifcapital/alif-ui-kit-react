import React from 'react';
import { render } from '@testing-library/react';

import { RadioGroup } from '../RadioGroup';

describe('Radio', () => {
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
    const elements = container.getElementsByClassName('RadioGroup-button');

    expect(elements.length).toBe(1);
  });
});
