import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import ProgressiveImage from './ProgressiveImage';

const SelectedWork = () => {
    const projects = projectsData.slice(0, 4);

    // Prefetch hero image for the project being hovered
    const prefetchedImages = React.useRef(new Set());
    const prefetchProject = useCallback((project) => {
        const heroImg = project.heroImage || project.image;
        if (prefetchedImages.current.has(heroImg)) return;
        prefetchedImages.current.add(heroImg);
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.as = 'image';
        link.href = heroImg;
        document.head.appendChild(link);
    }, []);

    return (
        <section className="selected-work-section">
            <div className="work-container">
                <div className="section-header">
                    <div className="header-left">
                        <h2 className="section-title">Selected work</h2>
                    </div>
                    <div className="header-right">
                        <Link to="/projects" className="see-all-btn">
                            <span>View all projects</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="arrow-icon">
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                            </svg>
                        </Link>
                    </div>
                </div>

                <div className="work-grid-kanso">
                    {projects.map((project, index) => (
                        project.isLocked ? (
                            <div className="work-card-kanso is-locked" key={index}>
                                <div className="work-img-wrapper">
                                    <ProgressiveImage src={project.image} alt={project.title} loading="lazy" decoding="async" width="800" height="600" />
                                    <div className="locked-overlay">
                                        <span>LOCKED
                                        </span>
                                    </div>
                                </div>
                                <div className="work-info">
                                    <div className="info-top">
                                        <h3 className="project-title">{project.title}</h3>
                                        <span className="project-year">{project.year}</span>
                                    </div>
                                    <div className="info-bottom">
                                        <span className="project-type">{project.type}</span>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <Link to={`/project/${project.slug}`} className="work-card-kanso" key={index} onMouseEnter={() => prefetchProject(project)}>
                                <div className="work-img-wrapper">
                                    <ProgressiveImage src={project.image} alt={project.title} loading="lazy" decoding="async" width="800" height="600" />
                                </div>
                                <div className="work-info">
                                    <div className="info-top">
                                        <h3 className="project-title">{project.title}</h3>
                                        <span className="project-year">{project.year}</span>
                                    </div>
                                    <div className="info-bottom">
                                        <span className="project-type">{project.type}</span>
                                    </div>
                                </div>
                            </Link>
                        )
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SelectedWork;
