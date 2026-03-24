import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { projectsData } from '../data/projectsData';

const Projects = () => {
    const allProjects = projectsData;

    const [activeFilter, setActiveFilter] = useState("All projects");

    // Extract unique categories
    const categories = ["All projects", ...new Set(allProjects.map(p => p.type))];

    const filteredProjects = activeFilter === "All projects"
        ? allProjects
        : allProjects.filter(p => p.type === activeFilter);

    useEffect(() => {
        window.scrollTo(0, 0);

        gsap.from(".kanso-projects-title", {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power4.out"
        });

        gsap.from(".work-card-kanso", {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power4.out",
            delay: 0.2
        });
    }, []);

    // Re-trigger animation when filter changes
    useEffect(() => {
        gsap.fromTo(".work-card-kanso",
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out" }
        );
    }, [activeFilter]);

    return (
        <div className="projects-page">
            <div className="projects-container">
                <div className="section-header">
                    <div className="header-left">
                        <h2 className="section-title">My Works</h2>
                    </div>
                </div>

                <div className="projects-filter">
                    {categories.map((cat, index) => (
                        <button
                            key={cat}
                            className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                            onClick={() => setActiveFilter(cat)}
                        >
                            <span className="filter-slash">/</span> {cat === "All projects" ? "All projects" : cat}
                        </button>
                    ))}
                </div>

                <div className="projects-grid-full">
                    {filteredProjects.map((project, index) => (
                        <Link to={`/project/${project.slug}`} className="work-card-kanso" key={`${project.id}-${index}`}>
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
        </div>
    );
};

export default Projects;
