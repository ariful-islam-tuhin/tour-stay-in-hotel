import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className=" footer">
        <div className="row">
          <div className="col-lg-6 ">
            <p>
              {" "}
              <Link to="/home">CONTACT</Link>{" "}
            </p>
            <p>
              {" "}
              <Link to="/about">COVID-19</Link>{" "}
            </p>
            <p>
              {" "}
              <Link to="/contact">FAQ</Link>{" "}
            </p>
            <p>
              {" "}
              <Link to="/contact">PRIVACY+COOKIE POLICES</Link>{" "}
            </p>
            <p>
              {" "}
              <Link to="/contact">NOTICE OF ACCESSIBILITY</Link>{" "}
            </p>
            <p>
              {" "}
              <Link to="/contact">BOOKING TERMS + CONDITION</Link>{" "}
            </p>
          </div>

          <div className="col-lg-6 last-footer ">
            <p>
              HENN NA HOTEL NEW YORK <br />
              235 West 35th Street | New Youk, Ny 10001 <br />
              +212-721-24245 | Hello@HennNaHotel | NY.com <br />
              <span>Stay Connected</span>
            </p>
          </div>
        </div>
      </div>
      <p className="last-fotter">
        © Copyright by AMC - all rights reserved. Developed by Arif.
      </p>
    </div>
  );
};

export default Footer;
