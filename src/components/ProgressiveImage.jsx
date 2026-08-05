import React, { useState, useEffect, forwardRef } from 'react';

/**
 * ProgressiveImage Component
 * Loads a smaller WebP version of an image first, then swaps in the
 * high-resolution PNG or JPG version once it is fully loaded with a smooth transition.
 */
const ProgressiveImage = forwardRef(({
  src,
  alt = '',
  className = '',
  style = {},
  width,
  height,
  loading = 'lazy',
  ...props
}, ref) => {
  const [currentSrc, setCurrentSrc] = useState('');
  const [isHighResLoaded, setIsHighResLoaded] = useState(false);

  // Determine the WebP fallback URL
  const getWebpSrc = (originalSrc) => {
    if (!originalSrc) return '';
    // If it's already a WebP or external data URL, return it
    if (originalSrc.endsWith('.webp') || originalSrc.startsWith('data:')) {
      return originalSrc;
    }
    // Replace .png, .jpg, .jpeg with .webp
    return originalSrc.replace(/\.(png|jpe?g)$/i, '.webp');
  };

  const webpSrc = getWebpSrc(src);
  const isWebpDifferent = webpSrc !== src;

  useEffect(() => {
    if (!src) return;

    if (!isWebpDifferent) {
      // If we don't have a distinct JPG/PNG and WebP, just load the source directly
      setCurrentSrc(src);
      setIsHighResLoaded(true);
      return;
    }

    // Start by showing the lightweight WebP version
    setCurrentSrc(webpSrc);
    setIsHighResLoaded(false);

    // Preload the high-resolution JPG/PNG in the background
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setCurrentSrc(src);
      setIsHighResLoaded(true);
    };
  }, [src, webpSrc, isWebpDifferent]);

  return (
    <div
      className={`progressive-img-container ${className}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        height: '100%',
        ...(width && height ? { aspectRatio: `${width} / ${height}` } : {}),
        ...style
      }}
    >
      <img
        ref={ref}
        src={currentSrc}
        alt={alt}
        loading={loading}
        decoding="async"
        width={width}
        height={height}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'filter 0.4s ease, transform 0.4s ease',
          filter: isHighResLoaded ? 'none' : 'blur(4px)',
          ...style
        }}
        {...props}
      />
    </div>
  );
});

ProgressiveImage.displayName = 'ProgressiveImage';

export default ProgressiveImage;

