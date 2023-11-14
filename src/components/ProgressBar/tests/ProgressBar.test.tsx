import React from 'react';
import { render } from '@testing-library/react';

import { PROGRESS_BAR_SIZE, ProgressBar } from '..';

describe('ProgressBar', () => {
  it('should render progress indicator', () => {
    const { container } = render(<ProgressBar progress={4} />);

    const progressBar = container.getElementsByClassName('ProgressBar-indicator')[0];

    expect(progressBar).toHaveStyle({ width: '4%' });
  });

  it('should set indicator color to red', () => {
    const { container } = render(<ProgressBar progress={4} indicatorColor="red" />);

    const progressBar = container.getElementsByClassName('ProgressBar-indicator')[0];

    expect(progressBar).toHaveStyle({ 'background-color': 'red' });
  });

  it('should have medium size', () => {
    const { container } = render(<ProgressBar progress={4} size={PROGRESS_BAR_SIZE.Medium} />);

    expect(container.getElementsByClassName('ProgressBar-medium').length).toBe(1);
  });

  it('should have small size', () => {
    const { container } = render(<ProgressBar progress={4} size={PROGRESS_BAR_SIZE.Small} />);

    expect(container.getElementsByClassName('ProgressBar-small').length).toBe(1);
  });
});
