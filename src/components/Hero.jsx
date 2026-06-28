import React, { useRef, useEffect, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import RevealLayer from './RevealLayer';

const SPOTLIGHT_R = 260;

export default function Hero({ videoElement, setProgress }) {
  const sectionRef = useRef();
  const titleRef = useRef();

  // Mouse tracking refs + state
  const mouse = useRef({ x: -999, y: -999 });
  const smooth = useRef({ x: -999, y: -999 });
  const rafRef = useRef(null);
  const [cursorPos, setCursorPos] = useState({ x: -999, y: -999 });

  // Smooth cursor animation loop
  useEffect(() => {
    const onMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener('mousemove', onMouseMove);

    const loop = () => {
      smooth.current.x += (mouse.current.x - smooth.current.x) * 0.18;
      smooth.current.y += (mouse.current.y - smooth.current.y) * 0.18;
      setCursorPos({ x: smooth.current.x, y: smooth.current.y });
      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    if (!videoElement) return;

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom top",
      scrub: 1,
      onUpdate: (self) => {
        setProgress(self.progress);
        if (videoElement && videoElement.duration && !videoElement.seeking) {
          const targetTime = self.progress * videoElement.duration;
          // Avoid seeking on tiny micro-changes to prevent layout thrashing
          if (Math.abs(videoElement.currentTime - targetTime) > 0.03) {
            videoElement.currentTime = targetTime;
          }
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
        <img src="/hero-runner.webp" alt="Runner" fetchpriority="high" loading="eager" />
      </div>

      <RevealLayer
        image="/reveal-hero-runner.png"
        cursorX={cursorPos.x}
        cursorY={cursorPos.y}
        radius={SPOTLIGHT_R}
      />
      
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
