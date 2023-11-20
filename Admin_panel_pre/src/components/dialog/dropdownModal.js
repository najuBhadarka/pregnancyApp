import React from "react";
import { Modal } from "react-bootstrap";

const DropdownModal = (props) => {
  const {
    show,
    handleClose,
    title,
    children,
  } = props;

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          {title ? <Modal.Title>{title}</Modal.Title> : ""}
        </Modal.Header>
        {children}
      </Modal>
    </>
  );
};

export default DropdownModal;
