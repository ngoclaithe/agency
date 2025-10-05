'use client';

import { useState } from "react";

const VIDEO_EMBED_URL = "https://www.youtube.com/embed/20xlrg5lfs8?autoplay=1&rel=0&modestbranding=1";

const VideoShowcaseSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="video-showcase-section py-16 sm:py-20">
      <div className="video-overlay-layer">
        <div className="container mx-auto px-6 sm:px-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <p className="text-sm uppercase tracking-wide text-[#ffb067]">Your Success, Amplified Now!</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold">Scale your business to the next level.</h2>
            <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed">
              With our tailored packages, you can finally overcome Facebook restrictions and thrive in your industry.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm font-medium">
              <span className="video-highlight-pill">Quick and Simple Setup</span>
              <span className="video-highlight-pill">24/7 Live Customer Support</span>
              <span className="video-highlight-pill">Global Access</span>
            </div>
          </div>

          <div className="video-player-wrapper mt-10">
            {isPlaying ? (
              <div className="responsive-embed">
                <iframe
                  src={VIDEO_EMBED_URL}
                  title="Scale your business to the next level"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            ) : (
              <button
                type="button"
                className="video-poster-button"
                onClick={() => setIsPlaying(true)}
                aria-label="Play video"
              >
                <div className="video-poster-image" style={{background: 'linear-gradient(135deg,#0f172a,#2563eb)', height: 0, paddingTop: '56.25%', position: 'relative'}}>
                  <svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" style={{position: 'absolute', inset: 0, width: '100%', height: '100%'}} aria-hidden="true">
                    <defs>
                      <linearGradient id="g1" x1="0" x2="1">
                        <stop offset="0%" stopColor="#0f172a" />
                        <stop offset="100%" stopColor="#2563eb" />
                      </linearGradient>
                      <filter id="noise"><feTurbulence baseFrequency="0.8" numOctaves="1" stitchTiles="stitch" /></filter>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#g1)" opacity="0.9" />
                  </svg>
                </div>
                <span className="poster-play-badge" aria-hidden="true">▶</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcaseSection;
