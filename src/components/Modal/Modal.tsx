import React, { useEffect, useRef, useState } from 'react';
import { IModalProps } from './ModalTypes';
import './ModalStyles.scss';

const ModalTrigger = ({ open, setIsOpen }: Pick<IModalProps, 'setIsOpen' | 'open'>) => {
  return (
    <button style={{ padding: '200px' }} onClick={() => setIsOpen(true)}>
      TEST BUTTON
    </button>
  );
};

const ModalContent = ({
  children,
  open,
  setIsOpen,
}: Pick<IModalProps, 'children' | 'open' | 'setIsOpen'>) => {
  const [isLock, setIsLock] = useState(true);

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isLock && open) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [isLock, open]);

  useEffect(() => {
    const listener = (event: any) => {
      if (!modalRef.current || modalRef.current.contains(event.target)) {
        return;
      }

      setIsOpen(false);
      setIsLock(false);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [setIsOpen]);

  useEffect(() => {
    const keyListener = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        setIsLock(false);
      }
    };

    document.addEventListener('keydown', keyListener);

    return () => {
      document.removeEventListener('keydown', keyListener);
    };
  }, [setIsOpen]);

  return (
    <div className="Modal-backdrop">
      <div ref={modalRef} className="Modal-content">
        {children}
      </div>
    </div>
  );
};

export const Modal = ({ open, setIsOpen, children }: IModalProps) => {
  return (
    <div className="Modal">
      <ModalTrigger open={open} setIsOpen={setIsOpen} />

      {open && (
        <ModalContent open={open} setIsOpen={setIsOpen}>
          {children}
        </ModalContent>
      )}
    </div>
  );
};
