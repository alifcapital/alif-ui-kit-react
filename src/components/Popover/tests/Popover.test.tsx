import React, { useState } from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Bell } from 'alif-icon-kit-react';
import { Popover } from '../Popover';

describe('Popover', () => {
  const popoverContent = 'test content';
  const triggerElement = <Bell />;

  it('should render trigger element', () => {
    const { container } = render(
      <Popover open ariaLabel="notification label" triggerElement={triggerElement}>
        {popoverContent}
      </Popover>,
    );

    expect(container.getElementsByClassName('Popover-trigger')[0].children[0].tagName).toBe('svg');
  });

  it('should render content', async () => {
    const TestComponent = () => {
      const [open, setOpen] = useState(false);

      return (
        <Popover
          open={open}
          onOpenChange={() => setOpen((prev) => !prev)}
          ariaLabel="notification label"
          triggerElement={triggerElement}
        >
          {popoverContent}
        </Popover>
      );
    };

    const { findByText } = render(<TestComponent />);

    fireEvent.click(screen.getByRole('button'));

    const element = await findByText(popoverContent);

    expect(element.textContent).toBe(popoverContent);
  });

  it('should close popover content', async () => {
    const TestComponent = () => {
      const [open, setOpen] = useState(true);

      return (
        <Popover
          open={open}
          onOpenChange={() => setOpen((prev) => !prev)}
          ariaLabel="notification label"
          triggerElement={triggerElement}
        >
          {popoverContent}
        </Popover>
      );
    };

    const { queryByText } = render(<TestComponent />);

    fireEvent.keyDown(document, { key: 'Escape' });

    await waitFor(() => {
      const contentElement = queryByText(popoverContent);
      expect(contentElement).not.toBeInTheDocument();
    });
  });
});
