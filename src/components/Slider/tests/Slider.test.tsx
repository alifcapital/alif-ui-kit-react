import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { Slider } from '..';

describe('Slider', () => {
  it('should change value on user interaction', () => {
    const handleChange = jest.fn();
    const { getByRole } = render(<Slider ariaLabel="Slider label" onChange={handleChange} />);

    const slider = getByRole('slider');
    fireEvent.change(slider, { target: { value: 30 } });

    expect(handleChange).toBeCalledWith(30);
  });
});
