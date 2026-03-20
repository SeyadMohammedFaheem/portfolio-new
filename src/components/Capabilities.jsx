import React from 'react';

const Capabilities = () => {
    return (
        <section className="capabilities-kanso">
            <div className="cap-grid-container">
                {/* Column 1: Feature + Benefits */}
                <div className="cap-col-1">
                    <div className="cap-feature-card">
                        <div className="cap-card-bg">
                            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" alt="Design" />
                        </div>
                        <div className="cap-card-content">
                            <h3>Purposeful Design<br />for Modern Brands.</h3>
                            <div className="cap-card-footer">
                                <span className="cap-year">© 2025</span>
                                <button className="cap-cta-btn">Get started <span>+</span></button>
                            </div>
                        </div>
                    </div>

                    <div className="cap-benefits-card dark">
                        <ul className="cap-benefits-list">
                            <li><span className="dot"></span> Collaborative Approach</li>
                            <li><span className="dot"></span> Quick turnaround</li>
                            <li><span className="dot"></span> Clear Communication</li>
                            <li><span className="dot"></span> Consistent Quality</li>
                            <li><span className="dot"></span> Reliable Support</li>
                        </ul>
                    </div>
                </div>

                {/* Column 2: Testimonial */}
                <div className="cap-testimonial-card dark">
                    <div className="testimonial-header">
                        <div className="client-avatars">
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&sat=-100" alt="Client" />
                            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&sat=-100" alt="Client" />
                            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&sat=-100" alt="Client" />
                            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100&sat=-100" alt="Client" />
                        </div>
                        <div className="rating-box">
                            <span className="rating-num">4.9/5</span>
                            <span className="star">★</span>
                        </div>
                    </div>
                    <div className="client-count">100+ Happy clients worldwide</div>

                    <div className="testimonial-body">
                        <div className="stars">★★★★★</div>
                        <p className="testimonial-text">
                            "Faheem understood our brand better than we did. Their ability to find the essential and express it simply is what sets them apart."
                        </p>
                    </div>

                    <div className="testimonial-footer">
                        <div className="author-img">
                            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&sat=-100" alt="Sofia Ford" />
                        </div>
                        <div className="author-meta">
                            <span className="author-name">Sofia Ford</span>
                            <span className="author-role">Founder</span>
                        </div>
                    </div>
                </div>

                {/* Column 3: Mini Services Stack */}
                <div className="cap-services-stack">
                    <div className="cap-service-mini dark">
                        <div className="icon">⚡</div>
                        <h4>Streamlined Process</h4>
                        <p>Our focused, step-by-step approach saves time and keeps projects moving smoothly.</p>
                    </div>
                    <div className="cap-service-mini dark">
                        <div className="icon">🚀</div>
                        <h4>Scalable Design</h4>
                        <p>We create systems that grow with your brand and stay effective over time.</p>
                    </div>
                    <div className="cap-service-mini dark">
                        <div className="icon">🕒</div>
                        <h4>24/7 Dedicated Support</h4>
                        <p>We're always here when you need us, ready to answer questions, provide updates.</p>
                    </div>
                </div>

                {/* Column 4: Vertical Artist Card */}
                <div className="cap-art-card">
                    <div className="cap-card-bg full-color">
                        <img src="/images/design-with-intent.jpg" alt="Design with intent" />
                    </div>
                    <div className="cap-art-top">
                        <span className="brand-label">FAHEEM</span>
                    </div>
                    <div className="cap-art-bottom">
                        <h3>Design with intent.</h3>
                        <p>No excess, no fluff.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Capabilities;
