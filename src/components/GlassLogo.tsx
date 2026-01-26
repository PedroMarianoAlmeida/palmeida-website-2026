import React from 'react';
import { GlassSurface } from '@/components/GlassSurface';

export function GlassLogo() {
  return (
    <GlassSurface
      width="auto"
      height="auto"
      borderRadius={9999}
      backgroundOpacity={0.15}
      brightness={15}
      opacity={0.85}
      blur={8}
      saturation={1.5}
      borderWidth={0.1}
      className="w-fit"
    >
      <a href="./index.html" className="group flex flex-col w-fit px-4 py-3 cursor-pointer">
        <span className="text-xl font-bold tracking-tighter text-white/90 group-hover:text-primary transition-colors">
          palmeida
        </span>
        <span className="text-[10px] text-gray-300 uppercase tracking-[0.2em] font-medium leading-none group-hover:text-primary transition-colors">
          Product Engineer
        </span>
      </a>
    </GlassSurface>
  );
}
