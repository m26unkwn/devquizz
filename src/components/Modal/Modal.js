/** @format */

import "./modal.css";

export const Modal = ({ children, modalClass }) => {
  return (
    <div
      className={`${
        modalClass ? modalClass : "modal-backdrop"
      } flex ai-center jc-center`}>
      {children}
    </div>
  );
};
