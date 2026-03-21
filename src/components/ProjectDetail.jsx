import React, { useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { projectsData } from '../data/projectsData';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projectsData.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);

        if (project) {
            // Simple entrance animations
            gsap.from(".project-header-left h1, .project-header-right", {
                y: 30,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power3.out"
            });

            gsap.from(".project-meta-row", {
                y: 20,
                opacity: 0,
                duration: 1,
                delay: 0.2,
                ease: "power3.out"
            });

            gsap.from(".hero-img-container", {
                y: 40,
                opacity: 0,
                duration: 1.2,
                delay: 0.3,
                ease: "power3.out"
            });
        }
    }, [project]);

    if (!project) {
        return <Navigate to="/projects" replace />;
    }

    return (
        <div className="project-detail-page">
            <div className="projects-container">
                {/* Header */}
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

                {/* Section 01 */}
                <section className="project-content-block">
                    <div className="block-number">01 / The Challenge</div>
                    <div className="block-text">
                        <h2>{project.challenge.text}</h2>
                        <p>{project.challenge.subtext}</p>
                    </div>
                </section>

                {/* 2-Col Image Grid */}
                <div className="project-image-grid-2">
                    <div className="grid-img-wrap">
                        <img src={project.gridImages[0]} alt={`${project.title} Detail 1`} />
                    </div>
                    <div className="grid-img-wrap">
                        <img src={project.gridImages[1]} alt={`${project.title} Detail 2`} />
                    </div>
                </div>

                {/* Section 02 */}
                <section className="project-content-block">
                    <div className="block-number">02 / The Solution</div>
                    <div className="block-text">
                        <h2>{project.solution.text}</h2>
                        <p>{project.solution.subtext}</p>
                    </div>
                </section>

                {/* Stack Images */}
                <div className="project-image-stack">
                    <div className="grid-img-wrap">
                        <img src={project.stackImages[0]} alt={`${project.title} Lookbook 1`} />
                    </div>
                    <div className="grid-img-wrap">
                        <img src={project.stackImages[1]} alt={`${project.title} Lookbook 2`} />
                    </div>
                </div>

                {/* Section 03 */}
                <section className="project-content-block">
                    <div className="block-number">03 / The Result</div>
                    <div className="block-text">
                        <h2>{project.result}</h2>
                    </div>
                </section>

                {/* Full Width Impact Image */}
                <div className="hero-img-container impact">
                    <img src={project.impactImage} alt={`${project.title} Impact Shot`} />
                </div>

                {/* Latest Projects Links */}
                <div className="latest-projects-section">
                    <div className="section-header">
                        <h2 className="section-title">Latest Projects.</h2>
                    </div>
                    
                    <div className="projects-grid-full">
                        {projectsData.slice(0, 2).map((latestProject, index) => (
                            <Link to={`/project/${latestProject.id}`} className="work-card-kanso" key={`latest-${index}`}>
                                <div className="work-img-wrapper" style={{ overflow: 'hidden' }}>
                                    <img src={latestProject.image} alt={latestProject.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div className="work-info">
                                    <div className="info-top">
                                        <h3 className="project-title">{latestProject.title}</h3>
                                        <span className="project-year">{latestProject.year}</span>
                                    </div>
                                    <div className="info-bottom">
                                        <span className="project-type">{latestProject.type}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProjectDetail;
