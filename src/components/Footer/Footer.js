import React from "react";
import "./Footer.css";
import youtube from "./Images/youtube.svg";
import pinterest from "./Images/pinterest.svg";
import facebook from "./Images/facebook.svg";
import twitter from "./Images/twitter.svg";
import instagram from "./Images/instagram.svg";
import $ from "jquery";

function Footer() {
  $(document).ready(function () {
    $(".dropdown-menu button").click(function () {
      $("#options").text($(this).text());
    });
  });

  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-content-center m-2">
          <div className="col-sm-4">
            <h5>Company</h5>
            <p>About</p>
            <p>Contact Us</p>
            <p>Careers</p>
          </div>
          <div className="col-sm-4">
            <h5>Account</h5>
            <p>Log In</p>
            <p>Create Account</p>
          </div>
          <div className="col-sm-4">
            <h5>Support</h5>
            <p>Help Center</p>
            <p>Accessibility</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="social">
        <img src={youtube} alt="youtube" />
        <img src={facebook} alt="facebook" />
        <img src={pinterest} alt="pinterest" />
        <img src={twitter} alt="twitter" />
        <img src={instagram} alt="instagram" />
      </div>
      <hr />
      <div>
        <div className="container legal">
        <div className="row">
          <div className=" col-lg-3">
            
              <div class="btn-group dropup">
                <button
                  id="options"
                  type="button"
                  class="languageBtn dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span id="selected">English</span>
                </button>
                <div class="dropdown-menu">
                  <button className="dropdown-item">Spanish</button>
                  <button class="dropdown-item">French</button>
                  <button class="dropdown-item">Mandarin</button>
                  <button class="dropdown-item">Russian</button>
                </div>
              </div>
            </div>
            <div className=" col-lg-3">
              <p>© iFit.com. All Rights Reserved.</p>
            </div>
            <div className="col-lg-3">
              <p>Privacy Policy</p>
            </div>
            <div className="col-lg-3">
              <p>Terms of Use</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
