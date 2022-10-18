import React from "react";
import { Link } from "react-router-dom";
import About from "../Components/About/About";
import Nevbar from "../Components/Header/Nevbar";
import "./home.css";

function Home() {
  return (
    <React.Fragment>
      {/* header */}
      <Nevbar/>
      {/* header */}
      {/* banner */}
      <div
        className="full-banner"
        style={{
          backgroundImage: ` url(https://live.envalab.com/html/tazza/img/banner.jpg)`,
        }}
      >
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
      {/* banner */}
      <div
        className="full-about"
        style={{
          backgroundImage: `url(https://live.envalab.com/html/tazza/img/about-banner.jpg)`,
          marginTop: "3rem",
        }}
        id="full-about"
      >
        <div className="container">
          <div className="row">
            <div className="about-title">
              <h2>About us</h2>
            </div>
            <div className="col-md-6">
              <div className="about-content">
                <h3>We Providing Services Since 1841 With Proud.</h3>
                <div className="about-details">
                  <p>
                    The readable content off a page when looking layout using
                    Lorem Ipsum is that it has.
                  </p>
                  <p>
                    It is a long established fact that a reader will be
                    distracted the readable content off a page when looking at
                    its layout using Lorem Ipsum is that it has.
                  </p>
                </div>

                <div className="about-icon-text align-items-center">
                  <div className="abt-icon">
                    <i className="icofont-fruits"></i>
                  </div>
                  <div className="abt-text">
                    <h2>
                      Fresh Look And <span>100% Organic</span> Farm Fresh
                      Produce Right.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* feature */}
      <About/>
      {/* feature */}
      {/* about */}
      {/* about */}
      {/* best seller  */}
      <div className="full-bestSeller" id="product">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h3 className="section-title">Our Best Seller Product</h3>
              <p className="section-subtitle">
                The passage experienced a surge in popularity during the 1960s
                when again during the 90s as desktop publishers
              </p>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-4">
              <div className="product">
                <div className="product-img">
                  <img
                    className="w-100"
                    src="assests/img/product-1.jpg"
                    alt=""
                  />
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
            </div>

            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-4">
              <div className="product">
                <div className="product-img">
                  <img
                    className="w-100"
                    src="assests/img/product-2.jpg"
                    alt=""
                  />
                </div>
                <div className="product-content">
                  <div className="product-details position-bottom-left">
                    <h3 className="product-name">
                      <a href="productdetails.html">Orange</a>
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
            </div>

            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-4">
              <div className="product">
                <div className="product-img">
                  <img
                    className="w-100"
                    src="assests/img/product-3.jpg"
                    alt=""
                  />
                </div>
                <div className="product-content">
                  <div className="product-details position-bottom-left">
                    <h3 className="product-name">
                      <a href="productdetails.html">Apple</a>
                    </h3>
                    <span className="product-prev-price">$80 KG</span>
                    <span className="product-price">$78 KG</span>
                  </div>
                  <div className="buttons">
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
            </div>

            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-4">
              <div className="product">
                <div className="product-img">
                  <img
                    className="w-100"
                    src="assests/img/product-4.jpg"
                    alt=""
                  />
                </div>
                <div className="product-content">
                  <div className="product-details position-bottom-left">
                    <h3 className="product-name">
                      <a href="productdetails.html">Dragon</a>
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
            </div>

            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-4">
              <div className="product">
                <div className="product-img">
                  <img
                    className="w-100"
                    src="assests/img/product-5.jpg"
                    alt=""
                  />
                </div>
                <div className="product-content">
                  <div className="product-details position-bottom-left">
                    <h3 className="product-name">
                      <a href="productdetails.html">Onion</a>
                    </h3>
                    <span className="product-prev-price">$80 KG</span>
                    <span className="product-price">$78 KG</span>
                  </div>
                  <div className="buttons">
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
            </div>

            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-4">
              <div className="product">
                <div className="product-img">
                  <img
                    className="w-100"
                    src="assests/img/product-6.jpg"
                    alt=""
                  />
                </div>
                <div className="product-content">
                  <div className="product-details position-bottom-left">
                    <h3 className="product-name">
                      <a href="productdetails.html">Masrom</a>
                    </h3>
                    <span className="product-prev-price">$80 KG</span>
                    <span className="product-price">$78 KG</span>
                  </div>
                  <div className="buttons">
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
            </div>

            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-4">
              <div className="product">
                <div className="product-img">
                  <img
                    className="w-100"
                    src="assests/img/product-7.jpg"
                    alt=""
                  />
                </div>
                <div className="product-content">
                  <div className="product-details position-bottom-left">
                    <h3 className="product-name">
                      <a href="productdetails.html">Carrot</a>
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
            </div>

            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mb-4">
              <div className="product">
                <div className="product-img">
                  <img
                    className="w-100"
                    src="assests/img/product-8.jpg"
                    alt=""
                  />
                </div>
                <div className="product-content">
                  <div className="product-details position-bottom-left">
                    <h3 className="product-name">
                      <a href="productdetails.html">Tomatoes</a>
                    </h3>
                    <span className="product-prev-price">$80 KG</span>
                    <span className="product-price">$78 KG</span>
                  </div>
                  <div className="buttons">
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
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button className="btn">
            <Link to="/products"> Products</Link>
          </button>
        </div>
      </div>
      {/* Best seller */}
      {/* offer part */}
      <div className="full-offer">
        <div className="bg-1"></div>
        <div className="bg-2"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="offer-content">
                <h3>Daily Essentials</h3>
                <h2>
                  Sale 68% Off <br /> All Fruite Products
                </h2>
                <a href="/" className="btn">
                  Explore more <i className="icofont-bubble-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* offer part */}
      {/* partners */}
      {/* partners */}
      footer
      <div className="footer_bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-12">
              <div className="footer_txt text-center">
                <p>
                  Copyright 2020 <span>TazZa</span>. All Right Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
    </React.Fragment>
  );
}

export default Home;
