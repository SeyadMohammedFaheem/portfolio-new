import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);

        gsap.from(".kanso-projects-title", {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power4.out"
        });

        gsap.from(".contact-content > *", {
            y: 40,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            delay: 0.2,
            ease: "power3.out"
        });
    }, []);

    return (
        <div className="projects-page contact-page-wrapper">
            <div className="projects-container">
                <header className="kanso-projects-hero">
                    <h1 className="kanso-projects-title">Hello.</h1>
                </header>

                <div className="contact-content">
                    <div className="contact-main">
                        <p className="contact-subtext">Have a project in mind? Or just want to say hi? Let's build something great together.</p>
                        <a href="mailto:hello@faheem.com" className="huge-email-link">hello@faheem.com</a>
                    </div>
                    
                    <div className="contact-footer-grid">
                        <div className="social-column">
                            <h3>Socials</h3>
                            <a href="#" className="social-link">LinkedIn</a>
                            <a href="#" className="social-link">Twitter / X</a>
                            <a href="#" className="social-link">Dribbble</a>
                            <a href="#" className="social-link">Instagram</a>
                        </div>
                        <div className="location-column">
                            <h3>Location</h3>
                            <p>Riyadh, Saudi Arabia</p>
                            <p>Available for remote work worldwide.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
