import React from "react";
import {Link } from "react-router-dom"

function Nevbar() {
    
    
    
  return (
    <React.Fragment>
      <header id="full_nav">
        <div className="header">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <a className="navbar-brand" href="index.html">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZIS0R4O3k-Si3BwFCpBdpR-oMPTi03yJUDQ&usqp=CAU"
                  alt=""
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="icofont icofont-navigation-menu"></i>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mx-auto">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/about">
                      About
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to={'/products'}>
                      Product
                  </Link>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="#full-testimonial">
                      Testimonial
                    </a>
                  </li>

                  <li className="nav-item dropdown">
                    <span
                      className="nav-link dropdown-toggle"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                    >
                      Pages
                    </span>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <a className="dropdown-item" href="productdetails.html">
                        Product Details
                      </a>
                      <a className="dropdown-item" href="blog.html">
                        Blog
                      </a>
                      <a className="dropdown-item" href="blogdetails.html">
                        Blog Details
                      </a>
                      <a className="dropdown-item" href="404-error.html">
                        404-Error
                      </a>
                      <a className="dropdown-item" href="cartoverview.html">
                        Cartoverview
                      </a>
                      <a className="dropdown-item" href="checkout.html">
                        Checkout
                      </a>
                    </div>
                  </li>
                </ul>

                <div className="header-content">
                  <div className="header_contact text-right">
                    <span>Call Us!</span>
                    <span className="phone_no">+00 569 846 348</span>
                  </div>
                  <div className="header_icon">
                    <i className="icofont icofont-cart"></i>
                    <span className="cart_no">02</span>
                  </div>
                  <div className="header_icon">
                    <span className="cart_no">login</span>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}

export default Nevbar;
