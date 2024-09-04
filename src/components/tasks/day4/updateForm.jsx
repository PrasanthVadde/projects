import React, { Component } from "react";
import { FaPaw } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import styles from "./updateForm.module.css";
import { Instagram } from "react-content-loader";
import { Table } from "react-bootstrap";
import { GrUpdate } from "react-icons/gr";
import { DefaultModal } from "../../modal/modal";
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
      userName: "",
      firstName: "",
      lastName: "",
     mobileNumber: "",
    });

  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  updateHandler = (ind) => {
    const updatingDetails = this.state.data[ind]
    console.log(updatingDetails)
    this.setState({
      userName:updatingDetails.userName,
      firstName:updatingDetails.firstName,
      lastName:updatingDetails.lastName,
      mobileNumber:updatingDetails.mobileNumber,
      modalShow: true,
    })
  };

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
                                <td>
                                  <GrUpdate
                                    onClick={() => this.updateHandler(ind)}
                                  />
                                </td>
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
        </div>
        <DefaultModal
          showModel={this.state.modalShow}
          userName={this.state.userName}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          mobileNumber={this.state.mobileNumber}
          inputHandler ={this.handleInputChange}
          closeHandler ={this.closeHandler}
          saveHandler={this.saveHandler}
        />
      </>
    );
  }
}



// import { Component } from "react";
// import { FaPaw } from "react-icons/fa6";
// import { FaUserAlt } from "react-icons/fa";
// import styles from "./updateForm.module.css";
// import { Instagram } from "react-content-loader";
// import { Table } from "react-bootstrap";
// import { GrUpdate } from "react-icons/gr";
// import { DefaultModal } from "../../modal/modal";

// export class UpdateForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data:[],
//       modalShow: false,
//       contentVisibility: false,
//       userName: "",
//       firstName: "",
//       lastName: "",
//       mobileNumber: "",
//       updateIndex: null,
//     };
//   }

//   componentDidMount() {
//     // Load data from local storage when component mounts
//     const savedData = JSON.parse(localStorage.getItem('data'));
//     this.setState({ data: savedData });
//   }

//   clickHandler = () => {
//     this.setState({
//       contentVisibility: true,
//     });
//   };

//   ShowMore = () => {
//     this.setState({
//       modalShow: true,
//       userName: "",
//       firstName: "",
//       lastName: "",
//       mobileNumber: "",
//       updateIndex: null,
//     });
//   };

//   closeHandler = () => {
//     this.setState({
//       modalShow: false,
//     });
//   };

//   saveHandler = () => {
//     const { userName, firstName, lastName, mobileNumber, updateIndex } = this.state;
//     const enteredData = { userName, firstName, lastName, mobileNumber };

//     let updatedData = JSON.parse(localStorage.getItem('data'));

//     if (updateIndex !== null) {
//       // Update existing entry
//       updatedData[updateIndex] = enteredData;
//     } else {
//       // Add new entry
//       updatedData.push(enteredData);
//     }

//     localStorage.setItem('data', JSON.stringify(updatedData));
//     this.setState({
//       data: updatedData,
//       modalShow: false,
//       userName: "",
//       firstName: "",
//       lastName: "",
//       mobileNumber: "",
//       updateIndex: null,
//     });
//   };

//   handleInputChange = (event) => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value,
//     });
//   };

//   updateHandler = (ind) => {
//     const updatingDetails = this.state.data[ind];
//     this.setState({
//       userName: updatingDetails.userName,
//       firstName: updatingDetails.firstName,
//       lastName: updatingDetails.lastName,
//       mobileNumber: updatingDetails.mobileNumber,
//       modalShow: true,
//       updateIndex: ind,
//     });
//   };

//   render() {
//     return (
//       <>
//         <div className={styles.mainContainer}>
//           <div className={styles.header}>
//             <span>
//               <FaPaw />
//             </span>
//             <h4>Prasanth Vadde</h4>
//             <span>
//               <a href="#">
//                 <FaUserAlt />
//               </a>
//             </span>
//           </div>

//           <div className={styles.section2}>
//             <div className={styles.sideNavbar}>
//               <button className={styles.navbarItems} onClick={this.clickHandler}>
//                 Home
//               </button>
//               <button className={styles.navbarItems}>About</button>
//               <button className={styles.navbarItems}>Contact</button>
//             </div>

//             <div className={styles.main}>
//               {this.state.contentVisibility ? (
//                 <div>
//                   <button onClick={this.ShowMore}>Add</button>

//                   {this.state.data.length > 0 && (
//                     <Table striped bordered hover>
//                       <thead>
//                         <tr>
//                           <th>S.no</th>
//                           <th>Username</th>
//                           <th>First Name</th>
//                           <th>Last Name</th>
//                           <th>Mobile Number</th>
//                           <th>Update</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {this.state.data.map((eachPerson, ind) => (
//                           <tr key={ind}>
//                             <td>{ind + 1}</td>
//                             <td>{eachPerson.userName}</td>
//                             <td>{eachPerson.firstName}</td>
//                             <td>{eachPerson.lastName}</td>
//                             <td>{eachPerson.mobileNumber}</td>
//                             <td>
//                               <GrUpdate onClick={() => this.updateHandler(ind)} />
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </Table>
//                   )}
//                 </div>
//               ) : (
//                 <Instagram viewBox="0 0 380 70" />
//               )}
//             </div>
//           </div>
//         </div>
//         <DefaultModal
//           showModel={this.state.modalShow}
//           userName={this.state.userName}
//           firstName={this.state.firstName}
//           lastName={this.state.lastName}
//           mobileNumber={this.state.mobileNumber}
//           inputHandler={this.handleInputChange}
//           closeHandler={this.closeHandler}
//           saveHandler={this.saveHandler}
//         />
//       </>
//     );
//   }
// }

