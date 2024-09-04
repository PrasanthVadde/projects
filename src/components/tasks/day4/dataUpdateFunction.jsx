import { FaPaw } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import styles from "./updateForm.module.css";
import { Instagram } from "react-content-loader";
import { Table } from "react-bootstrap";
import { DefaultModal } from "../../modal/modal";
import { useState } from "react";

export const UpdateFunction = () => {
  const [data, setData] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    mobileNumber: "",
  });
  const [modalShow, setModalShow] = useState(false);
  const [content, setContent] = useState(false);

  const clickHandler = () => {
    setContent(!content);
  };

  const showMore = () => {
    setModalShow(!modalShow);
  };

  const saveHandler = () => {
    console.log(data)
    setData({
      modalShow: false,
      userName: "",
      firstName: "",
      lastName: "",
      mobileNumber: "",
    });
    setModalShow(false);
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData({
      [name]: value,
    });
  };

  const heads =Object.keys(data)
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
            <button className={styles.navbarItems} onClick={clickHandler}>
              Home
            </button>
            <button className={styles.navbarItems}>About</button>
            <button className={styles.navbarItems}>Contact</button>
          </div>

          <div className={styles.main}>
            {content ? (
              <div>
                <button onClick={showMore}>Add</button>

                {/* {data.length > 0 && (
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

                    </tbody>
                  </Table>
                )} */}

                {
                    heads.length>0? <>Data</>:<></>
                }
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
        showModel={modalShow}
        userName={data.userName}
        firstName={data.firstName}
        lastName={data.lastName}
        mobileNumber={data.mobileNumber}
        inputHandler={handleInputChange}
        closeHandler={showMore}
        saveHandler={saveHandler}
      />
    </>
  );
};
