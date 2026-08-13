import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const socials = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/seyad-mohammed-faheem/", arrow: "↗" },
    { name: "Behance", url: "https://www.behance.net/faheemseyadmd", arrow: "↗" },
    { name: "Dribbble", url: "https://dribbble.com/Faheemmeehaf", arrow: "↗" },
];

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '', type: 'project' });
    const [submitted, setSubmitted] = useState(false);
    const cursorDotRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        // Above-fold hero animations — fire on mount
        gsap.from(".contact-hero-eyebrow", { y: 20, opacity: 0, duration: 0.7, ease: "power4.out", delay: 0.1 });
        gsap.from(".contact-hero-title", { y: 70, opacity: 0, duration: 1.1, ease: "power4.out", delay: 0.2 });
        gsap.from(".contact-hero-sub", { y: 40, opacity: 0, duration: 0.9, ease: "power3.out", delay: 0.4 });
        gsap.from(".contact-email-giant", { y: 50, opacity: 0, duration: 1.0, ease: "power3.out", delay: 0.35 });

        // Below-fold — animate when scrolled into view
        gsap.from(".contact-form-section", {
            y: 60, opacity: 0, duration: 0.9, ease: "power3.out",
            scrollTrigger: { trigger: ".contact-form-section", start: "top 88%", toggleActions: "play none none none" }
        });

        gsap.utils.toArray(".contact-info-grid > *").forEach((el, i) => {
            gsap.from(el, {
                y: 30, opacity: 0, duration: 0.7, ease: "power3.out", delay: i * 0.1,
                scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none none" }
            });
        });

        return () => ScrollTrigger.getAll().forEach(t => t.kill());
    }, []);

    const handleChange = (e) => {
        setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="contact-page">

            {/* ── HERO ── */}
       

            {/* ── FORM + INFO ── */}
            <section className="contact-form-section">
                <div className="contact-form-inner">
                    <div className="contact-form-left">
                        <h2 className="contact-form-heading">Send a message</h2>
                        {submitted ? (
                            <div className="contact-success-state">
                                <div className="success-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M20 6L9 17l-5-5" />
                                    </svg>
                                </div>
                                <h3>Message received!</h3>
                                <p>Thanks for reaching out. I'll get back to you within 24–48 hours.</p>
                            </div>
                        ) : (
                            <form className="contact-form" onSubmit={handleSubmit} noValidate>
                                {/* Enquiry Type */}
                                <div className="form-enquiry-type">
                                    {['project', 'collaboration', 'other'].map(type => (
                                        <button
                                            key={type}
                                            type="button"
                                            className={`enquiry-chip ${formState.type === type ? 'active' : ''}`}
                                            onClick={() => setFormState(p => ({ ...p, type }))}
                                        >
                                            {type.charAt(0).toUpperCase() + type.slice(1)}
                                        </button>
                                    ))}
                                </div>

                                <div className="form-row">
                                    <div className="form-field">
                                        <label htmlFor="contact-name">Your name</label>
                                        <input
                                            id="contact-name"
                                            name="name"
                                            type="text"
                                            placeholder="Your name"
                                            value={formState.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-field">
                                        <label htmlFor="contact-email">Email address</label>
                                        <input
                                            id="contact-email"
                                            name="email"
                                            type="email"
                                            placeholder="your@email.com"
                                            value={formState.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-field">
                                    <label htmlFor="contact-message">Tell me about your project</label>
                                    <textarea
                                        id="contact-message"
                                        name="message"
                                        rows={6}
                                        placeholder="Describe what you're working on, your timeline, budget..."
                                        value={formState.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <button type="submit" className="contact-submit-btn">
                                    <span>Send message</span>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
                                    </svg>
                                </button>
                            </form>
                        )}
                    </div>

                    <div className="contact-form-right">
                        {/* Info Grid */}
                        <div className="contact-info-grid">
                            <div className="contact-info-block">
                                <h3>Socials</h3>
                                <div className="contact-socials-list">
                                    {socials.map(s => (
                                        <a key={s.name} href={s.url} className="contact-social-row" target="_blank" rel="noreferrer">
                                            <span>{s.name}</span>
                                            <span className="social-row-arrow">{s.arrow}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div className="contact-info-block">
                                <h3>Location</h3>
                                <p className="contact-info-text">India</p>
                                <p className="contact-info-muted">Based in India · Available globally.</p>
                            </div>

                            <div className="contact-info-block">
                                <h3>Response time</h3>
                                <p className="contact-info-text">Usually within 24h</p>
                                <p className="contact-info-muted">Mon – Fri, 9am – 6pm AST</p>
                            </div>

                            <div className="contact-card-dark">
                                <span className="contact-card-label">Current status</span>
                                <p className="contact-card-status">
                                    <span className="avail-dot-green large"></span>
                                    Open to new projects &amp; collaborations
                                </p>
                                <p className="contact-card-sub">Accepting work starting Q2 2025</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
