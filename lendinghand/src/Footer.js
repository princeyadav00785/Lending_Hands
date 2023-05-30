import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__text">
          © 2023 Lending_Hands. All rights reserved.
        </p>

        <ul className="footer__links">
          <li className="footer__link-item">
            <a href="/">Home</a>
          </li>
          <li className="footer__link-item">
            <a href="/about">About</a>
          </li>
          <li className="footer__link-item">
            <a href="/contact">Contact</a>
          </li>
          <li className="footer__link-item">
            <a href="/terms">Terms of Service</a>
          </li>
          <li className="footer__link-item">
            <a href="/privacy">Privacy Policy</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
