import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.scss";
import TwitterSVG from "../../images/twitter.svg";

export default function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-main">
        <div className="footer-main-inner one">
          <label htmlFor="social">Our Resources</label>
          <img
            src={TwitterSVG}
            style={{ height: 45, width: 45, color: "white" }}
          />
        </div>
        <div className="footer-main-inner two">paul</div>
      </div>
      <div className="copy-write">
        &#169;{new Date().getFullYear()} Makie.store
      </div>
    </div>
  );
}
