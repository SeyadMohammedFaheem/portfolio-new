import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import blogsData from '../data/blogsData.json';

const Insights = () => {
    const [activeFilter, setActiveFilter] = useState("All insights");

    // Dynamic categories from Notion data
    const categories = ["All insights", ...new Set(blogsData.map(p => p.category))];

    const filteredInsights = activeFilter === "All insights"
        ? blogsData
        : blogsData.filter(p => p.category === activeFilter);

    useEffect(() => {
        window.scrollTo(0, 0);

        gsap.from(".section-title", {
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
                        <h2 className="section-title">Latest Insights</h2>
                    </div>
                </div>

                <div className="projects-filter">
                    {categories.map((cat, index) => (
                        <button
                            key={cat}
                            className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                            onClick={() => setActiveFilter(cat)}
                        >
                            <span className="filter-slash">/</span> {cat}
                        </button>
                    ))}
                </div>

                <div className="projects-grid-full">
                    {filteredInsights.map((insight, index) => (
                        <Link to={`/blog/${insight.slug}`} className="work-card-kanso" key={`${insight.id}`}>
                            <div className="work-img-wrapper">
                                <img 
                                    src={insight.image} 
                                    alt={insight.title} 
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', imageRendering: 'crisp-edges' }} 
                                />
                            </div>
                            <div className="work-info">
                                <div className="info-top">
                                    <h3 className="project-title">{insight.title}</h3>
                                    <span className="project-year">{insight.date}</span>
                                </div>
                                <div className="info-bottom">
                                    <span className="project-type">{insight.category}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Insights;
