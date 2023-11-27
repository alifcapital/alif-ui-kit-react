import React, { useEffect, useRef, useState } from 'react';
import FocusLock from 'react-focus-lock';
import { IModalProps } from './ModalTypes';
import './ModalStyles.scss';
import clsx from 'clsx';

const ModalContent = (props: IModalProps) => {
  const { children, open, onOpenChange, disableBackdropClick, disableEscapeKey, contentClassName } =
    props;

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
      return;
    }

    const listener = (event: MouseEvent | TouchEvent) => {
      if (!modalRef.current || modalRef.current.contains(event.target as Node)) {
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
  }, [disableBackdropClick, onOpenChange]);

  useEffect(() => {
    if (disableEscapeKey) {
      return;
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
  }, [disableBackdropClick, disableEscapeKey, onOpenChange]);

  return (
    <div className="Modal-backdrop">
      <div
        ref={modalRef}
        aria-modal="true"
        role="dialog"
        className={clsx({
          ['Modal-content']: true,
          [contentClassName || '']: !!contentClassName,
        })}
      >
        {children}
      </div>
    </div>
  );
};

export const Modal = (props: IModalProps) => {
  const {
    open,
    onOpenChange,
    children,
    disableBackdropClick = false,
    disableEscapeKey = false,
    contentClassName,
  } = props;

  if (!open) {
    return null;
  }

  return (
    <FocusLock>
      <div className="Modal">
        <ModalContent
          open={open}
          onOpenChange={onOpenChange}
          disableBackdropClick={disableBackdropClick}
          disableEscapeKey={disableEscapeKey}
          contentClassName={contentClassName}
        >
          {children}
        </ModalContent>
      </div>
    </FocusLock>
  );
};
