import React, { Component } from "react";
import { Button, Collapse, Media, Row, Col } from "react-bootstrap";
class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  render() {
    return (
      <div>
        <Button
          className="item-details-button"
          bsStyle="link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? "See" : "Hide"} item details
          {this.state.open === false ? "+" : "-"}
        </Button>
        <br />
        <Collapse className="mt-4" in={this.state.open}>
          <Media>
            <img
              width={60}
              height={80}
              alt={"thumbnail"}
              src={
                "https://images-na.ssl-images-amazon.com/images/I/71BYUcgBPeL._AC_SL1500_.jpg"
              }
            ></img>
            <Media.Body>
              <p>OFM 3085 Racing Style Leather Gaming Chair, Blue </p>
              <Row className="show-grid">
                <Col md={6}>
                  <strong>{`$${this.props.price}`}</strong>
                  <br></br>
                  <strong className="price-strike">{`$${this.props.price}`}</strong>
                </Col>
                <Col md={6}>Qty:1</Col>
              </Row>
            </Media.Body>
          </Media>
        </Collapse>
      </div>
    );
  }
}
export default ItemDetails;
