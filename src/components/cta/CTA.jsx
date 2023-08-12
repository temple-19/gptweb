import React from 'react';
import './cta.css';

const CTA = () => (
  <div className="gpt3__cta">
    <div className="gpt3__cta-content">
      <p>Request Early Access to Get Started</p>
      <h3>Register Today & start exploring the endless possibilities.</h3>
    </div>
    <div className="gpt3__cta-btn">
      <a
        href="https://polanai.netlify.app/"
        rel="noreferrer"
        style={{
          textDecoration: 'none',
        }}
      >
        <button type="button">Get Started</button>
      </a>
    </div>
  </div>
);

export default CTA;
