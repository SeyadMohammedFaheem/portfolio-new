import React from 'react';

export default function Footer() {
  return (
    <footer className="n-footer">
      <div className="n-footer-inner">
        
        {/* Top Section - Giant Title & CTA */}
        <div className="n-footer-top">
          <div className="n-footer-top-head">
            <h2 className="n-footer-giant-title">
              LET'S WORK<br />TOGETHER
            </h2>
            <div className="n-footer-cta-box">
              <p className="n-footer-desc">
                Have a project in mind? We'd love to hear about it. Let's create something great together!
              </p>
              <a href="mailto:hello@faheem.design" className="n-footer-btn">
                GET IN TOUCH
              </a>
            </div>
          </div>
          <div className="n-footer-availability">
            <span className="n-avail-dot"></span> Available for project
            <strong style={{ marginLeft: '1rem', color: '#fff' }}>EARLY FEB 2025</strong>
            <span style={{ marginLeft: '0.5rem', opacity: 0.5 }}>(GMT+7)</span>
          </div>
        </div>

        {/* Middle Section - Links & Newsletter */}
        <div className="n-footer-middle">
          <div className="n-footer-column n-col-contact">
            <span className="n-footer-column-title">(EMAIL)</span>
            <a href="mailto:hello@faheem.design" className="n-footer-email">hello@faheem.design</a>
            
            <span className="n-footer-column-title" style={{ marginTop: '2rem' }}>(PHONE)</span>
            <a href="tel:+12345678" className="n-footer-phone">+12 345678</a>
          </div>

          <div className="n-footer-column">
            <span className="n-footer-column-title">(LINKS)</span>
            <a href="#" className="n-footer-link">Home</a>
            <a href="#" className="n-footer-link">About</a>
            <a href="#" className="n-footer-link">Works</a>
            <a href="#" className="n-footer-link">Contact</a>
          </div>

          <div className="n-footer-column">
            <span className="n-footer-column-title">(SOCIALS)</span>
            <a href="#" className="n-footer-link">X/Twitter ↗</a>
            <a href="#" className="n-footer-link">Instagram ↗</a>
            <a href="#" className="n-footer-link">LinkedIn ↗</a>
            <a href="#" className="n-footer-link">Behance ↗</a>
          </div>

          <div className="n-footer-column n-col-newsletter">
            <p className="n-newsletter-desc">Sign up for our newsletter to get latest insights and updates</p>
            <div className="n-newsletter-input-group">
              <input type="email" placeholder="Enter email address" className="n-newsletter-input" />
              <button className="n-newsletter-submit">SUBSCRIBE</button>
            </div>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="n-footer-legal">
          <div className="n-footer-copyright">
            ©2026 FAHEEM. ALL RIGHTS RESERVED<br/>
            <a href="#">Privacy Policy</a> • <a href="#">Terms of Service</a>
          </div>
          <div className="n-footer-madeby">
            MADE BY <strong>FAHEEM</strong>
          </div>
        </div>
      </div>

      {/* Bottom Orange Brand Section */}
      <div className="n-footer-brand-band">
        <div className="n-brand-huge-text">FAHEEM<span className="n-brand-reg">®</span></div>
        <div className="n-brand-slogan">
          Beyond<br/>Visuals.<br/>Built with<br/>Vision.
        </div>
      </div>
    </footer>
  );
}
