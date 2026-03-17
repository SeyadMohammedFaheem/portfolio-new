import React, { useRef, useMemo, useEffect } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';

const tunnelVertexShader = `
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

const tunnelFragmentShader = `
    uniform sampler2D uTexture;
    uniform float uZoom;
    uniform float uDistortion;
    uniform vec2 uFocalPoint;
    uniform vec2 uResolution;
    uniform vec2 uVideoResolution;
    varying vec2 vUv;

    void main() {
        float screenAspect = uResolution.x / uResolution.y;
        float videoAspect = uVideoResolution.x / uVideoResolution.y;
        
        vec2 center = uFocalPoint;
        vec2 screenDist = vUv - center;
        screenDist.x *= screenAspect;
        float d = length(screenDist);
        
        float zoomEffect = 1.0 + uZoom * clamp(1.0 - d, 0.0, 1.0);
        vec2 distortedVuv = center + (vUv - center) / zoomEffect;
        
        vec2 ratio = vec2(
            min(screenAspect / videoAspect, 1.0),
            min(videoAspect / screenAspect, 1.0)
        );

        vec2 uv = distortedVuv * ratio + (1.0 - ratio) * 0.5;
        uv = clamp(uv, 0.0, 1.0);
        
        vec4 texColor = texture2D(uTexture, uv);
        gl_FragColor = texColor * 0.6; // Darken for cinema effect
    }
`;

export default function TunnelBackground({ video, progress }) {
  const { size } = useThree();
  const meshRef = useRef();
  
  const uniforms = useMemo(() => ({
    uTexture: { value: null },
    uZoom: { value: 0 },
    uDistortion: { value: 0 },
    uFocalPoint: { value: new THREE.Vector2(0.5, 0.51) },
    uResolution: { value: new THREE.Vector2(1, 1) },
    uVideoResolution: { value: new THREE.Vector2(1, 1) }
  }), []);

  const videoTexture = useMemo(() => {
    if (!video) return null;
    const tex = new THREE.VideoTexture(video);
    tex.minFilter = THREE.LinearFilter;
    tex.magFilter = THREE.LinearFilter;
    return tex;
  }, [video]);

  useEffect(() => {
    if (videoTexture) {
      uniforms.uTexture.value = videoTexture;
    }
  }, [videoTexture, uniforms]);

  useEffect(() => {
    if (video) {
        if (video.videoWidth > 0) {
            uniforms.uVideoResolution.value.set(video.videoWidth, video.videoHeight);
        } else {
            video.addEventListener('loadedmetadata', () => {
                uniforms.uVideoResolution.value.set(video.videoWidth, video.videoHeight);
            }, { once: true });
        }
    }
  }, [video, uniforms]);

  useEffect(() => {
    uniforms.uResolution.value.set(size.width, size.height);
  }, [size, uniforms]);

  useFrame(() => {
    uniforms.uZoom.value = progress * 1.5;
    if (videoTexture) {
      videoTexture.needsUpdate = true;
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={tunnelVertexShader}
        fragmentShader={tunnelFragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}
