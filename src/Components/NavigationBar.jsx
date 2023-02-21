import React from "react";

function NavigationBar() {
  return (
    <nav className="navigation-bar">
      <a href="/">Home | </a>
      <a href="/flights">Flights | </a>
      <a href="/weather">Weather | </a>
      <a href="/about">About</a>
    </nav>
  );
}

export default NavigationBar;
