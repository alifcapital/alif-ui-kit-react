import React, { useState } from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Bell } from 'alif-icon-kit-react';
import { Popover } from '../Popover';

describe('Popover', () => {
  const popoverContent = 'test content';

  const TestComponent = ({ initialState = false }: { initialState?: boolean }) => {
    const [open, setOpen] = useState(initialState);

    return (
      <Popover
        open={open}
        onOpenChange={() => setOpen((prev) => !prev)}
        ariaLabel="notification label"
        triggerElement={<Bell />}
      >
        {popoverContent}
      </Popover>
    );
  };

  it('should render trigger element', () => {
    const { container } = render(<TestComponent />);

    expect(container.getElementsByClassName('Popover-trigger')[0].children[0].tagName).toBe('svg');
  });

  it('should render popover content', async () => {
    const { findByText } = render(<TestComponent />);

    fireEvent.click(screen.getByRole('button'));

    const element = await findByText(popoverContent);

    expect(element.textContent).toBe(popoverContent);
  });

  it('should close popover content', async () => {
    const { queryByText } = render(<TestComponent initialState />);

    fireEvent.click(screen.getByRole('button'));

    await waitFor(() => {
      const contentElement = queryByText(popoverContent);

      expect(contentElement).not.toBeInTheDocument();
    });
  });

  it('should close the popover content when the escape key is pressed', async () => {
    const { queryByText } = render(<TestComponent initialState />);

    fireEvent.keyDown(document, { key: 'Escape' });

    await waitFor(() => {
      const contentElement = queryByText(popoverContent);

      expect(contentElement).not.toBeInTheDocument();
    });
  });
});
