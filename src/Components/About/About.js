import React,{useContext} from 'react'
import Nevbar from '../Header/Nevbar'
import { AllDataContext } from "../..";

export default function About() {
  const user=useContext(AllDataContext)
  console.log(user)
  return (
    
    <React.Fragment>
        <Nevbar/>
      <div className="full-features">
<div className="container">
  <div
    className="row slider"
    style={{
        display: "flex",
        flexWrap: "nowrap",
        overflow: "auto",
      overflowX: "scroll",
    }}
  >
    <div className="col-xs-12 col-md-12 col-lg-12 col-xl-12 mb-4">
      <div className="features-box text-center">
        <div className="features-icon-border">
          <div className="features-icon">
            <i className="icofont icofont-wheat"></i>
          </div>
        </div>
        <div className="features-text">
          <h3>Healthy Food</h3>
        </div>
      </div>
    </div>

    <div className="col-xs-12 col-md-12 col-lg-12 col-xl-12 mb-4">
      <div className="features-box text-center">
        <div className="features-icon-border">
          <div className="features-icon">
            <i className="icofont icofont-truck-loaded"></i>
          </div>
        </div>
        <div className="features-text">
          <h3>Free Shipping</h3>
        </div>
      </div>
    </div>

    <div className="col-xs-12 col-md-12 col-lg-12 col-xl-12 mb-4">
      <div className="features-box text-center">
        <div className="features-icon-border">
          <div className="features-icon">
            <i className="icofont icofont-ui-chat"></i>
          </div>
        </div>
        <div className="features-text">
          <h3>24/07 Support</h3>
        </div>
      </div>
    </div>

    <div className="col-xs-12 col-md-12 col-lg-12 col-xl-12 mb-4">
      <div className="features-box text-center">
        <div className="features-icon-border">
          <div className="features-icon">
            <i className="icofont icofont-rooster"></i>
          </div>
        </div>
        <div className="features-text">
          <h3>From our farm</h3>
        </div>
      </div>
    </div>

    <div className="col-xs-12 col-md-12 col-lg-12 col-xl-12 mb-4">
      <div className="features-box text-center">
        <div className="features-icon-border">
          <div className="features-icon">
            <i className="icofont icofont-wheat"></i>
          </div>
        </div>
        <div className="features-text">
          <h3>Healthy Food</h3>
        </div>
      </div>
    </div>

    <div className="col-xs-12 col-md-12 col-lg-12 col-xl-12 mb-4">
      <div className="features-box text-center">
        <div className="features-icon-border">
          <div className="features-icon">
            <i className="icofont icofont-truck-loaded"></i>
          </div>
        </div>
        <div className="features-text">
          <h3>Free Shipping</h3>
        </div>
      </div>
    </div>

    <div className="col-xs-12 col-md-12 col-lg-12 col-xl-12 mb-4">
      <div className="features-box text-center">
        <div className="features-icon-border">
          <div className="features-icon">
            <i className="icofont icofont-ui-chat"></i>
          </div>
        </div>
        <div className="features-text">
          <h3>24/07 Support</h3>
        </div>
      </div>
    </div>

    <div className="col-xs-12 col-md-12 col-lg-12 col-xl-12 mb-4">
      <div className="features-box text-center">
        <div className="features-icon-border">
          <div className="features-icon">
            <i className="icofont icofont-rooster"></i>
          </div>
        </div>
        <div className="features-text">
          <h3>From our farm</h3>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
{/* feature */}
{/* about */}
{/* <div
className="full-about"
style={{
  backgroundImage: `url(https://live.envalab.com/html/tazza/img/about-banner.jpg)`,
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
</div> */}

    </React.Fragment>
    )
    }