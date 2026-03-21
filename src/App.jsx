import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { ReactLenis } from 'lenis/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import BlogDetail from './components/BlogDetail';
import Loader from './components/Loader';
import TunnelBackground from './components/TunnelBackground';
import Projects from './components/Projects';
import Insights from './components/Insights';
import ProjectDetail from './components/ProjectDetail';
import About from './components/About';
import Contact from './components/Contact';

gsap.registerPlugin(ScrollTrigger);

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
    const timeout = setTimeout(() => setLoaded(true), 4000);

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      clearTimeout(timeout);
    }
  }, []);

  return (
    <BrowserRouter>
      <ReactLenis root>
        <Loader loaded={loaded} />

        <Header />

        <div className="canvas-container">
          <Canvas orthographic camera={{ zoom: 1, position: [0, 0, 1] }}>
            <TunnelBackground video={videoElement} progress={progress} />
          </Canvas>
        </div>

        <Routes>
          <Route path="/" element={<Home videoElement={videoElement} setProgress={setProgress} />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </ReactLenis>
    </BrowserRouter>
  );
}
