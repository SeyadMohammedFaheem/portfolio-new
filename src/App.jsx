import React, { useEffect, useState, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Always-present shell components (tiny, needed on every page)
import Header from './components/Header';
import Footer from './components/Footer';

// Lazy-load the heavy 3D Canvas element so it is decoupled from the initial page rendering path
const ThreeCanvas = lazy(() => import('./components/ThreeCanvas'));

// Home is the most-visited page — keep it eager
import Home from './components/Home';

// Lazy-load every other route so their JS only downloads when needed
// Store the import functions so we can prefetch them on idle
const lazyImports = {
  BlogDetail:    () => import('./components/BlogDetail'),
  Projects:      () => import('./components/Projects'),
  Insights:      () => import('./components/Insights'),
  ProjectDetail: () => import('./components/ProjectDetail'),
  About:         () => import('./components/About'),
  Contact:       () => import('./components/Contact'),
};

const BlogDetail    = lazy(lazyImports.BlogDetail);
const Projects      = lazy(lazyImports.Projects);
const Insights      = lazy(lazyImports.Insights);
const ProjectDetail = lazy(lazyImports.ProjectDetail);
const About         = lazy(lazyImports.About);
const Contact       = lazy(lazyImports.Contact);

// Prefetch all lazy route chunks during idle time so navigation is instant
function prefetchRoutes() {
  Object.values(lazyImports).forEach(importFn => importFn());
}

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

  // Prefetch all lazy route chunks once the page is idle
  useEffect(() => {
    if ('requestIdleCallback' in window) {
      const id = requestIdleCallback(() => prefetchRoutes());
      return () => cancelIdleCallback(id);
    } else {
      // Fallback: prefetch after 2s
      const t = setTimeout(prefetchRoutes, 2000);
      return () => clearTimeout(t);
    }
  }, []);

  useEffect(() => {
    const video = document.createElement('video');
    video.src = '/aMrf9JGU3yYdb6750VEo3fjjEY.mp4';
    video.preload = 'auto';
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.autoplay = true;
    video.setAttribute('crossorigin', 'anonymous');

    const handleLoadedMetadata = () => {
      video.play().then(() => {
        setVideoElement(video);
        setLoaded(true);
      }).catch(err => {
        console.error("Video play error:", err);
        setLoaded(true);
      });
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);

    // Fallback: reveal the site after 2s (reduced from 4s) — don't let video block rendering
    const timeout = setTimeout(() => setLoaded(true), 2000);

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      clearTimeout(timeout);
    }
  }, []);

  return (
    <BrowserRouter>
      <ReactLenis root>

        <Header />

        <div className="canvas-container">
          <Suspense fallback={<div className="canvas-placeholder" />}>
            <ThreeCanvas video={videoElement} progress={progress} />
          </Suspense>
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
