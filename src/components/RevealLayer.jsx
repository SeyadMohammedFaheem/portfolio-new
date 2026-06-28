import React from 'react';

export default function RevealLayer({ image, cursorX, cursorY, radius }) {
  const maskGradient = `radial-gradient(circle ${radius}px at ${cursorX}px ${cursorY}px,
    rgba(0,0,0,1)    0%,
    rgba(0,0,0,1)    40%,
    rgba(0,0,0,0.75) 60%,
    rgba(0,0,0,0.4)  75%,
    rgba(0,0,0,0.12) 88%,
    rgba(0,0,0,0)    100%
  )`;

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        zIndex: 1,
        pointerEvents: 'none',
        opacity: 0.4,
        filter: 'brightness(0.8) contrast(1.2)',
        maskImage: maskGradient,
        WebkitMaskImage: maskGradient,
        maskRepeat: 'no-repeat',
        WebkitMaskRepeat: 'no-repeat',
        willChange: 'mask-image, -webkit-mask-image',
      }}
    />
  );
}
