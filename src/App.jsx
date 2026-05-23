import React, { useEffect, useState, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Always-present shell components (tiny, needed on every page)
import Header from './components/Header';
import Footer from './components/Footer';

// Home is the most-visited page — keep it eager
import Home from './components/Home';

// Lazy-load ThreeJS Canvas so its heavy imports don't block initial load
const ThreeCanvas   = lazy(() => import('./components/ThreeCanvas'));

// Lazy-load every other route so their JS only downloads when needed
const BlogDetail    = lazy(() => import('./components/BlogDetail'));
const Projects      = lazy(() => import('./components/Projects'));
const Insights      = lazy(() => import('./components/Insights'));
const ProjectDetail = lazy(() => import('./components/ProjectDetail'));
const About         = lazy(() => import('./components/About'));
const Contact       = lazy(() => import('./components/Contact'));

gsap.registerPlugin(ScrollTrigger);

// Simple fallback shown while a lazy chunk is downloading
function PageFallback() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '60vh',
      color: 'rgba(255,255,255,0.3)',
      fontSize: '0.85rem',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
    }}>
      Loading…
    </div>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [videoElement, setVideoElement] = useState(null);
  const [progress, setProgress] = useState(0);
  const [showThree, setShowThree] = useState(false);

  useEffect(() => {
    // 1. Defer heavy Three.js Canvas mount to keep initial paint fully interactive and fast
    const canvasTimer = setTimeout(() => {
      setShowThree(true);
    }, 800);

    // 2. Defer heavy 4.79 MB background video loading to prevent network & CPU competition
    let video = null;
    let handleLoadedMetadata = null;

    const loadVideo = () => {
      video = document.createElement('video');
      video.src = '/aMrf9JGU3yYdb6750VEo3fjjEY.mp4';
      video.preload = 'auto';
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      video.autoplay = true;
      video.setAttribute('crossorigin', 'anonymous');

      handleLoadedMetadata = () => {
        video.play().then(() => {
          setVideoElement(video);
          setLoaded(true);
        }).catch(err => {
          console.error("Video play error:", err);
          setLoaded(true);
        });
      };

      video.addEventListener('loadedmetadata', handleLoadedMetadata);
    };

    // Wait until document finishes loading entirely, or load after a minor delay
    if (document.readyState === 'complete') {
      const videoTimer = setTimeout(loadVideo, 400);
      return () => {
        clearTimeout(canvasTimer);
        clearTimeout(videoTimer);
        if (video && handleLoadedMetadata) {
          video.removeEventListener('loadedmetadata', handleLoadedMetadata);
        }
      };
    } else {
      const handleLoad = () => {
        setTimeout(loadVideo, 200);
      };
      window.addEventListener('load', handleLoad);
      return () => {
        clearTimeout(canvasTimer);
        window.removeEventListener('load', handleLoad);
        if (video && handleLoadedMetadata) {
          video.removeEventListener('loadedmetadata', handleLoadedMetadata);
        }
      };
    }
  }, []);

  return (
    <BrowserRouter>
      <ReactLenis root>

        <Header />

        <div className="canvas-container">
          {showThree && (
            <Suspense fallback={null}>
              <ThreeCanvas videoElement={videoElement} progress={progress} />
            </Suspense>
          )}
        </div>

        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/"              element={<Home videoElement={videoElement} setProgress={setProgress} />} />
            <Route path="/blog/:id"      element={<BlogDetail />} />
            <Route path="/project/:slug" element={<ProjectDetail />} />
            <Route path="/projects"      element={<Projects />} />
            <Route path="/insights"      element={<Insights />} />
            <Route path="/about"         element={<About />} />
            <Route path="/contact"       element={<Contact />} />
          </Routes>
        </Suspense>

        <div className="viewport-top-blur"></div>

        <Footer />
      </ReactLenis>
    </BrowserRouter>
  );
}
