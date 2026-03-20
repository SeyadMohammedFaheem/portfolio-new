import React from 'react';

const WorkList = () => {
    const expertise = [
        {
            year: "01",
            title: "Product Design",
            images: [
                "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=300",
            ]
        },
        {
            year: "02",
            title: "Brand Identity",
            images: [
                "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=300",
                "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=300",
            ]
        },
        {
            year: "03",
            title: "UX/UI Design",
            images: [
                "https://images.unsplash.com/photo-1586717791821-3f44a563cc4c?auto=format&fit=crop&q=80&w=300",
            ]
        },
        {
            year: "04",
            title: "Design Systems",
            images: [
                "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=300",
                "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=300",
            ]
        },
        {
            year: "05",
            title: "Strategy",
            images: [
                "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=300",
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
                    <div className="work-item" key={index}>
                        <div className="work-item-year">{item.year}</div>
                        <div className="work-item-title">{item.title}</div>
                        <div className="work-item-thumbnails">
                            {item.images.map((img, i) => (
                                <div className="work-thumbnail" key={i}>
                                    <img src={img} alt={`${item.title} ${i}`} />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WorkList;
