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
                    <h1 className="blog-title-main">Delete Button Case Study</h1>
                    <h3 className="blog-subtitle">Designing accessible and safe destructive actions, reducing accidental data loss without sacrificing usability.</h3>
                    
                    <div className="blog-meta">
                        <span className="meta-item">Date <span className="meta-value">Mar 22, 2026</span></span>
                        <span className="meta-sep">/</span>
                        <span className="meta-item">Category <span className="meta-value">UX Design</span></span>
                        <span className="meta-sep">/</span>
                        <span className="meta-item">Writer <span className="meta-value">Faheem</span></span>
                    </div>
                </div>

                <div className="blog-featured-image">
                    <img src="/images/delete-button.png" alt="Delete Button Case Study" />
                </div>

                <article className="blog-content-body">
                    <p>Destructive actions—like deleting an account, removing a project, or finalizing an irreversible transaction—are moments of high anxiety for users. Poor interface design is often the primary cause of accidental data loss, which directly erodes user trust.</p>
                    <p>In this case study, I explored the challenge of standardizing destructive actions to improve clarity, prevent accidents, and ensure WCAG AA accessibility compliance.</p>

                    <h4>The Problem With "Proceed"</h4>
                    <p>Usability tests revealed that users frequently skip over critical warnings. When labels use vague terminology (e.g., "Proceed" or "Yes"), users often click out of habit without realizing the gravity of their action. Furthermore, on mobile, we discovered that secondary destructive buttons were dangerously close to primary "Save" actions.</p>
                    <p>A simple mis-tap often resulted in permanent data deletion.</p>

                    <h4>Friction Can Be Functional</h4>
                    <p>We typically think of "friction" in UX as a bad thing. However, for destructive actions, slowing the user down is the safest design choice.</p>
                    <p>My solution involved a complete redesign of our dialog patterns:</p>
                    <ul>
                        <li><strong>Explicit Labels:</strong> Replacing vague terms with undeniable verbs, such as "Delete Permanently".</li>
                        <li><strong>Two-Step Confirmation:</strong> Implementing a rule where high-stakes actions required users to manually type "DELETE" before the button became active.</li>
                        <li><strong>Visual Cues & Accessibility:</strong> Utilizing system red cautiously, improving contrast ratios to 4.5:1, and expanding touch targets to 44x44px.</li>
                    </ul>

                    <h4>The Results</h4>
                    <p>By treating friction as a feature rather than a bug, accident reports dropped dramatically. The new patterns effectively forced a cognitive slow-down right when it mattered most, ultimately resulting in a <strong>35% decrease in accidental deletions</strong> and a 100% compliance rate with our new accessibility standards.</p>
                    <p>Clear, empathetic design protects users from themselves.</p>
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
