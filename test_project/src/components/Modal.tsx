import React, { useState } from "react";
import { Modal } from "../../../src";

export const ModalApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      {/* <button style={{padding: "200px"}} onClick={() => setIsOpen((prev) => !prev)}>TEST BUTTON</button> */}
      <Modal open={isOpen} setIsOpen={setIsOpen} >test</Modal>
    </div>
  );
};