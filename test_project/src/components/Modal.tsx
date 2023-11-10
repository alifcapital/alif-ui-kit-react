import React, { useState } from "react";
import { Modal } from "../../../src";

export const ModalApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button onClick={() => setIsOpen((prev) => !prev)}>TEST BUTTON</button>
      <Modal isOpen={isOpen} onOpenChange={setIsOpen} />
    </div>
  );
};