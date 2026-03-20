import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

const BlogDetail = () => {
    useEffect(() => {
        // Simple entrance animation
        gsap.from('.blog-detail-container', {
            opacity: 0,
            y: 30,
            duration: 1,
            ease: 'power3.out'
        });
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="blog-detail-page">
            <div className="blog-detail-container">

                <div className="blog-header">
                    <h1 className="blog-title-main">Designing for Calm: UX Beyond the Screen</h1>
                    <h3 className="blog-subtitle">An exploration of how subtle interaction, whitespace, and visual pacing shape user emotion.</h3>
                    
                    <div className="blog-meta">
                        <span className="meta-item">Date <span className="meta-value">May 23, 2025</span></span>
                        <span className="meta-sep">/</span>
                        <span className="meta-item">Category <span className="meta-value">Digital Design</span></span>
                        <span className="meta-sep">/</span>
                        <span className="meta-item">Writer <span className="meta-value">Emil Novak</span></span>
                    </div>
                </div>

                <div className="blog-featured-image">
                    <img src="/images/digital_design.png" alt="Designing for Calm" />
                </div>

                <article className="blog-content-body">
                    <p>We often think of user experience as a path to functionality. But at FAHEEM, we believe UX design is also emotional—it can soothe, focus, and even slow down time. The best interfaces don’t just help people do things; they help people feel better while doing them.</p>
                    <p>Let’s talk about designing for calm.</p>

                    <h4>The Invisible Weight of Digital Overload</h4>
                    <p>Every day, users navigate through an endless stream of tabs, apps, pop-ups, and notifications. It’s noisy—and even the cleanest interface can become part of the chaos if it’s not thoughtfully designed.</p>
                    <p>When a product feels chaotic, it demands attention. When it feels calm, it invites trust.</p>
                    <p>Designing for calm is about reducing friction, not just technically but emotionally. It’s about creating space—both visually and cognitively—for the user to move with clarity and control.</p>

                    <h4>Whitespace as Breathing Room</h4>
                    <p>Whitespace is often mistaken as just “empty space.” But in calm design, it’s active. It gives rhythm to content, focus to interactions, and lightness to heavy ideas.</p>
                    <p>When used intentionally, whitespace isn’t just aesthetic—it guides. It slows down the scroll. It creates visual priority. It allows the user to take a moment, instead of rushing forward.</p>

                    <h4>Typography that Guides, Not Distracts</h4>
                    <p>Typography is a silent carrier of emotion. Calm design favors type that is readable, balanced, and composed. It’s not shouting at the user—it’s speaking clearly.</p>
                    <p>Hierarchy, spacing, and consistency are key. By giving users a predictable visual language, we reduce micro-decisions and lower cognitive load. Less effort. More ease.</p>

                    <h4>Motion with Meaning</h4>
                    <p>Motion, when used sparingly, enhances calm. Think of a soft page transition, a loading indicator that gently fades, or a hover state that subtly acknowledges presence.</p>
                    <p>But motion should never be used for decoration alone—it must serve a purpose: orient the user, confirm an action, or reduce perceived waiting time.</p>
                </article>

                <footer className="blog-footer-nav">
                    <div className="related-articles-header">
                        <h2>Latest Articles</h2>
                    </div>
                    <div className="related-articles-grid">
                        <Link to="/blog/restraint" className="related-card">
                            <span className="related-category">Insights</span>
                            <h3 className="related-title">The Power of Restraint in Design</h3>
                        </Link>
                        <Link to="/blog/identity" className="related-card">
                            <span className="related-category">Strategy</span>
                            <h3 className="related-title">Building a Timeless Identity</h3>
                        </Link>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default BlogDetail;
