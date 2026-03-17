import React, { useEffect, useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { ReactLenis } from 'lenis/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Loader from './components/Loader';
import TunnelBackground from './components/TunnelBackground';

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
    <ReactLenis root>
      <div className="noise"></div>
      
      <Loader loaded={loaded} />

      <Header />

      <div className="canvas-container">
        <Canvas orthographic camera={{ zoom: 1, position: [0, 0, 1] }}>
          <TunnelBackground video={videoElement} progress={progress} />
        </Canvas>
      </div>

      <main>
        <Hero videoElement={videoElement} setProgress={setProgress} />
      </main>

      <Footer />
    </ReactLenis>
  );
}
