import React from 'react';

export default function Loader({ loaded }) {
  return (
    <div id="loading" className={loaded ? 'fade-out' : ''}>
      <div className="loader-content">
        <div className="loader-logo">FAHEEM</div>
        <div className="loader-bar-container">
          <div className="loader-bar"></div>
        </div>
        <p>Initializing...</p>
      </div>
    </div>
  );
}
