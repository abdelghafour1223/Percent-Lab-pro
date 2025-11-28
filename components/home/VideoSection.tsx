'use client';

import { useState } from 'react';
import { Play } from 'lucide-react';

const YOUTUBE_VIDEO_ID = 'LjY3qbTRVjQ';

export default function VideoSection() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handlePlayClick = () => {
    setIsVideoLoaded(true);
  };

  return (
    <section className="mb-12 md:mb-16">
      <div className="text-center mb-6 md:mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 px-4">
          See How PercentLab Works
        </h2>
      </div>

      {/* Video Container with 16:9 Aspect Ratio */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="relative w-full pb-[56.25%] rounded-2xl overflow-hidden shadow-lg bg-muted">
          {!isVideoLoaded ? (
            // Lightweight thumbnail facade
            <div
              className="absolute inset-0 cursor-pointer group"
              onClick={handlePlayClick}
            >
              {/* High-quality YouTube thumbnail */}
              <img
                src={`https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg`}
                alt="See how PercentLab works - Video thumbnail"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />

              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />

              {/* Custom Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-primary rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-primary/90 transition-all duration-200">
                  <Play className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground ml-1" fill="currentColor" />
                </div>
              </div>
            </div>
          ) : (
            // YouTube iframe loaded on interaction
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0`}
              title="See How PercentLab Works"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-card border">
            <span className="text-2xl" role="img" aria-label="Lightning fast">⚡</span>
            <span className="font-semibold text-sm md:text-base">Lightning Fast</span>
          </div>
          <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-card border">
            <span className="text-2xl" role="img" aria-label="Educational">🎓</span>
            <span className="font-semibold text-sm md:text-base">Educational</span>
          </div>
          <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-card border">
            <span className="text-2xl" role="img" aria-label="Mobile ready">📱</span>
            <span className="font-semibold text-sm md:text-base">Mobile Ready</span>
          </div>
        </div>
      </div>
    </section>
  );
}
