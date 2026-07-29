import React, { useState, useEffect } from 'react';
import portraitImg from '../assets/faheem-portrait.webp';

const ReferralPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dismissed, setDismissed] = useState(false);

    useEffect(() => {
        // Check if user has already dismissed the popup during this session
        const isSessionDismissed = sessionStorage.getItem('referralPopupDismissed');
        if (isSessionDismissed) {
            setDismissed(true);
            return;
        }

        const handleScroll = () => {
            if (dismissed) return;

            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

            if (scrollHeight > 0) {
                const scrollPercentage = (scrollTop / scrollHeight) * 100;
                if (scrollPercentage >= 50) {
                    setIsOpen(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [dismissed]);

    const handleClose = () => {
        setIsOpen(false);
        setDismissed(true);
        sessionStorage.setItem('referralPopupDismissed', 'true');
    };

    if (!isOpen) return null;

    return (
        <div className="referral-popup-overlay" onClick={handleClose}>
            <div className="referral-popup-card" onClick={(e) => e.stopPropagation()}>
                {/* Close Button */}
                <button className="referral-close-btn" onClick={handleClose} aria-label="Close modal">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                {/* Profile Header */}
                <div className="referral-profile-header">
                    <img src={portraitImg} alt="Faheem" className="referral-avatar" />
                    <div className="referral-profile-info">
                        <h4 className="referral-name">Faheem</h4>
                        <span className="referral-role">Mid-level UI/UX &amp; Product Designer · 3+ yrs</span>
                    </div>
                </div>

                {/* Status Badge */}
                <div className="referral-status-badge">
                    <span className="referral-pulsing-dot"></span>
                    <span className="referral-status-text">ACTIVELY LOOKING</span>
                </div>

                {/* Main Headline */}
                <h2 className="referral-headline">
                    Open to work —<br />
                    <span className="serif-italic">referrals</span> <span className="bold-highlight">appreciated</span> 🙏
                </h2>

                {/* Description */}
                <p className="referral-desc">
                    End-to-end UX/UI across web &amp; mobile, design systems, and data-heavy dashboards — AI-paired workflow (<span className="orange-text">Figma + Agents</span>).
                </p>

                {/* Bullets */}
                <div className="referral-bullets">
                    <div className="referral-bullet-item">
                        <span className="arrow">→</span>
                        <span><strong>Looking for:</strong> UI/UX Designer / Product Designer</span>
                    </div>
                    <div className="referral-bullet-item">
                        <span className="arrow">→</span>
                        <span><strong>Locations:</strong> Bangalore, Chennai, MENA (UAE, Saudi Arabia, Qatar)</span>
                    </div>
                    <div className="referral-bullet-item">
                        <span className="arrow">→</span>
                        <span><strong>Phone / WhatsApp:</strong> <a href="tel:+916379439162" className="referral-phone-highlight">+91 6379439162</a></span>
                    </div>
                </div>

                {/* Divider */}
                <div className="referral-divider"></div>

                {/* Hiring Note */}
                <div className="referral-hiring-note">
                    <strong>Hiring or know a role?</strong> <span className="italic-note">A referral or intro would mean a lot.</span>
                </div>

                {/* Footer Links & Actions */}
                <div className="referral-footer">
                    <div className="referral-footer-left">
                        <div className="referral-portfolio-tag">
                            <span>Portfolio:</span> <strong>faheem.work</strong>
                        </div>
                    </div>
                    <a
                        href="https://linkedin.com/in/seyad-mohammed-faheem"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="referral-cta-btn"
                    >
                        <span>Connect on LinkedIn</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ReferralPopup;
