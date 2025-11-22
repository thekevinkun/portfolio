"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  fill = false,
  noWrapper = false, // NEW: Option to skip wrapper for special cases
}) => {
  const [isLoading, setIsLoading] = useState(true);

  // If noWrapper is true, return just the Image component
  if (noWrapper) {
    return fill ? (
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={className}
        onLoad={() => setIsLoading(false)}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    ) : (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={className}
        onLoad={() => setIsLoading(false)}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    );
  }

  return (
    <div className={`optimized-image-wrapper ${className}`}>
      {fill ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className={`optimized-image ${isLoading ? "loading" : "loaded"}`}
          onLoad={() => setIsLoading(false)}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className={`optimized-image ${isLoading ? "loading" : "loaded"}`}
          onLoad={() => setIsLoading(false)}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      )}

      {/* Loading shimmer effect */}
      {isLoading && (
        <motion.div
          className="image-loading-shimmer"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        />
      )}
    </div>
  );
};

export default OptimizedImage;
