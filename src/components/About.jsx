import React, { useEffect, useRef } from 'react';
import portraitImg from '../assets/about-portrait.png';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skills = [
    "Product Design", "UI/UX", "Design Systems", "Prototyping",
    "Brand Identity", "Motion Design", "Interaction Design", "User Research",
    "Figma", "Creative Direction", "Web Design", "Mobile Design"
];

const experiences = [
    { year: "2021 — Present", role: "Senior Product Designer", company: "Studio Kanso", type: "Full-time" },
    { year: "2018 — 2021", role: "Lead UI/UX Designer", company: "TechFlow Inc.", type: "Full-time" },
    { year: "2015 — 2018", role: "Digital Designer", company: "Creative Form", type: "Full-time" },
    { year: "2013 — 2015", role: "Junior Designer", company: "Pixel Agency", type: "Full-time" },
];

const values = [
    { number: "01", title: "Clarity over complexity", desc: "Every design decision must have a reason. I strip away anything that doesn't serve the user." },
    { number: "02", title: "Detail is everything", desc: "The difference between good and exceptional lives in the micro — spacing, timing, weight." },
    { number: "03", title: "Function shapes form", desc: "Beautiful work that doesn't perform isn't really beautiful. Purpose precedes aesthetics." },
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
                            I'm Faheem — a product designer based in Riyadh who believes the best
                            interfaces disappear into the background, letting experiences take center stage.
                            I work at the intersection of craft, systems thinking, and human behaviour.
                        </p>

                        <div className="about-hero-stats">
                            <div className="about-stat">
                                <span className="stat-number">10+</span>
                                <span className="stat-label">Years of experience</span>
                            </div>
                            <div className="about-stat">
                                <span className="stat-number">80+</span>
                                <span className="stat-label">Projects shipped</span>
                            </div>
                            <div className="about-stat">
                                <span className="stat-number">30+</span>
                                <span className="stat-label">Global clients</span>
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

            {/* ── CTA STRIP ── */}

        </div>
    );
};

export default About;
