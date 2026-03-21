import React, { useState, useEffect } from 'react';

export default function Loader({ loaded }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!loaded) {
      const interval = setInterval(() => {
        setCount((prev) => {
          if (prev < 99) return prev + 1;
          return prev;
        });
      }, 15);
      return () => clearInterval(interval);
    } else {
      setCount(100);
    }
  }, [loaded]);

  return (
    <div id="loading" className={loaded ? 'fade-out' : ''}>
      <div className="shutter top"></div>
      <div className="shutter bottom"></div>
      
      <div className="loader-hud-screen">
        <div className="hud-label tl">FAHEEM — 01</div>
        <div className="hud-label tr">RELEASE — 2025</div>

        <div className="hud-main-center">
            <div className="brand-reveal-wrap">
                <h1 className="brand-name-reveal">FAHEEM</h1>
            </div>
            
            <div className="progress-container-linear">
                <div className="progress-bar-fill" style={{ width: `${count}%` }}></div>
            </div>

            <div className="progress-meta-info">
                <span className="p-count">{count}%</span>
                <span className="p-status">ESTABLISHING CONNECTION</span>
            </div>
        </div>

        <div className="hud-label bl">FAHEEM — DESIGN</div>
        <div className="hud-label br">SYSTEM — INITIALIZING</div>
      </div>
    </div>
  );
}
