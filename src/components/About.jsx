import React, { useEffect, useRef } from 'react';
import portraitImg from '../assets/about-portrait.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skills = [
    "Product Design", "UI/UX", "Design Systems", "Prototyping",
    "Figma", "Framer", "Adobe Creative Cloud", "Photoshop",
    "Tailwind", "HTML/CSS", "Interaction Design", "User Research",
    "Design Tokens", "OpenAI"
];

const experiences = [
    { year: "2023 — Present", role: "UI/UX Designer", company: "Pickcel", type: "Full-time" },
    { year: "2022 — 2024", role: "Visual Designer", company: "Freelance", type: "contract" },
];

const certifications = [
    { title: "Google UX Design", issuer: "Google", date: "2024" },
    { title: "Complete Web & Mobile Designer", issuer: "Udemy", date: "2022" },
    { title: "Digital Skills: UX", issuer: "Accenture", date: "2022" },
    { title: "Human Interface Guidelines", issuer: "ProApp", date: "2022" },
];

const values = [
    { number: "01", title: "Impact through 'Why'", desc: "I start every project by asking 'why'. Understanding the root user behavior leads to solutions that truly matter." },
    { number: "02", title: "Effortless Complexity", desc: "My goal is to take complex functional requirements and turn them into interfaces that feel simple and invisible." },
    { number: "03", title: "Engineering Mindset", desc: "With a background in Computer Science, I bridge the gap between aesthetic design and technical feasibility." },
];

const About = () => {
    const heroRef = useRef(null);
    const skillsRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        // Hero animations
        gsap.from(".about-hero-eyebrow", { y: 30, opacity: 0, duration: 0.8, ease: "power4.out", delay: 0.1 });
        gsap.from(".about-hero-title", { y: 60, opacity: 0, duration: 1.0, ease: "power4.out", delay: 0.2 });
        gsap.from(".about-hero-intro", { y: 40, opacity: 0, duration: 0.9, ease: "power3.out", delay: 0.4 });
        gsap.from(".about-hero-image", { scale: 1.05, opacity: 0, duration: 1.2, ease: "power3.out", delay: 0.3 });

        // Skills marquee infinite scroll
        const track = skillsRef.current;
        if (track) {
            gsap.to(track, {
                xPercent: -50,
                ease: "none",
                duration: 20,
                repeat: -1,
            });
        }

        // Scroll-triggered animations
        gsap.utils.toArray(".about-value-item").forEach((el, i) => {
            gsap.from(el, {
                y: 40, opacity: 0, duration: 0.8, ease: "power3.out",
                scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
                delay: i * 0.1
            });
        });

        gsap.utils.toArray(".exp-item").forEach((el, i) => {
            gsap.from(el, {
                x: -30, opacity: 0, duration: 0.7, ease: "power3.out",
                scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" },
                delay: i * 0.08
            });
        });

        return () => ScrollTrigger.getAll().forEach(t => t.kill());
    }, []);

    return (
        <div className="about-page">
            {/* ── HERO ── */}
            <section className="about-hero-section">
                <div className="about-hero-inner">
                    <div className="about-hero-left">
                        <span className="about-hero-eyebrow">About me</span>
                        <h1 className="about-hero-title">
                            Design is how<br />
                            I think.
                        </h1>
                        <p className="about-hero-intro">
                            I'm Faheem — a designer with over 3 years of experience shaping intuitive digital products. 
                            With a background in computer engineering, I bring a strong technical foundation to my design process, 
                            focusing on creating solutions that are both impactful and effortless to use.
                        </p>

                        <div className="about-hero-stats">
                            <div className="about-stat">
                                <span className="stat-number">3+</span>
                                <span className="stat-label">Years Experience</span>
                            </div>
                            <div className="about-stat">
                                <span className="stat-number">50k+</span>
                                <span className="stat-label">Users Reached</span>
                            </div>
                            <div className="about-stat">
                                <span className="stat-number">29.5%</span>
                                <span className="stat-label">Engagement Boost</span>
                            </div>
                        </div>
                    </div>

                    <div className="about-hero-right">
                        <div className="about-hero-image">
                            <img
                                src={portraitImg}
                                alt="Faheem"
                            />
                            <div className="about-img-badge">
                                <span className="avail-dot-green"></span>
                                Available for work
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SKILLS MARQUEE ── */}
            <div className="about-skills-marquee">
                <div className="marquee-fade-left"></div>
                <div className="marquee-track-wrap">
                    <div className="marquee-track" ref={skillsRef}>
                        {[...skills, ...skills].map((s, i) => (
                            <span key={i} className="marquee-pill">{s}</span>
                        ))}
                    </div>
                </div>
                <div className="marquee-fade-right"></div>
            </div>

            {/* ── VALUES ── */}
            <section className="about-values-section">
                <div className="about-section-inner">
                    <div className="about-section-header">
                        <span className="about-section-eyebrow">What I believe</span>
                        <h2 className="about-section-title">A few principles<br />I live by</h2>
                    </div>
                    <div className="about-values-grid">
                        {values.map((v) => (
                            <div className="about-value-item" key={v.number}>
                                <span className="value-number">{v.number}</span>
                                <h3 className="value-title">{v.title}</h3>
                                <p className="value-desc">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── EXPERIENCE ── */}
            <section className="about-experience-section">
                <div className="about-section-inner">
                    <div className="about-exp-header">
                        <span className="about-section-eyebrow">Career</span>
                        <h2 className="about-section-title">Experience</h2>
                    </div>
                    <div className="about-exp-list">
                        {experiences.map((exp, i) => (
                            <div className="exp-item" key={i}>
                                <span className="exp-year">{exp.year}</span>
                                <div className="exp-role">
                                    <strong>{exp.role}</strong>
                                    <span>{exp.company}</span>
                                </div>
                                <span className="exp-type">{exp.type}</span>
                                <span className="exp-arrow">↗</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CERTIFICATIONS ── */}
            <section className="about-experience-section" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                <div className="about-section-inner">
                    <div className="about-exp-header">
                        <span className="about-section-eyebrow">Academic & Training</span>
                        <h2 className="about-section-title">Certifications</h2>
                    </div>
                    <div className="about-exp-list">
                        {certifications.map((cert, i) => (
                            <div className="exp-item" key={i}>
                                <span className="exp-year">{cert.date}</span>
                                <div className="exp-role">
                                    <strong>{cert.title}</strong>
                                    <span>{cert.issuer}</span>
                                </div>
                                <span className="exp-arrow">★</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA STRIP ── */}

        </div>
    );
};

export default About;
