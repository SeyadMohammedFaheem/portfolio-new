import React from 'react';
import { Link } from 'react-router-dom';
import blogsData from '../data/blogsData.json';

const InsightsSection = () => {
    // Take first 3 blogs for the homepage
    const displayPosts = blogsData.slice(0, 3);
    
    // Large card is the first one
    const mainPost = displayPosts[0];
    const sidePosts = displayPosts.slice(1);

    return (
        <section className="insights-section">
            <div className="section-header">
                <div className="header-left">
                    <h2 className="section-title">Latest Insights</h2>
                </div>
                <div className="header-right">
                    <Link to="/insights" className="see-all-btn">
                        <span>See All</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="arrow-icon">
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                    </Link>
                </div>
            </div>
            
            <div className="insights-grid">
                {/* Large Card (Dynamic) */}
                {mainPost ? (
                    <Link to={`/blog/${mainPost.slug}`} className="insights-card large">
                        <img 
                            src={mainPost.image} 
                            alt={mainPost.title} 
                            className="insights-card-bg"
                        />
                        <div className="card-badge">{mainPost.category}</div>
                        
                        <div className="card-content">
                            <div className="card-date">{mainPost.date}</div>
                            <h3 className="card-title">{mainPost.title}</h3>
                            <p className="card-desc">
                                Read the latest from my Notion.
                            </p>
                        </div>
                    </Link>
                ) : (
                    <p>Loading posts...</p>
                )}

                {/* Standard Cards (Dynamic) */}
                {sidePosts.map(post => (
                    <Link key={post.id} to={`/blog/${post.slug}`} className="insights-card standard">
                        <div className="img-container">
                            <img src={post.image} alt={post.title} />
                            <div className="card-badge">{post.category}</div>
                        </div>
                        
                        <div className="card-content">
                            <div className="card-date">{post.date}</div>
                            <h3 className="card-title">{post.title}</h3>
                            <p className="card-desc">
                                Exploring {post.category} and UX design.
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default InsightsSection;
