import React, { useEffect, useState, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

// Always-present shell components
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';

// Lazy-load the heavy 3D Canvas element
const ThreeCanvas = lazy(() => import('./components/ThreeCanvas'));

// Lazy-load non-critical floating UI so they don't block initial paint & hydration
const ReferralPopup = lazy(() => import('./components/ReferralPopup'));
const Chatbot       = lazy(() => import('./components/Chatbot'));

// Lazy-load routes
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

function prefetchRoutes() {
  Object.values(lazyImports).forEach(importFn => importFn());
}

gsap.registerPlugin(ScrollTrigger);

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
  const [mountDeferredUI, setMountDeferredUI] = useState(false);

  useEffect(() => {
    const deferTask = () => {
      setMountDeferredUI(true);
      prefetchRoutes();
    };

    if ('requestIdleCallback' in window) {
      const id = requestIdleCallback(deferTask);
      return () => cancelIdleCallback(id);
    } else {
      const t = setTimeout(deferTask, 1000);
      return () => clearTimeout(t);
    }
  }, []);

  useEffect(() => {
    const video = document.createElement('video');
    video.src = '/aMrf9JGU3yYdb6750VEo3fjjEY.mp4';
    video.preload = 'metadata';
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
    const timeout = setTimeout(() => setLoaded(true), 1500);

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <BrowserRouter>
      <ReactLenis root>

        <Header />

        <div className="canvas-container" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: -1 }}>
          <Suspense fallback={<div className="canvas-placeholder" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: '#0a0a0a', pointerEvents: 'none', zIndex: -1 }} />}>
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

        {mountDeferredUI && (
          <Suspense fallback={null}>
            <ReferralPopup />
            <Chatbot />
          </Suspense>
        )}

        <Footer />
        <Analytics />
        <SpeedInsights />
      </ReactLenis>
    </BrowserRouter>
  );
}
