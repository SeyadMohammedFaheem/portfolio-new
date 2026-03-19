import React from 'react';

const WorkList = () => {
    const projects = [
        {
            year: "2025",
            title: "Outside",
            images: [
                "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=300",
            ]
        },
        {
            year: "2024",
            title: "Juvede",
            images: [
                "https://images.unsplash.com/photo-1493246507139-91e8bef99c02?auto=format&fit=crop&q=80&w=300",
                "https://images.unsplash.com/photo-1472396961695-1ad7277ff71f?auto=format&fit=crop&q=80&w=300",
                "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=300",
            ]
        },
        {
            year: "2025",
            title: "Zaine",
            images: [
                "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=300",
            ]
        },
        {
            year: "2024",
            title: "Wall Out",
            images: [
                "https://images.unsplash.com/photo-1552168324-d612d77725e3?auto=format&fit=crop&q=80&w=300",
                "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&q=80&w=300",
            ]
        },
        {
            year: "2019",
            title: "Geaton",
            images: [
                "https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&q=80&w=300",
                "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=300",
                "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?auto=format&fit=crop&q=80&w=300",
            ]
        },
        {
            year: "2020",
            title: "Skate",
            images: [
                "https://images.unsplash.com/photo-1547447134-cd3f5c716030?auto=format&fit=crop&q=80&w=300",
            ]
        }
    ];

    return (
        <section className="work-list-section">
            <div className="work-list-container">
                {projects.map((project, index) => (
                    <div className="work-item" key={index}>
                        <div className="work-item-year">{project.year}</div>
                        <div className="work-item-title">{project.title}</div>
                        <div className="work-item-thumbnails">
                            {project.images.map((img, i) => (
                                <div className="work-thumbnail" key={i}>
                                    <img src={img} alt={`${project.title} ${i}`} />
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
