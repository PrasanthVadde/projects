import { Component } from "react";
import axios from "axios";
import { FaPaw } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { Table } from "react-bootstrap";
import { Instagram } from "react-content-loader"; 
import { CgAdd } from "react-icons/cg";


export class Home extends Component {
  state = {
    products: [],
    newData: {},
    isLoading: false,
    contentVisibility: false,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const { status, data } = await axios.get(
        "https://fakestoreapi.com/products"
      );
      if (status == 200) {
        this.setState({
          products: data,
          isLoading: !this.state.isLoading,
          newData: data.slice(0, 1),
        });
      }
    } catch (err) {
      console.error(`Error: ${err}`);
    }
  };
  clickHandler = () => {
    this.setState({
      contentVisibility: true,
    });
  };

  addItemHandler = () => {
    const updatedData = [...this.state.products, ...this.state.newData];
    this.setState({
      products: updatedData,
    });
  };

  render() {
    return (
      <>
        <div
          style={{ display: "flex", flexDirection: "column", margin: "16px" }}
        >
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "24px",
              }}
            >
              <span>
                <FaPaw />
              </span>
              <h4>Prasanth Vadde</h4>
              <span>
                <a href="">
                  <FaUserAlt />
                </a>
              </span>
            </div>
          </>
          <div style={{ display: "flex", gap: "32px" }}>
            <div style={{ width: "25%", alignContent: "center" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <button
                  style={{
                    width: "50%",
                    backgroundColor: "transparent",
                    border: "none",
                  }}
                  onClick={this.clickHandler}
                >
                  Home
                </button>
                <button
                  style={{
                    width: "50%",
                    backgroundColor: "transparent",
                    border: "none",
                  }}
                >
                  About
                </button>
                <button
                  style={{
                    width: "50%",
                    backgroundColor: "transparent",
                    border: "none",
                  }}
                >
                  Contact
                </button>
              </div>
            </div>

            {this.state.contentVisibility ? (
              <div
                style={{ height: "85vh", overflowY: "auto", marginTop: "32px" }}
              >
                <button
                  onClick={this.addItemHandler}
                  style={{ position: "fixed", marginTop: "-32px" }}
                >
                  Add <CgAdd />
                </button>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>S.no</th>
                      <th>Title</th>
                      <th>Description</th>
                      <th>Image</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.products.map((eachProduct) => {
                      return (
                        <tr key={eachProduct.id}>
                          <td>{eachProduct.id}</td>
                          <td>{eachProduct.title}</td>
                          <td>{eachProduct.description}</td>
                          <td>
                            <img
                              src={eachProduct.image}
                              width={100}
                              height={100}
                            />
                          </td>
                          <td> ${eachProduct.price} </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            ) : (
              <><Instagram viewBox="0 0 380 70"/></>
            )}
          </div>
        </div>
      </>
    );
  }
}
