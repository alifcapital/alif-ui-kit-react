import React, { useState } from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Modal } from '../Modal';

describe('Modal', () => {
  const modalHeading = 'HEADING';

  const TestComponent = ({ initialState = false }: { initialState?: boolean }) => {
    const [isOpen, setIsOpen] = useState(initialState);

    const handleClick = () => {
      setIsOpen((prev) => !prev);
    };

    return (
      <div>
        <button style={{ padding: '50px' }} onClick={handleClick}>
          TEST MODAL
        </button>

        <Modal open={isOpen} onOpenChange={handleClick}>
          <div>
            <div style={{ fontSize: '30px', marginBottom: '30px' }}>HEADING</div>

            <button style={{ backgroundColor: '#ff0000', color: 'white', padding: '20px' }}>
              CLOSE
            </button>
          </div>
        </Modal>
      </div>
    );
  };

  it('should render modal', async () => {
    const { findByText } = render(<TestComponent />);

    fireEvent.click(screen.getByRole('button'));

    const element = await findByText(modalHeading);

    expect(element.textContent).toBe(modalHeading);
  });

  it('should close modal when clicking on backdrop', async () => {
    const { queryByText } = render(<TestComponent initialState />);

    fireEvent.mouseDown(document);

    await waitFor(() => {
      const contentElement = queryByText(modalHeading);

      expect(contentElement).not.toBeInTheDocument();
    });
  });

  it('should close modal when the escape key is pressed', async () => {
    const { queryByText } = render(<TestComponent initialState />);

    fireEvent.keyDown(document, { key: 'Escape' });

    await waitFor(() => {
      const contentElement = queryByText(modalHeading);

      expect(contentElement).not.toBeInTheDocument();
    });
  });
});
