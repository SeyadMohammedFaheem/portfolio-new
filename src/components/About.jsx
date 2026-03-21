import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);

        gsap.from(".kanso-projects-title", {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power4.out"
        });

        gsap.from(".about-content > *", {
            y: 40,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            delay: 0.2,
            ease: "power3.out"
        });
    }, []);

    return (
        <div className="projects-page about-page-wrapper">
            <div className="projects-container">
                <header className="kanso-projects-hero">
                    <h1 className="kanso-projects-title">About.</h1>
                </header>

                <div className="about-content">
                    <div className="about-grid">
                        <div className="about-image-col">
                            <div className="work-img-wrapper">
                                <img src="https://images.unsplash.com/photo-1544168190-79c15427015f?auto=format&fit=crop&q=80&w=1000" alt="Faheem Portrait" style={{ aspectRatio: '3/4', width: '100%', objectFit: 'cover' }} />
                            </div>
                        </div>
                        <div className="about-text-col">
                            <h2>I'm Faheem, a product designer focused on functional aesthetics and intuitive experiences.</h2>
                            <p>With over a decade of experience in digital design, I bridge the gap between complex engineering systems and beautifully simple user interfaces. Drawing inspiration from brutalist architecture and minimalist theory, my approach strips away all unnecessary noise.</p>
                            <p>Based in Riyadh, I've partnered with startups to Fortune 500s across the globe to build digital products that are not just accessible and stunning, but deeply conversion-driven.</p>

                            <div className="experience-list">
                                <h3>Experience</h3>
                                <div className="exp-item">
                                    <div className="exp-year">2021 — Present</div>
                                    <div className="exp-role">
                                        <strong>Senior Product Designer</strong>
                                        <span>Studio Kanso</span>
                                    </div>
                                </div>
                                <div className="exp-item">
                                    <div className="exp-year">2018 — 2021</div>
                                    <div className="exp-role">
                                        <strong>Lead UI/UX Designer</strong>
                                        <span>TechFlow Inc.</span>
                                    </div>
                                </div>
                                <div className="exp-item">
                                    <div className="exp-year">2015 — 2018</div>
                                    <div className="exp-role">
                                        <strong>Digital Designer</strong>
                                        <span>Creative Form</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
