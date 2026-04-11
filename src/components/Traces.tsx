import React, { useMemo } from 'react';

interface TracesProps {
  density?: 'low' | 'normal';
  direction?: 'random' | 'outward';
}

export const Traces = ({ density = 'normal', direction = 'random' }: TracesProps) => {
  const traces = useMemo(() => {
    const items = [];
    const hCount = density === 'low' ? 6 : 12;
    const vCount = density === 'low' ? 8 : 17;

    // Generate horizontal traces
    for (let i = 0; i < hCount; i++) {
      const isReverse = Math.random() > 0.5;
      const color = Math.random() > 0.5 ? 'purple' : 'blue';
      const y = Math.floor(Math.random() * 14) * 80; // 0 to 1120 (80px steps)
      const length = 40 + Math.random() * 60; // 40 to 100px (shorter)
      const duration = 8 + Math.random() * 10; // Slower, more delicate
      const delay = Math.random() * -20; // Negative delay to start already on screen
      
      items.push({
        id: `h-${i}`,
        type: 'h',
        y,
        length,
        duration,
        delay,
        isReverse,
        color,
      });
    }
    
    // Generate vertical traces
    for (let i = 0; i < vCount; i++) {
      const isReverse = Math.random() > 0.5;
      const color = Math.random() > 0.5 ? 'purple' : 'blue';
      const x = Math.floor(Math.random() * 25) * 80; // 0 to 2000 (80px steps)
      const length = 40 + Math.random() * 60;
      const duration = 8 + Math.random() * 10;
      const delay = Math.random() * -20;
      
      items.push({
        id: `v-${i}`,
        type: 'v',
        x,
        length,
        duration,
        delay,
        isReverse,
        color,
      });
    }
    return items;
  }, [density, direction]);

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-0">
      <svg viewBox="0 0 1920 1080" className="w-full h-full object-cover opacity-50" preserveAspectRatio="xMidYMid slice">
        <defs>
          {/* Center Mask for Outward Traces */}
          {direction === 'outward' && (
            <>
              <radialGradient id="center-mask-grad" cx="50%" cy="50%" r="50%">
                <stop offset="15%" stopColor="black" />
                <stop offset="35%" stopColor="white" />
              </radialGradient>
              <mask id="trace-mask">
                <rect width="100%" height="100%" fill="url(#center-mask-grad)" />
              </mask>
            </>
          )}

          {/* Purple Gradients for fading tails */}
          <linearGradient id="h-purple" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(157,0,255,0)" />
            <stop offset="100%" stopColor="rgba(157,0,255,1)" />
          </linearGradient>
          <linearGradient id="h-purple-rev" x1="1" y1="0" x2="0" y2="0">
            <stop offset="0%" stopColor="rgba(157,0,255,0)" />
            <stop offset="100%" stopColor="rgba(157,0,255,1)" />
          </linearGradient>
          <linearGradient id="v-purple" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(157,0,255,0)" />
            <stop offset="100%" stopColor="rgba(157,0,255,1)" />
          </linearGradient>
          <linearGradient id="v-purple-rev" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="rgba(157,0,255,0)" />
            <stop offset="100%" stopColor="rgba(157,0,255,1)" />
          </linearGradient>

          {/* Blue Gradients for fading tails */}
          <linearGradient id="h-blue" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(59,130,246,0)" />
            <stop offset="100%" stopColor="rgba(59,130,246,1)" />
          </linearGradient>
          <linearGradient id="h-blue-rev" x1="1" y1="0" x2="0" y2="0">
            <stop offset="0%" stopColor="rgba(59,130,246,0)" />
            <stop offset="100%" stopColor="rgba(59,130,246,1)" />
          </linearGradient>
          <linearGradient id="v-blue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(59,130,246,0)" />
            <stop offset="100%" stopColor="rgba(59,130,246,1)" />
          </linearGradient>
          <linearGradient id="v-blue-rev" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="rgba(59,130,246,0)" />
            <stop offset="100%" stopColor="rgba(59,130,246,1)" />
          </linearGradient>
        </defs>

        {/* Flat Grid Lines */}
        <g stroke="rgba(255,255,255,0.04)" strokeWidth="1">
          {Array.from({ length: 14 }).map((_, i) => (
            <line key={`hl-${i}`} x1="0" y1={i * 80} x2="1920" y2={i * 80} />
          ))}
          {Array.from({ length: 25 }).map((_, i) => (
            <line key={`vl-${i}`} x1={i * 80} y1="0" x2={i * 80} y2="1080" />
          ))}
        </g>

        {/* Traces */}
        <g mask={direction === 'outward' ? "url(#trace-mask)" : undefined}>
          {traces.map((t) => {
            if (t.type === 'h') {
              const gradientId = `h-${t.color}${t.isReverse ? '-rev' : ''}`;
              let animValues = t.isReverse ? `1920; -${t.length}` : `-${t.length}; 1920`;
              if (direction === 'outward') {
                // Adjust start position so the "head" of the trace starts exactly at the center (960)
                animValues = t.isReverse ? `960; -${t.length}` : `${960 - t.length}; 1920`;
              }
              
              return (
                <rect
                  key={t.id}
                  y={t.y - 0.5}
                  width={t.length}
                  height="1"
                  fill={`url(#${gradientId})`}
                >
                  <animate
                    attributeName="x"
                    values={animValues}
                    dur={`${t.duration}s`}
                    begin={`${t.delay}s`}
                    repeatCount="indefinite"
                  />
                </rect>
              );
            } else {
              const gradientId = `v-${t.color}${t.isReverse ? '-rev' : ''}`;
              let animValues = t.isReverse ? `1080; -${t.length}` : `-${t.length}; 1080`;
              if (direction === 'outward') {
                // Adjust start position so the "head" of the trace starts exactly at the center (540)
                animValues = t.isReverse ? `540; -${t.length}` : `${540 - t.length}; 1080`;
              }

              return (
                <rect
                  key={t.id}
                  x={t.x - 0.5}
                  width="1"
                  height={t.length}
                  fill={`url(#${gradientId})`}
                >
                  <animate
                    attributeName="y"
                    values={animValues}
                    dur={`${t.duration}s`}
                    begin={`${t.delay}s`}
                    repeatCount="indefinite"
                  />
                </rect>
              );
            }
          })}
        </g>
      </svg>
    </div>
  );
};
