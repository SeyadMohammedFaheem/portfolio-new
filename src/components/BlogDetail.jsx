import React, { useEffect, useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { gsap } from 'gsap';
import blogsData from '../data/blogsData.json';

const BlogDetail = () => {
    const { id } = useParams();
    // UseSlug comparison (slug is generated in sync_blog.js)
    const post = blogsData.find(p => p.slug === id || p.id === id);

    useEffect(() => {
        if (!post) return;
        
        gsap.from('.blog-detail-container', {
            opacity: 0,
            y: 30,
            duration: 1,
            ease: 'power3.out'
        });
        window.scrollTo(0, 0);
    }, [id, post]);

    if (!post) return <Navigate to="/insights" />;

    return (
        <div className="blog-detail-page">
            <div className="blog-detail-container">

                {/* ── FIRST FOLD ── */}
                <div className="blog-header">
                    <h1 className="blog-title-main">{post.title}</h1>
                    <h3 className="blog-subtitle">Designing accessible and safe destructive actions, reducing accidental data loss without sacrificing usability.</h3>

                    <div className="blog-meta">
                        <span className="meta-item">Date <span className="meta-value">{post.date}</span></span>
                        <span className="meta-sep">/</span>
                        <span className="meta-item">Category <span className="meta-value">{post.category}</span></span>
                        <span className="meta-item">Writer <span className="meta-value">Faheem</span></span>
                    </div>
                </div>

                <div className="blog-featured-image">
                    <img src={post.image} alt={post.title} />
                </div>

                {/* ── DYNAMIC BLOG BODY (Notion Blocks) ── */}
                <article className="blog-body">
                    {(post.content || []).map((block, index) => {
                        switch (block.type) {
                            case 'h1':
                                return <h1 key={index} className="blog-section-title">{block.text}</h1>;
                            case 'h2':
                                return <h2 key={index} className="blog-section-title">{block.text}</h2>;
                            case 'h3':
                                return <h3 key={index} className="blog-section-title">{block.text}</h3>;
                            case 'p':
                                return block.text ? <p key={index}>{block.text}</p> : <div key={index} className="blog-spacing" />;
                            case 'img':
                                return (
                                    <div key={index} className="blog-img-full">
                                        <img src={block.url} alt={block.caption || "Blog image"} />
                                        {block.caption && <span className="img-caption">{block.caption}</span>}
                                    </div>
                                );
                            case 'li':
                                return (
                                    <ul key={index}>
                                        <li>{block.text}</li>
                                    </ul>
                                );
                            case 'quote':
                                return <blockquote key={index}>{block.text}</blockquote>;
                            case 'hr':
                                return <hr key={index} className="blog-divider" />;
                            default:
                                return null;
                        }
                    })}
                </article>

                {/* ── WHAT TO READ NEXT (Next in list) ── */}
                <footer className="blog-read-next">
                    <h2 className="blog-read-next-title">What to read next</h2>
                    <div className="blog-read-next-grid">
                        {blogsData.filter(b => b.id !== post.id).slice(0, 3).map(b => (
                            <Link key={b.id} to={`/blog/${b.slug}`} className="blog-next-card">
                                <div className="blog-next-card-img">
                                    <img src={b.image} alt={b.title} />
                                </div>
                                <span className="blog-next-card-cat">{b.category}</span>
                                <h3 className="blog-next-card-title">{b.title}</h3>
                            </Link>
                        ))}
                    </div>
                </footer>

                {/* ── LET'S COLLABORATE CTA ── */}
                <section className="blog-collab-cta">
                    <p className="blog-collab-label">Let's Collaborate</p>
                    <a href="mailto:faheemseyadmd@gmail.com" className="blog-collab-email">
                        faheemseyadmd@gmail.com
                    </a>
                </section>

            </div>
        </div>
    );
};

export default BlogDetail;
