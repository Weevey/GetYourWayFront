import React from 'react';

function NavigationBar() {
  return (
    <nav className="navigation-bar">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/flights">Flights</a></li>
        <li><a href="/weather">Weather</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
  );
}

export default NavigationBar;