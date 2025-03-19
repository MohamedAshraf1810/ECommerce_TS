import { Button, Card, Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import WarningIcon from "@assets/SVG/warning.svg?react";

const BackendNotify = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Check if the modal has been closed before
    const hasSeenModal = sessionStorage.getItem("backendWarningSeen");

    if (hasSeenModal) {
      setShow(false); // If closed before, don't show it again until refresh
    }
  }, []);

  const handleClose = () => {
    setShow(false);
    sessionStorage.setItem("backendWarningSeen", "true"); // Mark modal as seen
  };

  return (
    <Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="d-flex">
            Backend warning
            <WarningIcon
              width="30px"
              height="30px"
              style={{ margin: "5px 0px 0px 8px" }}
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Some operations may be limited due to backend restrictions on the free
          server.
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="warning"
            onClick={handleClose}
            style={{ border: "none" }}
          >
            Understand and accept
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>
  );
};

export default BackendNotify;
