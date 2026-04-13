import React, { useEffect, useState, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { ReactLenis } from 'lenis/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Always-present shell components (tiny, needed on every page)
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/Loader';
import TunnelBackground from './components/TunnelBackground';

// Home is the most-visited page — keep it eager
import Home from './components/Home';

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

    // Fallback: reveal the site after 4 s regardless of video state
    const timeout = setTimeout(() => setLoaded(true), 4000);

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
          <Canvas orthographic camera={{ zoom: 1, position: [0, 0, 1] }}>
            <TunnelBackground video={videoElement} progress={progress} />
          </Canvas>
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
