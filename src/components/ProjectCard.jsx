import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export default function ProjectCard({ project, index }) {
  const cardRef = useRef();
  const imageRef = useRef();

  useEffect(() => {
    // Reveal animation
    gsap.from(cardRef.current, {
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top bottom-=100px",
        toggleActions: "play none none reverse"
      },
      y: 60,
      opacity: 0,
      duration: 1.4,
      ease: "power4.out"
    });

    // Parallax effect on image
    gsap.to(imageRef.current, {
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      },
      y: 100, // Move image down as we scroll
      ease: "none"
    });
  }, []);

  return (
    <a
      href="#"
      className="project-card"
      ref={cardRef}
    >
      <div className="project-image-wrap">
        <img
          ref={imageRef}
          src={project.image}
          alt={project.title}
          loading="lazy"
          style={{ height: '120%', width: '110%', left: '-5%', top: '-10%', position: 'relative', objectFit: 'cover' }}
        />
      </div>
      <div className="project-details">
        <span className="project-name">{project.title}</span>
        <span className="project-meta">{project.category}</span>
      </div>
    </a>
  );
}
