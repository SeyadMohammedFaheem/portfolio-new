import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Hero({ videoElement, setProgress }) {
  const sectionRef = useRef();
  const titleRef = useRef();

  useEffect(() => {
    if (!videoElement) return;

    const scrub = { time: 0 };
    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "+=150%",
      pin: true,
      scrub: 1,
      onUpdate: (self) => {
        setProgress(self.progress);
        if (videoElement.duration) {
          const targetTime = self.progress * videoElement.duration;
          gsap.to(scrub, {
            time: targetTime,
            duration: 0.5,
            ease: "power1.out",
            onUpdate: () => {
              videoElement.currentTime = scrub.time;
            }
          });
        }
      }
    });

    // Reveal animation
    gsap.from(titleRef.current.children, {
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
      stagger: 0.1,
      delay: 0.5
    });

    return () => trigger.kill();
  }, [videoElement, setProgress]);

  return (
    <section ref={sectionRef} className="hero">
      <div className="hero-bg-image">
        <img src="/hero-bg.jpg" alt="Runner" />
      </div>
      
      <div className="hero-main-title" ref={titleRef}>
        <div>PRODUCT</div>
        <div>DESIGNER<span className="accent">*</span></div>
      </div>
      
      <div className="hero-sub">
        <p className="hero-desc">
          Building cinematic digital experiences with a focus on motion, code, and editorial design.
        </p>
        <div className="hero-badge">©2026 FAHEEM</div>
      </div>
    </section>
  );
}
