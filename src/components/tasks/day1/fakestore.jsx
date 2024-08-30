import { Component } from "react";
import axios from "axios";
import { CustomSpinner } from "../../spinners/spinners";
import { Card, Button } from "react-bootstrap";
import { InstagramLoader } from "../../loaders/loaders";
export class FakeStore extends Component {
  state = {
    products: [],
    isLoading: true,
    cardClicked: false,
    cardClicked1: false,
    error: "",
    specificData: [],
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const { status, data } = await axios.get(
        "https://fakestoreapi.com/products"
      );
      if (status === 200) {
        this.setState({
          products: data,
          isLoading: false,
        });
      }
    } catch (error) {
      this.setState({
        error: error.message,
        isLoading: false,
      });
    }
  };

  clickHandler = (itemId) => {
    this.state.products.map((eachProduct) => {
      if (eachProduct.id === itemId) {
        this.setState(
          {
            cardClicked: !this.state.cardClicked,
            cardClicked1: true,
            specificData: eachProduct,
          },
          () => {
            console.log(this.state.specificData, this.state.cardClicked);
          }
        );
      }
    });
  };

  render() {
    return (
      <>
        <div
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "row",
            gap: "32px",
            justifyContent: "space-evenly",
          }}
        >
          <div
            style={{
              overflowY: "auto",
            }}
          >
            {this.state.isLoading ? (
              <CustomSpinner />
            ) : (
              <>
                {this.state.products.map((eachItem) => {
                  return (
                    <div key={eachItem.id}>
                      <Card
                        style={{ width: "18rem" }}
                        onClick={() => this.clickHandler(eachItem.id)}
                      >
                        <Card.Img variant="top" src={eachItem.image} />
                        <Card.Body>
                          <Card.Title>{eachItem.title}</Card.Title>
                          <Button variant="primary">Click to see more</Button>
                        </Card.Body>
                      </Card>
                    </div>
                  );
                })}
              </>
            )}
          </div>
          <div>
            {this.state.cardClicked || this.state.cardClicked1 ? (
              <Card style={{ width: "45rem", height: "100%" }}>
                <Card.Img
                  variant="top"
                  src={this.state.specificData.image}
                  style={{
                    height: "400px",
                    width: "300px",
                    alignSelf: "center",
                  }}
                />
                <Card.Body>
                  <Card.Title>{this.state.specificData.title}</Card.Title>
                  <Card.Text>{this.state.specificData.description}</Card.Text>
                  <Button variant="primary">
                    Price: ${this.state.specificData.price}
                  </Button>
                </Card.Body>
              </Card>
            ) : (
              <>
                <InstagramLoader />
              </>
            )}
          </div>
        </div>
      </>
    );
  }
}
