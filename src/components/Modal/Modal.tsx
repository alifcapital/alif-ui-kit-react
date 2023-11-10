import React, { useEffect, useRef } from 'react';
import './ModalStyles.scss';
import { IModalProps } from './ModalTypes';

export const Modal = (props: IModalProps) => {
  const { isOpen, onOpenChange } = props;

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const listener = (event: any) => {
      if (!modalRef.current || modalRef.current.contains(event.target)) {
        return;
      }
      onOpenChange(false);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [onOpenChange]);

  useEffect(() => {
    const keyListener = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') {
        onOpenChange(false);
      }
    };

    document.addEventListener('keydown', keyListener);

    return () => {
      document.removeEventListener('keydown', keyListener);
    };
  }, [onOpenChange]);

  return (
    <div className="Modal">
      {isOpen && (
        <div className="Modal-backdrop">
          <div ref={modalRef} className="Modal-content">
            test
          </div>
        </div>
      )}
    </div>
  );
};
