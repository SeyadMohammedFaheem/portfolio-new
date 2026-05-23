import React from 'react';
import { Canvas } from '@react-three/fiber';
import TunnelBackground from './TunnelBackground';

export default function ThreeCanvas({ videoElement, progress }) {
  return (
    <Canvas orthographic camera={{ zoom: 1, position: [0, 0, 1] }}>
      <TunnelBackground video={videoElement} progress={progress} />
    </Canvas>
  );
}
