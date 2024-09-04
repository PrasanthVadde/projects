import { Modal, Form, Button } from "react-bootstrap";

export const DefaultModal = (props) => {
  const {
    showModel,
    userName,
    firstName,
    lastName,
    mobileNumber,
    inputHandler,
    closeHandler,
    saveHandler,
  } = props;

  return (
    <>
      <Modal
        show={showModel}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Person Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formUserName">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                name="userName"
                value={userName}
                onChange={inputHandler}
                placeholder="Enter User Name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formFirstName">
              <Form.Label> First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={firstName}
                onChange={inputHandler}
                placeholder="first name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formLastName">
              <Form.Label> Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={lastName}
                onChange={inputHandler}
                placeholder="last name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMobileNumber">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="number"
                name="mobileNumber"
                value={mobileNumber}
                onChange={inputHandler}
                placeholder="mobile number"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={closeHandler}>Close</Button>
          <Button className="btn-primary" onClick={() => saveHandler()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
