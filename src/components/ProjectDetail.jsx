import React, { useEffect } from 'react';
import { Link, useParams, Navigate, useNavigate } from 'react-router-dom';
import Header from './Header';
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

        return () => ScrollTrigger.getAll().forEach(t => t.kill());
    }, [project, slug]);

    if (!project) return <Navigate to="/projects" replace />;

    const scopeTags = project.service ? project.service.split(',').map(s => s.trim()) : [project.type];

    // Case study content (generic, adapts to each project)
    const goals = [
        'Create a Guided Onboarding Journey With Clear Expectations',
        'Reduce drop-offs and improve application completion rate',
        'Provide Clear Application Status to Improve User Confidence',
        'Build a reusable system for future integrations',
    ];

    const targetUsers = [
        'Users improving their experience with ' + (project.client || 'the product'),
        'First-time applicants and new users',
        'Users from varied demographics',
        'Users with varying levels of digital literacy',
    ];

    const keyInsights = [
        'Users are willing to fill long forms only if the journey flow is engaging',
        'Trust is a bigger blocker than effort',
        `${project.client || 'The product'} rarely explains what happens after submission`,
        'Lack of status visibility creates anxiety',
        'Redirection increases fear of rejection and abandonment',
    ];

    const solutionBlocks = [
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

    return (
        <div className="zc-page">
            <Header />

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
                    <img src={project.heroImage || project.image} alt={project.title} />
                </div>

                <div className="zc-content-col">
                    {/* ─── BACKGROUND & CONTEXT ─── */}
                    <section className="zc-section-block zc-animate">
                        <h2 className="zc-section-h2">Background &amp; Context</h2>
                        <p className="zc-section-desc">{project.description}</p>
                        <div className="zc-dark-card">
                            <p className="zc-dark-card-title">The Challenge</p>
                            <ul className="zc-bullet-list">
                                <li><span className="zc-bullet-dot">🛑</span> High drop-offs during application</li>
                                <li><span className="zc-bullet-dot">🛑</span> Poor visibility into user progress</li>
                                <li><span className="zc-bullet-dot">🛑</span> Inconsistent experience across platforms</li>
                            </ul>
                        </div>
                    </section>

                    {/* ─── TARGET USERS ─── */}
                    <section className="zc-section-block zc-animate">
                        <h2 className="zc-section-h2">Target Users</h2>
                        <ul className="zc-user-list">
                            {targetUsers.map((u, i) => (
                                <li key={i}><span className="zc-user-icon">👤</span>{u}</li>
                            ))}
                        </ul>
                    </section>

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
                </div>

                {/* ─── SOLUTION BLOCKS ─── */}
                {solutionBlocks.map((sol, i) => (
                    <section key={i} className="zc-solution-block zc-animate">
                        <span className="zc-sol-badge">SOLUTION {sol.num}</span>
                        <h2 className="zc-sol-title">{sol.title}</h2>

                        <p className="zc-sol-desc">{sol.desc}</p>
                        <div className="zc-rationale-box">
                            <p>{sol.rationale}</p>
                        </div>

                        <div className="zc-mockup-container" style={{ background: sol.mockupBg }}>
                            <img src={sol.mockupImg} alt={`Solution ${i + 1} mockup`} />
                        </div>
                    </section>
                ))}

                <div className="zc-content-col">
                    {/* ─── FUTURE IMPROVEMENTS ─── */}
                    <section className="zc-section-block zc-animate">
                        <h2 className="zc-section-h2">Next Steps</h2>
                        <p className="zc-section-desc">Post-launch user testing and funnel analysis would help refine time estimates, error handling, and navigation clarity.</p>
                        <ul className="zc-sparkle-list" style={{ marginTop: '24px' }}>
                            <li><span className="zc-sparkle">❇️</span> More user testing, validation, and iterations to refine flows and edge cases.</li>
                            <li><span className="zc-sparkle">❇️</span> Better personalisation of steps based on user profile and eligibility signals.</li>
                            <li><span className="zc-sparkle">❇️</span> Gamified concepts with subtle animations to increase engagement and reduce form fatigue.</li>
                        </ul>
                    </section>
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
