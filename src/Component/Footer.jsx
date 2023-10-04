import React, { Component } from 'react'
import { FaInstagram, FaLinkedin, FaPhone, FaTwitter } from "react-icons/fa6";

export default class Footer extends Component {
  render() {
    return (
        <footer>
        <div className="container1">
          <div className="footer-about">
            <h3>Aftab Khan</h3>
            <p>
             Front-End Developer
            </p>
          </div>
          <div className="footer-socialicon">
            <h3>Follow Me</h3>
            <div className="icons">
              <div className="icon">
                <FaInstagram />
              </div>
              <div className="icon">
                <FaTwitter />
              </div>
              <div className="icon">
                <FaLinkedin />
              </div>
            </div>
          </div>
          <div className="Mobile-No">
          <div className="call-icon">
          <FaPhone className="mobile-icon"/>
          <span >Call Me</span>
          </div>
          <h3>9076488289</h3>
          </div>
        </div>
        <hr />
        <div className=" container2">
        <div className="copyright">
        <p>
        @{new Date().getFullYear()} Aftab Khan All Rights Reserved
        </p>
        </div>
        <div className="security">
          <p>PRIVACY POLICY</p>
          <p>TERM & CONDITION</p>
        </div>
        </div>
      </footer>
    )
  }
}
