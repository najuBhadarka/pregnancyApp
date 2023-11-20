import React from "react";
import { Modal, Button } from "react-bootstrap";

const Confirmation = (props) => {
  const {
    show,
    handleClose,
    title,
    description,
    children,
    noText,
    yesText,
    handleClick,
  } = props;
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        {title ? <Modal.Title>{title}</Modal.Title> : ""}
      </Modal.Header>
      <Modal.Body>{description ? description : children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          {noText}
        </Button>
        <Button variant="primary" onClick={handleClick}>
          {yesText}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Confirmation;
