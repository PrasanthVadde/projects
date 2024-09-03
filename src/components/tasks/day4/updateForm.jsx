import React, { Component } from "react";
import { FaPaw } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import styles from "./updateForm.module.css";
import { Instagram } from "react-content-loader";
import { Modal, Button, Form, Table } from "react-bootstrap";
import { GrUpdate } from "react-icons/gr";

export class UpdateForm extends Component {
  state = {
    data: [],
    modalShow: false,
    contentVisibility: false,
    userName: "",
    firstName: "",
    lastName: "",
    mobileNumber: "",
  };

  clickHandler = () => {
    this.setState({
      contentVisibility: true,
    });
  };

  ShowMore = () => {
    this.setState({
      modalShow: true,
    });
  };

  closeHandler = () => {
    this.setState({
      modalShow: false,
    });
  };

  saveHandler = () => {
    const { userName, firstName, lastName, mobileNumber } = this.state;
    const enteredData = { userName, firstName, lastName, mobileNumber };


    this.setState({
      data: [...this.state.data, enteredData],
      modalShow: false,
    });


  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  updateHandler = ()=>{

  }

  render() {
    return (
      <>
        <div className={styles.mainContainer}>
          <div className={styles.header}>
            <span>
              <FaPaw />
            </span>
            <h4>Prasanth Vadde</h4>
            <span>
              <a href="#">
                <FaUserAlt />
              </a>
            </span>
          </div>

          <div className={styles.section2}>
            <div className={styles.sideNavbar}>
              <button
                className={styles.navbarItems}
                onClick={this.clickHandler}
              >
                Home
              </button>
              <button className={styles.navbarItems}>About</button>
              <button className={styles.navbarItems}>Contact</button>
            </div>

            <div className={styles.main}>
              {this.state.contentVisibility ? (
                <div>
                  <button onClick={this.ShowMore}>Add</button>

                  {this.state.data.length > 0 && (
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>S.no</th>
                          <th>Username</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Mobile Number</th>
                          <th>Update</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.data.map((eachPerson, ind) => {
                          return (
                            <React.Fragment key={ind}>
                              <tr>
                                <td>{ind + 1}</td>
                                <td>{eachPerson.userName}</td>
                                <td>{eachPerson.firstName}</td>
                                <td>{eachPerson.lastName}</td>
                                <td>{eachPerson.mobileNumber}</td>
                                <td><GrUpdate  onClick={()=>this.updateHandler(ind)}/></td>
                              </tr>
                            </React.Fragment>
                          );
                        })}
                      </tbody>
                    </Table>
                  )}
                </div>
              ) : (
                <>
                  <Instagram viewBox="0 0 380 70" />
                </>
              )}
            </div>
          </div>

          <Modal
            show={this.state.modalShow}
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
                    value={this.state.userName}
                    onChange={this.handleInputChange}
                    placeholder="Enter User Name"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formFirstName">
                  <Form.Label> First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.handleInputChange}
                    placeholder="first name"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formLastName">
                  <Form.Label> Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.handleInputChange}
                    placeholder="last name"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMobileNumber">
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control
                    type="number"
                    name="mobileNumber"
                    value={this.state.mobileNumber}
                    onChange={this.handleInputChange}
                    placeholder="mobile number"
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.closeHandler}>Close</Button>
              <Button
                className="btn-primary"
                onClick={() => this.saveHandler()}
              >
                Save
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </>
    );
  }
}
