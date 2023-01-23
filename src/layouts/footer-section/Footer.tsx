import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-main">
        <div className="footer-main-inner one">peter</div>
        <div className="footer-main-inner two">paul</div>
      </div>
      <div className="copy-write">
        &#169;{new Date().getFullYear()} Makie.store
      </div>
    </div>
  );
}
