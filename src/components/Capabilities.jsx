import React from 'react';

const Capabilities = () => {
    return (
        <section className="finance-features-section">
            <div className="finance-grid">

                {/* Card 1: Awwwards Nominee */}
                <div className="finance-card awwwards-card">
                    <div className="fc-content aww-content">
                        <div className="awwwards-icons">
                            <span className="w-icon">w.</span>
                            <svg className="ribbon-icon" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="8" r="5"></circle>
                                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                            </svg>
                        </div>
                        <div className="aww-text-block">
                            <h2>Awwwards Young Jury</h2>
                            <p>Recognized for excellence in web design and innovative digital experiences.</p>
                        </div>
                    </div>
                    <div className="fc-visual aww-visual">
                        <div className="fc-inner-mockup">
                            <img src="/images/awwwards-cert.jpg" alt="Awwwards Young Jury Faheem Certificate" style={{ objectFit: 'cover' }} />
                            <a
                                className="aww-hover-btn"
                                href="https://www.awwwards.com/jury-member/Faheemmeehaf"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="View Faheem's Awwwards Jury Profile"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="7" y1="17" x2="17" y2="7"></line>
                                    <polyline points="7 7 17 7 17 17"></polyline>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Card 2: Fintech Gradient Testimonial */}
                <div className="finance-card dark-card fintech-testimonial-card">
                    <div className="fintech-quote-icon">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                        </svg>
                    </div>
                    <p className="fintech-quote-text">
                        Faheem has a strong eye for detail and focuses on creating seamless user experiences. He iterates and refines designs based on feedback, understands development constraints, contributes ideas, and adapts quickly.                    </p>
                    <div className="fintech-author-pill">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150" alt="Vamsi" />
                        <div className="fintech-author-info">
                            <strong>Vamsi</strong>
                            <span>Project Manager, Pickcel</span>
                        </div>
                    </div>
                </div>

                {/* Card 3: Faheem Aesthetic Image */}
                <div className="finance-card kanso-image-card">
                    <img className="kanso-bg-img" src="/images/orange-abstract-bg.jpg" alt="Faheem minimal aesthetic" />
                    <div className="kanso-overlay"></div>
                    <div className="kanso-top-brand">FAHEEM</div>
                    <div className="kanso-bottom-text">
                        <h3>Design with intent.</h3>
                        <p>No excess, no fluff.</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Capabilities;
