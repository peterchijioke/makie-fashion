import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.scss";
import TwitterSVG from "../../images/twitter.svg";
import FacebookSVG from "../../images/facebook.svg";
import InstagramSVG from "../../images/instagram.svg";

export default function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-main">
        <div className="footer-main-inner one">
          <label htmlFor="social">Our Resources</label>
          <div className="icon-row">
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <div style={{ marginLeft: i === 0 ? 0 : 10 }}>
                  <img
                    className="icon"
                    src={
                      i === 0
                        ? TwitterSVG
                        : i === 1
                        ? FacebookSVG
                        : InstagramSVG
                    }
                  />
                </div>
              ))}
          </div>
        </div>
        <div className="footer-main-inner two">{/* To do */}</div>
      </div>
      <div className="copy-write">
        &#169;{new Date().getFullYear()} makie.stores all rights reserved
      </div>
    </div>
  );
}
