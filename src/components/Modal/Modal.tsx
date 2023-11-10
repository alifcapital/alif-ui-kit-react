import React, { useEffect, useRef, useState } from 'react';
import './ModalStyles.scss';

export const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const listener = (event: any) => {
      if (!modalRef.current || modalRef.current.contains(event.target)) {
        return;
      }
      setIsOpen(false);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, []);

  return (
    <div className="Modal">
      <button onClick={() => setIsOpen((prev) => !prev)}>TEST BUTTON</button>

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
