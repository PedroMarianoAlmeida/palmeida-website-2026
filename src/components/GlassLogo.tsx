import { GlassSurface } from "@/components/GlassSurface";

export function GlassLogo() {
  return (
    <GlassSurface
      width="auto"
      height="auto"
      borderRadius={50}
      backgroundOpacity={0.6}
      saturation={1}
      borderWidth={0}
      brightness={50}
      opacity={0.8}
      blur={11}
      displace={0.3}
      distortionScale={-180}
      redOffset={0}
      greenOffset={10}
      blueOffset={20}
      className="w-fit"
    >
      <a
        href="./index.html"
        className="group flex flex-col w-fit px-8 pt-1 pb-3 cursor-pointer gap-1"
      >
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
