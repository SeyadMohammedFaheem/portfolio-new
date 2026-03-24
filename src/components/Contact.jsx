import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const socials = [
    { name: "LinkedIn", url: "#", arrow: "↗" },
    { name: "Twitter / X", url: "#", arrow: "↗" },
    { name: "Dribbble", url: "#", arrow: "↗" },
    { name: "Instagram", url: "#", arrow: "↗" },
];

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '', type: 'project' });
    const [submitted, setSubmitted] = useState(false);
    const cursorDotRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        gsap.from(".contact-hero-eyebrow", { y: 20, opacity: 0, duration: 0.7, ease: "power4.out", delay: 0.1 });
        gsap.from(".contact-hero-title", { y: 70, opacity: 0, duration: 1.1, ease: "power4.out", delay: 0.2 });
        gsap.from(".contact-hero-sub", { y: 40, opacity: 0, duration: 0.9, ease: "power3.out", delay: 0.4 });
        gsap.from(".contact-email-giant", { y: 50, opacity: 0, duration: 1.0, ease: "power3.out", delay: 0.35 });
        gsap.from(".contact-form-section", { y: 60, opacity: 0, duration: 0.9, ease: "power3.out", delay: 0.5 });
        gsap.from(".contact-info-grid > *", { y: 30, opacity: 0, duration: 0.7, ease: "power3.out", stagger: 0.1, delay: 0.6 });
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
            <section className="contact-hero-section">
                <div className="contact-hero-inner">
                    <div className="contact-hero-top">
                        <span className="contact-hero-eyebrow">Get in touch</span>
                        <div className="contact-avail-badge">
                            <span className="avail-dot-green"></span>
                            Available for new projects
                        </div>
                    </div>

                    <h1 className="contact-hero-title">
                        Let's make<br />
                        <em>something</em><br />
                        remarkable.
                    </h1>

                    <p className="contact-hero-sub">
                        Whether you have a project in mind, want to explore a collaboration, or
                        simply want to say hello — I'd love to hear from you.
                    </p>
                </div>
            </section>

            {/* ── GIANT EMAIL ── */}
            <section className="contact-email-section">
                <div className="contact-email-inner">
                    <span className="contact-email-label">Email me directly</span>
                    <a href="mailto:hello@faheem.com" className="contact-email-giant">
                        hello@faheem.com
                        <svg className="email-arrow-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M7 17L17 7M17 7H7M17 7v10" />
                        </svg>
                    </a>
                    <div className="contact-email-divider"></div>
                </div>
            </section>

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
                                            placeholder="John Doe"
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
                                            placeholder="john@company.com"
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
                                <p className="contact-info-text">Riyadh, Saudi Arabia</p>
                                <p className="contact-info-muted">Remote-friendly worldwide.</p>
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
