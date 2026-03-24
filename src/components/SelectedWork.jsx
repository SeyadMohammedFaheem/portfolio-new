import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';

const SelectedWork = () => {
    const projects = projectsData.slice(0, 4);

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
                        <Link to={`/project/${project.slug}`} className="work-card-kanso" key={index}>
                            <div className="work-img-wrapper">
                                <img src={project.image} alt={project.title} />
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
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SelectedWork;
