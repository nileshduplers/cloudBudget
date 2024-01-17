import React from "react";
import wesupport from "../../assets/img/we-support.png";
import "../Footer/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="d-flex">
            <div className="footer-info">
              <h4>Address</h4>
              <p>
                Pipang Ltd, Griva Digeni, <br /> 81-83 Jacovides Tower, 1st
                Floor <br />
                1090 Picosia USA
              </p>
            </div>
            <div className="footer-info">
              <h4>Services</h4>

              <ul>
                <li>
                  <a href="#">overview</a>
                </li>
                <li>
                  <a href="#">features</a>
                </li>
                <li>
                  <a href="#">technology</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Privecy</a>
                </li>
              </ul>
            </div>

            <div className="footer-info">
              <h4>Get in Touch</h4>
              <a href="mailto:info@cloudbudget.com">info@cloudbudget.com</a>
              <a href="tel:+1844-721-7120">+1 844-721-7120</a>
            </div>

            <div className="footer-info">
              <h4>We Support</h4>
              <img src={wesupport} alt="" />
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright 2018 CloudBudget</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
