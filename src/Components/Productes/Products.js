import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./product.css";
import { Container } from "react-bootstrap";
import Nevbar from "../Header/Nevbar";
// import { AllDataContext } from "../..";
import { DataContext } from "../Context/CreateContext";

function Products() {
  //  using context to passing the Images
  const { passItem, passCategory } = useContext(DataContext);

  console.log("this is prosucts ", passItem);
  console.log("this is catagorey ", passCategory);

  return (
    <React.Fragment>
      <Nevbar />
      <div className="full_banner">
        <div className="container">
          <div className="row banner-slider">
            <div className="col-md-12">
              <div className="banner-content">
                <h1>
                  100% <span>Organic</span>
                </h1>
                <h3>Fresh & Natural Farm Food</h3>
                <p>
                  The readable content of a page when looking at its layout
                  point of using of letters, as opposed.
                </p>
                <a href="/" className="btn ">
                  ALL PRoducts <i className="icofont-bubble-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="names">
        <h4>categories</h4>
      </div>
      <div className="category">
        {passCategory.map((cm) => (
          <Fragment>
            <img src={cm.ctImage} alt="oopsa" />
          </Fragment>
        ))}
      </div>

      <Container>
        <Row>
          {passItem.map((obj) => (
            <Col xl={3} md={4} lg={6} key={obj.id}>
              <div className="product" style={{ margin: "5px" }}>
                <div className="product-img">
                  <img className="w-100" src={obj.imge} alt="oops" />
                </div>
                <div className="product-content">
                  <div className="product-details position-bottom-left">
                    <h3 className="product-name">
                      <a href="productdetails.html">Musk Melon</a>
                    </h3>

                    <span className="product-prev-price">$80 KG</span>
                    <span className="product-price">$78 KG</span>
                  </div>
                  <div className="buttons">
                    <span className="sold-out-tag position-top-right">
                      Sold out
                    </span>
                    <button className="btn custom-btn position-bottom-right">
                      {" "}
                      Add to cart
                    </button>
                  </div>

                  <div className="icons position-center">
                    <div className="rounded-icon">
                      <i className="icofont-eye"></i>
                    </div>

                    <div className="rounded-icon">
                      <i className="icofont-heart-alt"></i>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <Link to={"/"}>
          <button className="btn"> HOME</button>
        </Link>
      </Container>
      {/* <h1> action note compleate</h1> */}
    </React.Fragment>
  );
}

export default Products;
