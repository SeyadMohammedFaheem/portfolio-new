import React, { useEffect } from 'react';
import { Link, useParams, Navigate, useNavigate } from 'react-router-dom';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projectsData } from '../data/projectsData';

gsap.registerPlugin(ScrollTrigger);

const ProjectDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const project = projectsData.find(p => p.slug === slug);
    const currentIndex = projectsData.findIndex(p => p.slug === slug);
    const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

    const VideoEmbed = ({ id, title, isSmall }) => {
        const [isPlaying, setIsPlaying] = React.useState(false);

        if (isPlaying) {
            return (
                <div className={`zc-video-container ${isSmall ? 'small' : ''}`}>
                    <iframe 
                        src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&modestbranding=1&rel=0`} 
                        title={title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            );
        }

        return (
            <div 
                className={`zc-video-thumbnail-container ${isSmall ? 'small' : ''}`}
                onClick={() => setIsPlaying(true)}
            >
                <img src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`} alt={title} />
                <div className="zc-play-button">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                </div>
            </div>
        );
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        if (!project) return;

        gsap.from('.zc-hero-title', { y: 60, opacity: 0, duration: 1, ease: 'power3.out', delay: 0.1 });
        gsap.from('.zc-info-col', { y: 30, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 0.3 });

        gsap.utils.toArray('.zc-animate').forEach(el => {
            gsap.from(el, {
                y: 40, opacity: 0, duration: 0.8, ease: 'power3.out',
                scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' }
            });
        });

        ScrollTrigger.refresh();
        return () => ScrollTrigger.getAll().forEach(t => t.kill());
    }, [project, slug]);

    if (!project) return <Navigate to="/projects" replace />;

    const scopeTags = project.service ? project.service.split(',').map(s => s.trim()) : [project.type];

    // Case study content (generic, adapts to each project)
    const goals = project.caseStudy?.goals || [
        'Create a Guided Onboarding Journey With Clear Expectations',
        'Reduce drop-offs and improve application completion rate',
        'Provide Clear Application Status to Improve User Confidence',
        'Build a reusable system for future integrations',
    ];

    const targetUsers = project.caseStudy?.targetUsers || [
        'Users improving their experience with ' + (project.client || 'the product'),
        'First-time applicants and new users',
        'Users from varied demographics',
        'Users with varying levels of digital literacy',
    ];

    const challengeBullets = project.caseStudy?.challengeBullets || [
        { icon: "🛑", text: "High drop-offs during application" },
        { icon: "🛑", text: "Poor visibility into user progress" },
        { icon: "🛑", text: "Inconsistent experience across platforms" }
    ];

    const nextSteps = project.caseStudy?.nextSteps || [];

    const understandingUsers = project.caseStudy?.understandingUsers || null;
    const impactOnUsers = project.caseStudy?.impactOnUsers || null;
    const finalOutcome = project.caseStudy?.finalOutcome || null;
    const endNote = project.caseStudy?.endNote || null;

    const solutionBlocks = project.caseStudy?.solutions || [
        {
            num: '1/4',
            title: project.challenge?.text || 'Create a Guided Onboarding Journey With Clear Expectations',
            desc: 'The journey starts with a step overview screen that clearly shows all application stages, current progress, and estimated time. This screen acts as a single source of truth, allowing users to understand where they are in the journey and safely resume from the same step if they exit and return.',
            tags: ['Easy navigation', 'Clear time estimation', 'Progress visibility'],
            rationale: 'First-time users often abandon long flows due to uncertainty and fear of losing progress. A clear step overview with resume capability was chosen to reduce anxiety, set expectations early, and reassure users that their progress is safe.',
            mockupBg: '#2D1B4E',
            mockupImg: project.heroImage,
        },
        {
            num: '2/4',
            title: project.solution?.text || 'Reduce drop-offs and improve application completion rate',
            desc: 'Long forms were broken into smaller, grouped sections with fewer inputs per screen. Autofill and pre-fetched data were used where possible, while clear bank branding and redirection messaging helped users feel confident during sensitive verification steps.',
            tags: ['Simplified form structure', 'Autofill & smart defaults', 'Building Trust'],
            rationale: 'Since the number of steps was constrained by APIs, reducing actual length wasn\'t possible. The focus shifted to reducing perceived complexity through chunking, autofill, and trust cues.',
            mockupBg: '#1B2B4E',
            mockupImg: project.gridImages?.[0],
        },
        {
            num: '3/4',
            title: 'Provide Clear Application Status to Improve User Confidence',
            desc: 'After submission, users are shown clear application status states with visual indicators and guidance on what happens next. Status screens explain whether the application is under review, requires action, or is completed, reducing uncertainty after submission.',
            tags: ['Status transparency', 'Visual feedback'],
            rationale: 'Extending the experience beyond submission with clear status and next steps was chosen to reduce post-submission anxiety and prevent support queries or silent drop-offs.',
            mockupBg: '#2D1B4E',
            mockupImg: project.gridImages?.[1],
        },
        {
            num: '4/4',
            title: 'Create a reusable and scalable system for future integrations',
            desc: 'The journey was designed as a system, not a one-off flow, enabling faster integrations while maintaining a consistent and reliable user experience.',
            tags: ['System-driven onboarding flow', 'Reusable components', 'Delightful experience'],
            rationale: `${project.client || 'The client'} partners with multiple providers, each with different APIs and requirements. Designing a system rather than a one-off flow reduced future design and development effort.`,
            mockupBg: '#1B3A2B',
            mockupImg: project.stackImages?.[0],
        },
    ];

    const getYouTubeID = (url) => {
        if (!url) return null;
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };

    return (
        <div className="zc-page">

            {/* HUD Elements for consistency with home page */}


            <main className="zc-main">

                {/* ─── HERO ─── */}
                <section className="zc-hero zc-animate">
                    <h1 className="zc-hero-title">
                        {project.title.split(' ').map((word, idx) => (
                            <span key={idx}>
                                {word}{' '}
                            </span>
                        ))}
                    </h1>

                    <div className="zc-info-grid">
                        <div className="zc-info-col">
                            <span className="zc-label">COMPANY</span>
                            <span className="zc-val">{project.client}</span>
                        </div>
                        <div className="zc-info-divider" />
                        <div className="zc-info-col">
                            <span className="zc-label">ROLE</span>
                            <span className="zc-val">{project.type}</span>
                        </div>
                        <div className="zc-info-divider" />
                        <div className="zc-info-col">
                            <span className="zc-label">TIME</span>
                            <span className="zc-val">{project.time || '3 Weeks'}</span>
                        </div>
                        <div className="zc-info-divider" />
                        <div className="zc-info-col">
                            <span className="zc-label">YEAR</span>
                            <span className="zc-val">{project.year}</span>
                        </div>
                        <div className="zc-info-divider" />
                        <div className="zc-info-col">
                            <span className="zc-label">CATEGORY</span>
                            <span className="zc-val">{project.category || project.service}</span>
                        </div>
                    </div>
                </section>

                {/* ─── HERO THUMBNAIL (WIDER) ─── */}
                <div className="zc-hero-thumb zc-animate">
                    {project.videoUrls ? (
                        <VideoEmbed id={getYouTubeID(project.videoUrls[0])} title={project.title} />
                    ) : project.videoUrl ? (
                        <VideoEmbed id={getYouTubeID(project.videoUrl)} title={project.title} />
                    ) : (
                        <img src={project.heroImage || project.image} alt={project.title} />
                    )}
                </div>

                <div className="zc-content-col">
                    {/* ─── VIDEO GRID (If multiple videos) ─── */}
                    {project.videoUrls && project.videoUrls.length > 1 && (
                        <section className="zc-section-block zc-animate">
                            <h2 className="zc-section-h2">Project Showcase</h2>
                            <div className="zc-video-grid">
                                {project.videoUrls.slice(1).map((url, i) => (
                                    <div key={i} className="zc-video-item">
                                        <VideoEmbed 
                                            id={getYouTubeID(url)} 
                                            title={`${project.title} - Video ${i + 2}`} 
                                            isSmall={true} 
                                        />
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {project.thinkStackNote && (
                        <section className="zc-section-block zc-animate" style={{ textAlign: 'center', marginTop: '80px' }}>
                            <div className="zc-dark-card" style={{ padding: '48px', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.08)' }}>
                                <p className="zc-section-desc" style={{ margin: '0 auto 24px', maxWidth: '600px' }}>
                                    {project.thinkStackNote.text}
                                </p>
                                <a 
                                    href={project.thinkStackNote.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="view-all-projects-btn"
                                    style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}
                                >
                                    {project.thinkStackNote.linkText}
                                    <span style={{ fontSize: '0.8rem' }}>↗</span>
                                </a>
                            </div>
                        </section>
                    )}

                    {!project.isSimpleShowcase && (
                        <>
                            {/* ─── BACKGROUND & CONTEXT ─── */}
                            <section className="zc-section-block zc-animate">
                                <h2 className="zc-section-h2">Background &amp; Context</h2>
                                <p className="zc-section-desc" style={{ whiteSpace: 'pre-line' }}>{project.description}</p>
                            </section>

                            {/* ─── TARGET USERS ─── */}
                            <section className="zc-section-block zc-animate">
                                <h2 className="zc-section-h2">Target Users</h2>
                                <div className="zc-target-grid">
                                    {targetUsers.map((u, i) => (
                                        <div key={i} className="zc-target-card">
                                            <div className="zc-target-icon">👤</div>
                                            <p className="zc-target-text">{u}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* ─── THE PROBLEM ─── */}
                            {project.backgroundImages && project.backgroundImages.length > 0 && (
                                <section className="zc-section-block zc-animate">
                                    {project.backgroundImages.map((item, i) => {
                                        const heading = typeof item === 'object' ? item.heading : null;
                                        const desc = typeof item === 'object' ? item.desc : null;
                                        const subheading = typeof item === 'object' ? item.subheading : null;
                                        const columns = typeof item === 'object' ? item.columns : null;
                                        return (
                                            <div key={i} className="zc-bg-image-block">
                                            <div className="zc-bg-image-header">
                                                    {heading && <h2 className="zc-section-h2">{heading}</h2>}
                                                    {desc && <p className="zc-section-desc" style={{ marginBottom: 0 }}>{desc}</p>}
                                                </div>
                                                <div className="zc-bg-image-divider" />
                                                {subheading && (
                                                    <div className="zc-bg-subheading-row">
                                                        <p className="zc-bg-subheading">{subheading}</p>
                                                    </div>
                                                )}
                                                {columns && columns.length > 0 && (
                                                    <div className="zc-bg-columns">
                                                        {columns.map((col, j) => (
                                                            <div key={j} className="zc-bg-column-item">
                                                                <span className="zc-bg-column-num">0{j + 1}</span>
                                                                <p className="zc-bg-column-text">{col}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </section>
                            )}

                            {understandingUsers && (
                                <section className="zc-section-block zc-animate">
                                    <h2 className="zc-section-h2">Understanding the Users</h2>
                                    <div className="zc-understanding-grid">
                                        {understandingUsers.map((item, i) => (
                                            <div key={i} className="zc-understanding-card">
                                                <div className="zc-understanding-icon">🔍</div>
                                                <p className="zc-understanding-text">{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}

                            {/* ─── GOALS ─── */}
                            <section className="zc-section-block zc-animate">
                                <h2 className="zc-section-h2">The Goals</h2>
                                <div className="zc-goals-list">
                                    {goals.map((g, i) => (
                                        <div key={i} className="zc-goal-item">
                                            <span className="zc-goal-num">{i + 1}</span>
                                            <span>{g}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </>
                    )}
                </div>

                {/* ─── VISUAL SECTIONS (Branding, Typography) ─── */}
                {project.visualSections && project.visualSections.map((vs, i) => (
                    <div key={i} className="zc-content-col zc-animate" style={{ marginBottom: '120px' }}>
                        <section className="zc-section-block" style={{ marginBottom: '40px' }}>
                            <h2 className="zc-section-h2">{vs.heading}</h2>
                            <p className="zc-section-desc">{vs.desc}</p>
                        </section>
                        <img
                            src={vs.image}
                            alt={vs.heading}
                            style={{ width: '100%', height: 'auto', borderRadius: '24px', display: 'block', border: '1px solid rgba(255,255,255,0.07)', boxShadow: '0 24px 60px rgba(0,0,0,0.5)' }}
                        />
                    </div>
                ))}

                {/* ─── SOLUTION BLOCKS ─── */}
                {!project.isSimpleShowcase && solutionBlocks.map((sol, i) => (
                    <section key={i} className="zc-solution-block zc-animate">
                        <span className="zc-sol-badge">SOLUTION {sol.num}</span>
                        <h2 className="zc-sol-title">{sol.title}</h2>

                        <p className="zc-sol-desc">{sol.desc}</p>
                        
                        {sol.pdfLink && (
                            <a 
                                href={sol.pdfLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="zc-pdf-link"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    padding: '14px 28px',
                                    backgroundColor: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: '100px',
                                    color: '#fff',
                                    textDecoration: 'none',
                                    fontSize: '0.9rem',
                                    fontWeight: '600',
                                    marginBottom: '32px',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <span style={{ fontSize: '1.2rem' }}>📄</span>
                                VIEW PDF
                                <span style={{ opacity: 0.5, marginLeft: '4px' }}>↗</span>
                            </a>
                        )}

                        <div className="zc-rationale-box">
                            <p>{sol.rationale}</p>
                        </div>

                        <div className="">
                            {sol.mockupType === 'clay' ? (
                                <div className="zc-clay-container">
                                    {(Array.isArray(sol.mockupImg) ? sol.mockupImg : [sol.mockupImg]).map((imgSrc, i2, arr) => (
                                        <div key={i2} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            <div className={`zc-clay-phone ${sol.noHover ? 'no-hover' : ''}`}>
                                                <div className="zc-clay-camera"></div>
                                                <div className="zc-power-btn"></div>
                                                <div className={`zc-clay-screen ${sol.isScrollable ? 'is-scrollable' : ''}`}>
                                                    <img src={imgSrc} alt="iPhone 17 Mockup" />
                                                </div>
                                            </div>
                                            {arr.length === 2 && (
                                                <span className="zc-mockup-label">{i2 === 0 ? 'BEFORE' : 'AFTER'}</span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ) : Array.isArray(sol.mockupImg) ? (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', width: '100%' }}>
                                    {sol.mockupImg.map((imgSrc, j) => (
                                        <div key={j} style={{ width: '100%' }}>
                                            <img src={imgSrc} alt={Array.isArray(sol.mockupCaption) ? sol.mockupCaption[j] : `Solution ${i + 1} mockup ${j + 1}`} />
                                            {Array.isArray(sol.mockupCaption) && sol.mockupCaption[j] && (
                                                <span className="zc-mockup-caption">{sol.mockupCaption[j]}</span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div style={{ width: '100%' }}>
                                    <img src={sol.mockupImg} alt={sol.mockupCaption || `Solution ${i + 1} mockup`} />
                                    {sol.mockupCaption && (
                                        <span className="zc-mockup-caption">{sol.mockupCaption}</span>
                                    )}
                                </div>
                            )}
                        </div>
                    </section>
                ))}

                {/* ─── DESIGN SYSTEM & TOKENS ─── */}
                {project.caseStudy?.designSystemSection && (
                    <div className="zc-content-col zc-animate">
                        <section className="zc-section-block">
                            <h2 className="zc-section-h2">{project.caseStudy.designSystemSection.heading}</h2>
                            <p className="zc-section-desc">{project.caseStudy.designSystemSection.why}</p>

                            {project.caseStudy.designSystemSection.benefits && (
                                <div style={{ marginTop: '56px', marginBottom: '80px' }}>
                                    <p className="zc-label" style={{ color: '#FF5733', marginBottom: '24px', fontWeight: '900', letterSpacing: '0.1em', fontSize: '0.8rem' }}>KEY BENEFITS:</p>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                        {project.caseStudy.designSystemSection.benefits.map((b, i) => (
                                            <div key={i} style={{ 
                                                padding: '16px 24px', 
                                                borderRadius: '100px', 
                                                display: 'flex', 
                                                alignItems: 'center', 
                                                gap: '16px', 
                                                backgroundColor: '#0A0A0A',
                                                border: '1px solid rgba(255,255,255,0.06)',
                                            }}>
                                                <div style={{ 
                                                    width: '32px', 
                                                    height: '32px', 
                                                    borderRadius: '50%', 
                                                    backgroundColor: 'rgba(255,255,255,0.03)', 
                                                    display: 'flex', 
                                                    alignItems: 'center', 
                                                    justifyContent: 'center',
                                                    border: '1px solid rgba(255,255,255,0.1)'
                                                }}>
                                                    <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>✦</span>
                                                </div>
                                                <span style={{ fontWeight: '500', fontSize: '1rem', color: 'rgba(255,255,255,0.9)' }}>{b}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {project.caseStudy.designSystemSection.colorLanguage && (
                                <div style={{ marginBottom: '80px' }}>
                                    <h2 className="zc-section-h2">{project.caseStudy.designSystemSection.colorLanguage.title}</h2>
                                    <p className="zc-section-desc" style={{ marginBottom: '40px' }}>{project.caseStudy.designSystemSection.colorLanguage.desc}</p>
                                    <div className="zc-animate" style={{ borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}>
                                        <img src={project.caseStudy.designSystemSection.colorLanguage.image} alt="Color Language" style={{ width: '100%', display: 'block' }} />
                                    </div>
                                </div>
                            )}

                            {project.caseStudy.designSystemSection.architectureSection && (
                                <div style={{ marginBottom: '80px' }}>
                                    <h2 className="zc-section-h2">{project.caseStudy.designSystemSection.architectureSection.title}</h2>
                                    <p className="zc-section-desc" style={{ marginBottom: '40px' }}>{project.caseStudy.designSystemSection.architectureSection.desc}</p>
                                    <div className="zc-animate" style={{ borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}>
                                        <img src={project.caseStudy.designSystemSection.architectureSection.image} alt="Design Token Architecture" style={{ width: '100%', display: 'block' }} />
                                    </div>
                                </div>
                            )}

                            

                            {project.caseStudy.designSystemSection.tokenLayers && (
                                <div style={{ marginTop: '60px' }}>
                                    <h2 className="zc-section-h2" style={{ marginBottom: '40px' }}>Token Layering System</h2>
                                    
                                    {/* Comp Highlight Image under the heading */}
                                    <div className="zc-animate" style={{ borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', marginBottom: '60px' }}>
                                        <img src="/images/work/comp-highlight.png" alt="System Detail" style={{ width: '100%', display: 'block' }} />
                                    </div>

                                    {project.caseStudy.designSystemSection.tokenLayers.map((layer, idx) => (
                                        <div key={idx} style={{ marginBottom: '48px' }}>
                                            <h3 className="zc-section-h3" style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'rgba(255,255,255,0.95)' }}>{layer.title}</h3>
                                            <p className="zc-section-desc" style={{ lineHeight: '1.8', color: 'rgba(255,255,255,0.6)', marginBottom: layer.title === "Semantic Tokens" ? '40px' : '0' }}>
                                                {layer.desc.split(/(\{[^}]+\})/).map((part, i) => {
                                                    const match = part.match(/\{([^:]+):([^}]+)\}/);
                                                    if (match) {
                                                        const [_, name, color] = match;
                                                        return (
                                                            <span key={i} style={{ 
                                                                display: 'inline-flex', 
                                                                alignItems: 'center', 
                                                                backgroundColor: 'rgba(255,255,255,0.9)', 
                                                                color: '#444',
                                                                padding: '4px 10px', 
                                                                borderRadius: '6px', 
                                                                margin: '0 4px',
                                                                fontSize: '0.85rem',
                                                                fontWeight: '600',
                                                                verticalAlign: 'middle'
                                                            }}>
                                                                <span style={{ 
                                                                    width: '12px', 
                                                                    height: '12px', 
                                                                    backgroundColor: color, 
                                                                    borderRadius: '2px', 
                                                                    marginRight: '8px',
                                                                    border: '1px solid rgba(0,0,0,0.1)'
                                                                }} />
                                                                {name}
                                                            </span>
                                                        );
                                                    }
                                                    return part;
                                                })}
                                            </p>

                                            {/* Laptop Image under Semantic Tokens */}
                                            {layer.title === "Semantic Tokens" && (
                                                <div className="zc-animate" style={{ borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', marginTop: '40px' }}>
                                                    <img src="/images/work/laptop.png" alt="Laptop View" style={{ width: '100%', display: 'block' }} />
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                            {project.caseStudy.designSystemSection.integrationSection && (
                                <div style={{ marginTop: '80px' }}>
                                    <h2 className="zc-section-h2">{project.caseStudy.designSystemSection.integrationSection.title}</h2>
                                    <p className="zc-section-desc">{project.caseStudy.designSystemSection.integrationSection.desc}</p>
                                </div>
                            )}

                            {project.caseStudy.designSystemSection.handoffSection && (
                                <div style={{ marginTop: '80px' }}>
                                    <h2 className="zc-section-h2">{project.caseStudy.designSystemSection.handoffSection.title}</h2>
                                    <p className="zc-section-desc" style={{ marginBottom: '40px', maxWidth: 'none' }}>
                                        {project.caseStudy.designSystemSection.handoffSection.desc}
                                    </p>

                                    {project.caseStudy.designSystemSection.handoffSection.code && (
                                        <div className="zc-animate" style={{ 
                                            backgroundColor: '#0D0D0D', 
                                            padding: '40px', 
                                            borderRadius: '24px', 
                                            border: '1px solid rgba(255,255,255,0.05)',
                                            fontFamily: '"JetBrains Mono", monospace',
                                            fontSize: '0.9rem',
                                            lineHeight: '1.6',
                                            overflowX: 'auto',
                                            position: 'relative'
                                        }}>
                                            <div style={{ position: 'absolute', top: '16px', right: '24px', display: 'flex', gap: '6px' }}>
                                                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#FF5F56' }} />
                                                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#FFBD2E' }} />
                                                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#27C93F' }} />
                                            </div>
                                            <pre style={{ margin: 0 }}>
                                                <code style={{ color: '#DFFE52' }}>
                                                    {JSON.stringify(project.caseStudy.designSystemSection.handoffSection.code, null, 4)
                                                        .replace(/"([^"]+)":/g, '<span style="color: #9CDCFE">"$1"</span>:')
                                                        .replace(/: "([^"]+)"/g, ': <span style="color: #CE9178">"$1"</span>')
                                                        .split('\n').map((line, i) => (
                                                            <div key={i} dangerouslySetInnerHTML={{ __html: line }} />
                                                        ))
                                                    }
                                                </code>
                                            </pre>
                                        </div>
                                    )}
                                </div>
                            )}

                            {project.caseStudy.designSystemSection.scalingSection && (
                                <div style={{ marginTop: '100px' }}>
                                    <h2 className="zc-section-h2" style={{ marginBottom: '40px' }}>{project.caseStudy.designSystemSection.scalingSection.title}</h2>
                                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '40px' }}>
                                        <p className="zc-section-desc" style={{ marginBottom: '60px', maxWidth: 'none' }}>
                                            {project.caseStudy.designSystemSection.scalingSection.desc}
                                        </p>
                                        
                                        <div style={{ 
                                            display: 'grid', 
                                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                                            gap: '32px',
                                            marginBottom: '40px'
                                        }}>
                                            {project.caseStudy.designSystemSection.scalingSection.images.map((img, i) => (
                                                <div key={i} className="zc-animate" style={{ borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}>
                                                    <img src={img} alt={`Scale detail ${i + 1}`} style={{ width: '100%', display: 'block' }} />
                                                </div>
                                            ))}
                                        </div>

                                        <p className="zc-section-desc" style={{ fontSize: '1.1rem', marginTop: '40px', maxWidth: 'none' }}>
                                            {project.caseStudy.designSystemSection.scalingSection.bottomText.split(/(\{[^}]+\})/).map((part, i) => {
                                                const match = part.match(/\{([^:]+):([^}]+)\}/);
                                                if (match) {
                                                    const [_, name, color] = match;
                                                    return (
                                                        <span key={i} style={{ 
                                                            display: 'inline-flex', 
                                                            alignItems: 'center', 
                                                            backgroundColor: 'rgba(255,255,255,0.9)', 
                                                            color: '#444',
                                                            padding: '4px 10px', 
                                                            borderRadius: '6px', 
                                                            margin: '0 4px',
                                                            fontSize: '0.85rem',
                                                            fontWeight: '600',
                                                            verticalAlign: 'middle'
                                                        }}>
                                                            <span style={{ 
                                                                width: '12px', 
                                                                height: '12px', 
                                                                backgroundColor: color, 
                                                                borderRadius: '2px', 
                                                                marginRight: '8px',
                                                                border: '1px solid rgba(0,0,0,0.1)'
                                                            }} />
                                                            {name}
                                                        </span>
                                                    );
                                                }
                                                return part;
                                            })}
                                        </p>
                                    </div>
                                </div>
                            )}
                            {project.caseStudy.designSystemSection.outcomeSection && (
                                <div style={{ marginTop: '150px', textAlign: 'center' }}>
                                    {/* Redesigned Header Area */}
                                    <div style={{ marginBottom: '80px' }}>
                                        <h2 className="zc-section-h2" style={{ 
                                            fontSize: 'clamp(3rem, 10vw, 6rem)', 
                                            lineHeight: '0.9', 
                                            letterSpacing: '-0.04em',
                                            marginBottom: '40px',
                                            background: 'linear-gradient(to bottom, #fff, rgba(255,255,255,0.4))',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent'
                                        }}>
                                            {project.caseStudy.designSystemSection.outcomeSection.title}
                                        </h2>
                                        <p className="zc-section-desc" style={{ 
                                            maxWidth: '700px', 
                                            margin: '0 auto', 
                                            fontSize: '1.25rem', 
                                            lineHeight: '1.8',
                                            color: 'rgba(255,255,255,0.7)'
                                        }}>
                                            {project.caseStudy.designSystemSection.outcomeSection.desc}
                                        </p>
                                    </div>

                                    {/* High-Impact Final Visual */}
                                    <div className="zc-animate" style={{ 
                                        borderRadius: '32px', 
                                        overflow: 'hidden', 
                                        boxShadow: '0 40px 100px rgba(0,0,0,0.5)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        background: '#111'
                                    }}>
                                        <img 
                                            src={project.caseStudy.designSystemSection.outcomeSection.bottomImage} 
                                            alt="Final Impact" 
                                            style={{ width: '100%', display: 'block' }} 
                                        />
                                    </div>
                                </div>
                            )}
                        </section>
                    </div>
                )}

                <div className="zc-content-col">
                    {impactOnUsers && (
                        <section className="zc-section-block zc-animate" style={{ marginBottom: '40px' }}>
                            <h2 className="zc-section-h2">Impact on Users</h2>
                            <div className="zc-impact-list">
                                {impactOnUsers.map((item, i) => (
                                    <div key={i} className="zc-impact-item">
                                        <span className="zc-impact-num">⚡</span>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {finalOutcome && (
                        <div className="zc-outcome-card zc-animate">
                            <h2 className="zc-outcome-title">Final Outcome</h2>
                            <p className="zc-outcome-desc" style={{ whiteSpace: 'pre-line' }}>{finalOutcome}</p>
                        </div>
                    )}

                    {project.caseStudy?.highlightMockups && (
                        <div className="zc-clay-container zc-animate">
                            {project.caseStudy.highlightMockups.map((imgSrc, i3, arr) => (
                                <div key={i3} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <div className="zc-clay-phone">
                                        <div className="zc-clay-camera"></div>
                                        <div className="zc-power-btn"></div>
                                        <div className="zc-clay-screen">
                                            <img src={imgSrc} alt="Highlight Mockup" />
                                        </div>
                                    </div>
                                    {arr.length === 2 && (
                                        <span className="zc-mockup-label">{i3 === 0 ? 'BEFORE' : 'AFTER'}</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}

                    {/* ─── FUTURE IMPROVEMENTS ─── */}
                    {(nextSteps.length > 0 || endNote) && (
                        <section className="zc-section-block zc-animate">
                            <h2 className="zc-section-h2">Next Steps</h2>
                            {project.slug !== 'dashboard-design' && nextSteps.length === 0 && (
                                <p className="zc-section-desc">Post-launch user testing and funnel analysis would help refine time estimates, error handling, and navigation clarity.</p>
                            )}
                            <div className="zc-impact-list" style={{ marginTop: '24px' }}>
                                {nextSteps.map((step, i) => (
                                    <div key={i} className="zc-impact-item">
                                        <span className="zc-step-icon">❇️</span>
                                        <span>{step}</span>
                                    </div>
                                ))}
                            </div>

                            {endNote && (
                                <div className="zc-dark-card zc-animate" style={{ marginTop: '40px', textAlign: 'center', fontStyle: 'italic', padding: '32px' }}>
                                    <p>{endNote}</p>
                                </div>
                            )}
                        </section>
                    )}
                </div>

            </main>

            {/* ─── NEXT PROJECT (full 1600px width) ─── */}
            <section className="zc-next-section zc-animate">
                <div className="zc-next-inner">
                    <span className="zc-next-label">Next Project</span>
                    <div className="work-grid-kanso">
                        {[nextProject, projectsData[(currentIndex + 2) % projectsData.length]].map((p, i) => (
                            <Link key={i} to={`/project/${p.slug}`} className="work-card-kanso">
                                <div className="work-img-wrapper">
                                    <img src={p.image} alt={p.title} />
                                </div>
                                <div className="work-info">
                                    <div className="info-top">
                                        <h3 className="project-title">{p.title}</h3>
                                        <span className="project-year">{p.year}</span>
                                    </div>
                                    <div className="info-bottom">
                                        <span className="project-type">{p.type}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ProjectDetail;
