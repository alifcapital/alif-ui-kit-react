import React, { useState } from "react";
import { Modal } from "../../../src";

export const ModalApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  }

  return (
    <div>
      <button style={{padding: "50px"}} onClick={handleClick}>TEST MODAL</button>
      <Modal open={isOpen} onOpenChange={handleClick}>
        <div>
          <div style={{ fontSize: "30px", marginBottom: "30px" }}>
            HEADING
          </div>

          <button onClick={() => console.log("CLOSE")} style={{ backgroundColor: "#ff0000", color: "white", padding: "20px"}}>
            CLOSE
          </button>
        </div>
      </Modal>
    </div>
  );
};