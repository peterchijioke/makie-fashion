import React from "react";
import AppLogo from "../../components/app-logo/AppLogo";
import "./AppNavigation.scss";
import UserImage from "../../images/user.png";

export default function AppNavigation() {
  return (
    <div id="app-nav-container">
      <div className="app-nav-container-inner">
        <div className="app-nav-logo-section">
          <AppLogo />
        </div>
        <div className="app-nav-link-section">
          <div className="app-nav-link-section-inner">
            <div className="login-section">
              <span className="login-btn">Login</span>
            </div>

            <button className="nav-btn">Sell on Makie</button>
            <div className="mobile-user">
              <img src={UserImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
//
