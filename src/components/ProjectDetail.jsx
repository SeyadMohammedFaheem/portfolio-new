import React, { useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projectsData } from '../data/projectsData';

gsap.registerPlugin(ScrollTrigger);

const ProjectDetail = () => {
    const { slug } = useParams();
    const project = projectsData.find(p => p.slug === slug);
    const currentIndex = projectsData.findIndex(p => p.slug === slug);
    const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

    useEffect(() => {
        window.scrollTo(0, 0);

        if (!project) return;

        // ── Hero entrance ──
        gsap.from(".project-header-left h1", {
            y: 80, opacity: 0, duration: 1.2, ease: "power4.out", delay: 0.1
        });
        gsap.from(".project-header-right", {
            y: 40, opacity: 0, duration: 1, ease: "power3.out", delay: 0.25
        });
        gsap.from(".project-meta-row", {
            y: 20, opacity: 0, duration: 0.9, ease: "power3.out", delay: 0.35
        });
        gsap.from(".hero-img-container", {
            y: 60, opacity: 0, duration: 1.3, ease: "power3.out", delay: 0.4
        });

        // ── Scroll‑triggered sections ──
        gsap.utils.toArray(".pd-section-animate").forEach(el => {
            gsap.from(el, {
                y: 60, opacity: 0, duration: 1, ease: "power3.out",
                scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" }
            });
        });

        gsap.utils.toArray(".pd-img-reveal").forEach(el => {
            gsap.from(el, {
                scale: 1.06, opacity: 0, duration: 1.2, ease: "power3.out",
                scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" }
            });
        });

        // Key metrics counter
        gsap.utils.toArray(".metric-number").forEach(el => {
            const end = parseInt(el.dataset.value, 10);
            gsap.fromTo(el, { textContent: 0 }, {
                textContent: end, duration: 1.5, ease: "power1.out", snap: { textContent: 1 },
                scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none none" },
                onUpdate() { el.textContent = Math.ceil(el.textContent) + (el.dataset.suffix || ''); }
            });
        });

        return () => ScrollTrigger.getAll().forEach(t => t.kill());
    }, [project, slug]);

    if (!project) return <Navigate to="/projects" replace />;

    // Build scope / tags
    const scopeTags = project.service ? project.service.split(',').map(s => s.trim()) : [project.type];

    return (
        <div className="project-detail-page">
            <div className="projects-container">

                {/* ═══════ HERO (kept as‑is — user loves this fold) ═══════ */}
                <div className="project-header">
                    <div className="project-header-top">
                        <div className="project-header-left">
                            <h1 className="kanso-projects-title">{project.title}.</h1>
                        </div>
                        <div className="project-header-right">
                            <p>{project.description}</p>
                        </div>
                    </div>

                    <div className="project-meta-row">
                        <div className="meta-info">
                            <span>Client <strong>{project.client}</strong></span>
                            <span>Service <strong>{project.service}</strong></span>
                            <span>Year <strong>{project.year}</strong></span>
                        </div>
                        <a href="https://example.com" target="_blank" rel="noreferrer" className="live-site-btn">
                            Live website
                        </a>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="hero-img-container">
                    <img src={project.heroImage} alt={`${project.title} Hero`} />
                </div>

                {/* ═══════ KEY METRICS BAR ═══════ */}
                <section className="pd-metrics-bar pd-section-animate">
                    <div className="pd-metric">
                        <span className="metric-number" data-value="65" data-suffix="%">0%</span>
                        <span className="metric-label">Increase in engagement</span>
                    </div>
                    <div className="pd-metric-divider"></div>
                    <div className="pd-metric">
                        <span className="metric-number" data-value="40" data-suffix="%">0%</span>
                        <span className="metric-label">Faster onboarding flow</span>
                    </div>
                    <div className="pd-metric-divider"></div>
                    <div className="pd-metric">
                        <span className="metric-number" data-value="4" data-suffix=" Weeks">0</span>
                        <span className="metric-label">From brief to launch</span>
                    </div>
                    <div className="pd-metric-divider"></div>
                    <div className="pd-metric">
                        <span className="metric-number" data-value="12" data-suffix="+">0</span>
                        <span className="metric-label">Screens delivered</span>
                    </div>
                </section>

                {/* ═══════ SCOPE TAGS ═══════ */}
                <section className="pd-scope-strip pd-section-animate">
                    <span className="pd-scope-label">Scope</span>
                    <div className="pd-scope-tags">
                        {scopeTags.map((tag, i) => (
                            <span className="pd-scope-tag" key={i}>{tag}</span>
                        ))}
                        <span className="pd-scope-tag">Strategy</span>
                        <span className="pd-scope-tag">Visual Design</span>
                        <span className="pd-scope-tag">Prototyping</span>
                    </div>
                </section>

                {/* ═══════ SECTION 01 — CHALLENGE ═══════ */}
                <section className="pd-case-section pd-section-animate">
                    <div className="pd-case-eyebrow">
                        <span className="pd-case-number">01</span>
                        <span className="pd-case-line"></span>
                        <span className="pd-case-label">The Challenge</span>
                    </div>
                    <div className="pd-case-body">
                        <h2 className="pd-case-heading">{project.challenge.text}</h2>
                        {project.challenge.subtext && (
                            <p className="pd-case-subtext">{project.challenge.subtext}</p>
                        )}
                    </div>
                </section>

                {/* 2‑col image grid */}
                <div className="pd-image-duo pd-img-reveal">
                    <div className="pd-duo-img">
                        <img src={project.gridImages[0]} alt={`${project.title} Detail 1`} />
                    </div>
                    <div className="pd-duo-img">
                        <img src={project.gridImages[1]} alt={`${project.title} Detail 2`} />
                    </div>
                </div>

                {/* ═══════ SECTION 02 — SOLUTION ═══════ */}
                <section className="pd-case-section pd-section-animate">
                    <div className="pd-case-eyebrow">
                        <span className="pd-case-number">02</span>
                        <span className="pd-case-line"></span>
                        <span className="pd-case-label">The Solution</span>
                    </div>
                    <div className="pd-case-body">
                        <h2 className="pd-case-heading">{project.solution.text}</h2>
                        {project.solution.subtext && (
                            <p className="pd-case-subtext">{project.solution.subtext}</p>
                        )}
                    </div>
                </section>

                {/* Full‑bleed stack images */}
                <div className="pd-image-stack">
                    <div className="pd-stack-img pd-img-reveal">
                        <img src={project.stackImages[0]} alt={`${project.title} Lookbook 1`} />
                    </div>
                    <div className="pd-stack-img pd-img-reveal">
                        <img src={project.stackImages[1]} alt={`${project.title} Lookbook 2`} />
                    </div>
                </div>

                {/* ═══════ SECTION 03 — RESULT ═══════ */}
                <section className="pd-result-section pd-section-animate">
                    <div className="pd-case-eyebrow">
                        <span className="pd-case-number">03</span>
                        <span className="pd-case-line"></span>
                        <span className="pd-case-label">The Result</span>
                    </div>
                    <div className="pd-result-body">
                        <h2 className="pd-result-heading">{project.result}</h2>
                    </div>
                </section>

                {/* Impact full‑width image */}
                <div className="pd-impact-image pd-img-reveal">
                    <img src={project.impactImage} alt={`${project.title} Impact`} />
                </div>

                {/* ═══════ NEXT PROJECT NAVIGATION ═══════ */}
                <section className="pd-next-project">
                    <Link to={`/project/${nextProject.slug}`} className="pd-next-link">
                        <div className="pd-next-top">
                            <span className="pd-next-eyebrow">Next Project</span>
                            <svg className="pd-next-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M7 17L17 7M17 7H7M17 7v10" />
                            </svg>
                        </div>
                        <h2 className="pd-next-title">{nextProject.title}.</h2>
                        <div className="pd-next-meta">
                            <span>{nextProject.type}</span>
                            <span>{nextProject.year}</span>
                        </div>
                        <div className="pd-next-image-peek">
                            <img src={nextProject.image} alt={nextProject.title} />
                        </div>
                    </Link>
                </section>

            </div>
        </div>
    );
};

export default ProjectDetail;
