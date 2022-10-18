import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Helpers from "./Helpers";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./product.css";
import { Container } from "react-bootstrap";
import Nevbar from "../Header/Nevbar";
// import { AllDataContext } from "../..";
import { DataContext } from "../Context/CreateContext";

function Products() {
  
  // const kopp= useContext(AllDataContext)
  const imges=useContext(DataContext)
  
// console.log(kopp)

  return (
  
    <React.Fragment>
      
      <Nevbar/>
      <div className="full_banner img-fluid pt-5" >
        <div className="col-md-12">
          <div className="banner-content">
            <h1>
              100% <span>Organic</span>
            </h1>
            <h3>Fresh & Natural Farm Food</h3>
            <p>
              The readable content of a page when looking at its layout point of
              using of letters, as opposed.
            </p>
            <a href="/" className="btn ">
              ALL PRoducts <i className="icofont-bubble-right"></i>
            </a>
          </div>
        </div>
        <div className="banner_img"></div>
      </div>

      <Container>
        <div className="names">
          <h4>catogaries</h4>
        </div>
        <Row>
          <Col xl={12}>
            <div className="catogaries">
              <img
                src="https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <img
                src="https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <img
                src="https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <img
                src="https://images.pexels.com/photos/209573/pexels-photo-209573.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <img
                src="https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <img
                src="https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <img
                src="https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
            </div>
          </Col>
        </Row>

        <Row>
          {imges.map((obj) => (
            <Col xl={4} md={4} lg={6} key={obj.id}>
              <div className="product" style={{ margin: "5px" }}>
                <div className="product-img">
                  <img className="w-100" src={obj} alt="oops" />
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

        <Helpers obj={imges} />
        <Link to={"/"}>
          <button className="btn"> HOME</button>
        </Link>
      </Container>
      {/* <h1> action note compleate</h1> */}
     
    </React.Fragment>
    
  );
}

export default Products;
// const imges = [
//   {  
//     id:0,
//     imge:
//       "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=400",
//   },
//   {
//     id:1,
//     imge:
//       "https://images.pexels.com/photos/142520/pexels-photo-142520.jpeg?auto=compress&cs=tinysrgb&w=400",
//   },
//   {
//     id:2,
//     imge:
//       "https://images.pexels.com/photos/142520/pexels-photo-142520.jpeg?auto=compress&cs=tinysrgb&w=400",
//   },
//   {
//     id:3,
//     imge:
//       "https://images.pexels.com/photos/142520/pexels-photo-142520.jpeg?auto=compress&cs=tinysrgb&w=400",
//   },
//   {
//     id:4,
//     imge:
//       "https://images.pexels.com/photos/142520/pexels-photo-142520.jpeg?auto=compress&cs=tinysrgb&w=400",
//   },
//   {
//     id:5,
//     imge:
//       "https://images.pexels.com/photos/1367242/pexels-photo-1367242.jpeg?auto=compress&cs=tinysrgb&w=600",
//   },
//   {
//     id:6,
//     imge:
//       "https://images.pexels.com/photos/1367242/pexels-photo-1367242.jpeg?auto=compress&cs=tinysrgb&w=600",
//   },
//   {
//     id:7,
//     imge:
//       "https://images.pexels.com/photos/1367242/pexels-photo-1367242.jpeg?auto=compress&cs=tinysrgb&w=600",
//   },
//   {
//     id:8,
//     imge:
//       "https://images.pexels.com/photos/1367242/pexels-photo-1367242.jpeg?auto=compress&cs=tinysrgb&w=600",
//   },
// ];