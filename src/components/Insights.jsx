import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

const Insights = () => {
    const allInsights = [
        {
            title: "Delete Button Case Study",
            date: "Mar 22, 2026",
            type: "UX Design",
            image: "/images/delete-button.png",
            link: "/blog/delete-case-study"
        },
        {
            title: "Designing for Calm: UX Beyond the Screen",
            date: "May 23, 2025",
            type: "Digital Design",
            image: "/images/digital_design.png",
            link: "/blog/calm"
        },
        {
            title: "Building a Timeless Identity",
            date: "May 16, 2025",
            type: "Strategy",
            image: "/images/strategy.png",
            link: "/blog/identity"
        },
        {
            title: "The Typography Minimalist Guide",
            date: "May 10, 2025",
            type: "Branding",
            image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
            link: "/blog/typography"
        },
        {
            title: "Grid Systems and Order",
            date: "May 02, 2025",
            type: "Digital Design",
            image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80&w=800",
            link: "/blog/grids"
        },
        {
            title: "Color Theory for Agencies",
            date: "April 28, 2025",
            type: "Insights",
            image: "/images/work/work1.jpg",
            link: "/blog/color"
        }
    ];

    const [activeFilter, setActiveFilter] = useState("All insights");

    // Extract unique categories
    const categories = ["All insights", ...new Set(allInsights.map(p => p.type))];

    const filteredInsights = activeFilter === "All insights"
        ? allInsights
        : allInsights.filter(p => p.type === activeFilter);

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
                            <span className="filter-slash">/</span> {cat === "All insights" ? "All insights" : cat}
                        </button>
                    ))}
                </div>

                <div className="projects-grid-full">
                    {filteredInsights.map((insight, index) => (
                        <Link to={insight.link} className="work-card-kanso" key={`${insight.title}-${index}`}>
                            <div className="work-img-wrapper" style={{ overflow: 'hidden' }}>
                                {/* Let's assume the cards will act like projects but link to blog details */}
                                <img src={insight.image} alt={insight.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div className="work-info">
                                <div className="info-top">
                                    <h3 className="project-title">{insight.title}</h3>
                                    <span className="project-year">{insight.date}</span>
                                </div>
                                <div className="info-bottom">
                                    <span className="project-type">{insight.type}</span>
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
