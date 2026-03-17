import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export default function Capabilities() {
  const sectionRef = useRef();
  const card1Ref = useRef();
  const card2Ref = useRef();
  const card3Ref = useRef();
  
  const stats = [
    { title: "20+ projects completed", icon: "✓", color: "#7c3aed" },
    { title: "5+ years of experiences", icon: "🚀", color: "#22c55e" },
    { title: "10+ happy clients", icon: "😊", color: "#eab308" }
  ];

  useEffect(() => {
    const cards = [card1Ref.current, card2Ref.current, card3Ref.current];
    
    // Initial entry animation for cards
    gsap.from(cards, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom-=100px",
      },
      y: 100,
      opacity: 0,
      duration: 1.5,
      stagger: 0.2,
      ease: "power4.out"
    });

    // Subtle floating animation for the featured middle card
    gsap.to(card2Ref.current, {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    // Parallax effect for the section
    gsap.to(cards, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      },
      y: (i) => (i - 1) * -40, // Different speeds for each card
      ease: "none"
    });
  }, []);

  return (
    <section className="capabilities" ref={sectionRef}>
      <div className="cap-columns">
        {/* Card 1: Awards */}
        <div className="cap-card card-light award-card" ref={card1Ref}>
          <div className="card-top">
            <div className="w-logo">w. <span className="medal-icon">🏅</span></div>
          </div>
          <div className="card-header">
            <h3>Awwwwards Nominee</h3>
            <p>Recognized for excellence in web design and innovative digital experiences.</p>
          </div>
          <div className="card-image-preview">
            <img src="/transcendence.png" alt="Project Preview" />
            <div className="preview-tag">
                <p>Your trusted partner for extraordinary events</p>
            </div>
          </div>
        </div>

        {/* Card 2: Quote */}
        <div className="cap-card card-dark quote-card" ref={card2Ref}>
          <div className="quote-mark">“ ”</div>
          <div className="quote-content">
            <p className="quote-text">
                Faheem’s design expertise goes beyond aesthetics—he crafts experiences that truly connect with users. A great collaborator and a problem-solver at heart
            </p>
          </div>
          <div className="quote-author">
            <div className="author-avatar">
                <img src="https://i.pravatar.cc/150?u=samantha" alt="Samantha" />
            </div>
            <div className="author-info">
              <span className="author-name">Samantha</span>
              <span className="author-role">Founder at NexaTech</span>
            </div>
          </div>
        </div>

        {/* Card 3: Stats (Expandable Stack on Hover) */}
        <div className="cap-card card-light stats-card expandable" ref={card3Ref}>
          <div className="trusted-badge">
            <div className="avatars">
              <img src="https://i.pravatar.cc/50?u=1" alt="u1" />
              <img src="https://i.pravatar.cc/50?u=2" alt="u2" />
              <img src="https://i.pravatar.cc/50?u=3" alt="u3" />
              <img src="https://i.pravatar.cc/50?u=4" alt="u4" />
            </div>
            <span>Trusted by many</span>
          </div>
          
          <div className="stats-stack-container">
            {stats.map((stat, index) => (
              <div key={index} className="stat-pill" style={{"--index": index}}>
                <span>{stat.title}</span>
                <div className="stat-icon" style={{ backgroundColor: stat.color }}>
                  {stat.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
