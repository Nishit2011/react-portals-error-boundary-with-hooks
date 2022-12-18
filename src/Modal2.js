import React from "react";
import ReactDOM from "react-dom";

const Modal2 = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="modal">{children}</div>,
    document.body
  );
};

export default Modal2;
