import React from "react";
import NavigationBar from "./NavigationBar";
import '../Components/css/fonts/sky-medium.woff2';
import '../Components/css/fonts/sky-regular.woff2'

const Header = () => {
  return (
    <header className="header-style">
      <div>
        <div className="row">
          <a href="/">
            <h1 className="gradient-text">GetYourWay</h1>
          </a>
          <NavigationBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
