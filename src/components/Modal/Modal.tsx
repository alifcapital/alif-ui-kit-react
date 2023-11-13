import React, { useEffect, useRef, useState } from 'react';
import { IModalProps } from './ModalTypes';
import './ModalStyles.scss';

const ModalContent = ({
  children,
  open,
  onOpenChange,
  disableBackdropClick,
  disableEscapeKey,
}: IModalProps) => {
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
    if (disableBackdropClick) {
      return undefined;
    }

    const listener = (event: any) => {
      if (!modalRef.current || modalRef.current.contains(event.target)) {
        return;
      }

      onOpenChange();
      setIsLock(false);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [onOpenChange]);

  useEffect(() => {
    if (disableEscapeKey) {
      return undefined;
    }

    const keyListener = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') {
        onOpenChange();
        setIsLock(false);
      }
    };

    document.addEventListener('keydown', keyListener);

    return () => {
      document.removeEventListener('keydown', keyListener);
    };
  }, [disableBackdropClick, onOpenChange]);

  return (
    <div className="Modal-backdrop">
      <div ref={modalRef} className="Modal-content">
        {children}
      </div>
    </div>
  );
};

export const Modal = ({
  open,
  onOpenChange,
  children,
  disableBackdropClick = false,
  disableEscapeKey = false,
}: IModalProps) => {
  if (!open) {
    return null;
  }

  return (
    <div className="Modal">
      <ModalContent
        open={open}
        onOpenChange={onOpenChange}
        disableBackdropClick={disableBackdropClick}
        disableEscapeKey={disableEscapeKey}
      >
        {children}
      </ModalContent>
    </div>
  );
};
