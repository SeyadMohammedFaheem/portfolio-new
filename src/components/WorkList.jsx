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
            description: "End-to-end product design from discovery and research to high-fidelity prototypes and handoff. Building products that are intuitive, functional, and visually compelling.",
            skills: ["User Research", "Wireframing", "Prototyping", "Usability Testing", "Design Systems"],
            images: [
                "/images/digital_design.png",
                "/images/delete-button.png",
            ]
        },
        {
            year: "02",
            title: "Design Systems",
            description: "Scalable, token-based component libraries that help engineering and design teams ship faster without sacrificing consistency.",
            skills: ["Component Libraries", "Token Management", "Documentation", "Figma Systems"],
            images: [
                "/images/design-tokens.png",
                "/images/strategy.png",
            ]
        },
        {
            year: "03",
            title: "Social Media",
            description: "Branded templates and content systems engineered to keep your social presence sharp, consistent, and scroll-stopping.",
            skills: ["Instagram Design", "Story Kits", "Content Templates", "Visual Consistency"],
            images: [
                "/images/google-ads-banner.png",
                "/images/digital_design.png",
                "/images/insights.png"
            ]
        },
        {
            year: "04",
            title: "Video Editing",
            description: "Motion-rich edits that tell your story with impact — from brand reels to product demos and social-first short form content.",
            skills: ["Brand Reels", "Short-Form Content", "Motion Graphics", "Color Grading"],
            images: [
                "/images/strategy.png",
                "/images/design-with-intent.jpg",
            ]
        },
        {
            year: "05",
            title: "Development",
            description: "Building robust, high-performance web applications and digital products. Translating complex designs into pixel-perfect, responsive, and interactive digital experiences.",
            skills: ["Front-end Development", "React.js", "Creative Coding", "Performance Optimization"],
            images: [
                "/images/octalume.png",
                "/images/skill_testing.png",
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
