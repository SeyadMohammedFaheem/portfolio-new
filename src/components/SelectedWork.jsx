import React from 'react';

const SelectedWork = () => {
    const projects = [
        {
            title: "Project One",
            year: "2024",
            type: "Digital Experience",
            image: "/images/work/p1.png"
        },
        {
            title: "Project Two",
            year: "2024",
            type: "Visual Identity",
            image: "/images/work/p2.png"
        },
        {
            title: "Project Three",
            year: "2023",
            type: "Product Design",
            image: "/images/work/p3.png"
        },
        {
            title: "Project Four",
            year: "2023",
            type: "Brand System",
            image: "/images/work/p4.png"
        }
    ];

    return (
        <section className="selected-work-section">
            <div className="work-container">
                <div className="section-header">
                    <div className="header-left">
                        <h2 className="section-title">Selected work</h2>
                    </div>
                    <div className="header-right">
                        <a href="#" className="see-all-btn">
                            <span>View all projects</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="arrow-icon">
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="work-grid-kanso">
                    {projects.map((project, index) => (
                        <a href="#" className="work-card-kanso" key={index}>
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
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SelectedWork;
