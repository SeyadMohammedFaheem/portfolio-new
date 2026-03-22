import React, { useState, useEffect } from 'react';

const WorkItemRow = ({ item, index }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        let interval;
        if (isHovered && item.images.length > 1) {
            interval = setInterval(() => {
                setActiveIndex((prev) => (prev + 1) % item.images.length);
            }, 1200); // Crossfade every 1.2s
        } else {
            setActiveIndex(0); // Reset when unhovered
        }
        return () => clearInterval(interval);
    }, [isHovered, item.images.length]);

    return (
        <div 
            className="work-item" 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="work-item-year">
                {item.year}<span className="orange-dot"></span>
            </div>
            
            <div className="work-item-content">
                <div className="work-item-title">{item.title}</div>
                <p className="work-item-desc">{item.description}</p>
                <div className="work-item-skills">
                    {item.skills?.map((skill, si) => (
                        <span className="skill-pill" key={si}>{skill}</span>
                    ))}
                </div>
            </div>
            
            <div className="work-item-thumbnails">
                {item.images.map((img, i) => (
                    <div 
                        className={`work-thumbnail ${isHovered && i !== activeIndex ? 'hidden-thumb' : ''}`} 
                        key={i}
                    >
                        <img src={img} alt={`${item.title} ${i}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

const WorkList = () => {
    const expertise = [
        {
            year: "01",
            title: "Product Design",
            description: "End-to-end product design solutions focusing on user-centered experiences and robust functional architecture.",
            skills: ["User Research", "Prototyping", "Usability Testing", "Design Systems"],
            images: [
                "/images/digital_design.png",
                "/images/delete-button.png",
            ]
        },
        {
            year: "02",
            title: "Brand Identity",
            description: "Crafting memorable visual identities that deeply connect with your target audience across all mediums.",
            skills: ["Logo Design", "Visual Language", "Typography", "Brand Guidelines"],
            images: [
                "/images/strategy.png",
                "/images/design-with-intent.jpg",
                "/images/insights.png"
            ]
        },
        {
            year: "03",
            title: "UX/UI Design",
            description: "Beautiful, conversion-focused user interfaces built on a foundation of solid user experience research.",
            skills: ["Wireframing", "Interaction Design", "Responsive Design", "Accessibility"],
            images: [
                "/images/design-with-intent.jpg",
                "/images/digital_design.png",
            ]
        },
        {
            year: "04",
            title: "Design Systems",
            description: "Scalable component libraries that help engineering and design teams move fast without breaking things.",
            skills: ["Component Libraries", "Documentation", "Token Management"],
            images: [
                "/images/insights.png",
                "/images/strategy.png",
            ]
        },
        {
            year: "05",
            title: "Social Media",
            description: "Branded templates and content systems to help you stay consistent and scroll-worthy.",
            skills: ["Instagram Design", "Story Kits", "Content Templates", "Visual Consistency"],
            images: [
                "/images/delete-button.png",
                "/images/digital_design.png",
                "/images/insights.png"
            ]
        }
    ];

    return (
        <section className="work-list-section">
            <div className="work-list-container">
                <div className="work-header-custom">
                    <h2 className="work-title-giant">EXPERTISE</h2>
                    <a href="#" className="view-all-btn-orange">
                        <span>VIEW ALL SERVICES</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                    </a>
                </div>
                {expertise.map((item, index) => (
                    <WorkItemRow key={index} item={item} index={index} />
                ))}
            </div>
        </section>
    );
};

export default WorkList;
