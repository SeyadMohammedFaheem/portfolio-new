import React from 'react';
import { Link } from 'react-router-dom';

const InsightsSection = () => {
    return (
        <section className="insights-section">
            <div className="section-header">
                <div className="header-left">
                    <h2 className="section-title">Latest Insights</h2>
                </div>
                <div className="header-right">
                    <a href="#" className="see-all-btn">
                        <span>See All</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="arrow-icon">
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                    </a>
                </div>
            </div>
            <div className="insights-grid">
                
                {/* Large Card */}
                <Link to="/blog/restraint" className="insights-card large">
                    <img 
                        src="/images/insights.png" 
                        alt="Insights" 
                        className="insights-card-bg"
                    />
                    <div className="card-badge">Insights</div>
                    
                    <div className="card-content">
                        <div className="card-date">May 30, 2025</div>
                        <h3 className="card-title">The Power of Restraint in Design</h3>
                        <p className="card-desc">
                            A look at how simplicity can sharpen communication,
                            increase impact, and build longer-lasting brands.
                        </p>
                    </div>
                </Link>

                {/* Standard Card 1 */}
                <Link to="/blog/calm" className="insights-card standard">
                    <div className="img-container">
                        <img 
                            src="/images/digital_design.png" 
                            alt="Digital Design" 
                        />
                        <div className="card-badge">Digital Design</div>
                    </div>
                    
                    <div className="card-content">
                        <div className="card-date">May 23, 2025</div>
                        <h3 className="card-title">Designing for Calm: UX Beyond the Screen</h3>
                        <p className="card-desc">
                            An exploration of how subtle interaction, 
                            whitespace, and visual pacing shape user emotion.
                        </p>
                    </div>
                </Link>

                {/* Standard Card 2 */}
                <Link to="/blog/identity" className="insights-card standard">
                    <div className="img-container">
                        <img 
                            src="/images/strategy.png" 
                            alt="Strategy" 
                        />
                        <div className="card-badge">Strategy</div>
                    </div>
                    
                    <div className="card-content">
                        <div className="card-date">May 16, 2025</div>
                        <h3 className="card-title">Building a Timeless Identity</h3>
                        <p className="card-desc">
                            A guide to creating brands that transcend 
                            trends, focusing on core values instead.
                        </p>
                    </div>
                </Link>

            </div>
        </section>
    );
};

export default InsightsSection;
