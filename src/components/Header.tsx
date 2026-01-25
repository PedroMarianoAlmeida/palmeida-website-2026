import React from "react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center backdrop-blur-md bg-background/10">
      {/* Branding - Left Aligned */}
      <a href="/" className="group flex flex-col">
        <span className="text-xl font-bold tracking-tighter text-white/90 group-hover:text-primary transition-colors">
          palmeida
        </span>
        <span className="text-[10px] text-gray-300 uppercase tracking-[0.2em] font-medium leading-none">
          Product Engineer
        </span>
      </a>

      {/* Single Glass Menu Trigger - Right Aligned */}
      <button
        type="button"
        className="relative bg-transparent outline-none border-none cursor-pointer w-[3.5em] h-[3.5em] [perspective:24em] [transform-style:preserve-3d] group"
      >
        {/* The Colored Base (Cyan to match your Scaling Status) */}
        <span
          className="absolute inset-0 rounded-[1.1em] block transition-transform duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[100%_100%] rotate-[15deg] group-hover:[transform:rotate(25deg)_translate3d(-0.3em,-0.3em,0.3em)]"
          style={{
            background:
              "linear-gradient(hsl(187, 90%, 50%), hsl(187, 90%, 40%))",
            boxShadow: "0.4em -0.4em 0.6em rgba(0, 0, 0, 0.3)",
          }}
        ></span>

        {/* The Glass Pane */}
        <span
          className="absolute inset-0 rounded-[1.1em] bg-[hsla(0,0%,100%,0.12)] transition-transform duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[80%_50%] flex backdrop-blur-[0.6em] border border-white/20 group-hover:[transform:translate3d(0,0,1.5em)]"
          style={{
            boxShadow: "0 0 0 0.1em hsla(0, 0%, 100%, 0.2) inset",
          }}
        >
          {/* Mini Hamburger Icon Inside the Glass */}
          <div className="m-auto flex flex-col gap-1.5 items-end">
            <div className="w-5 h-0.5 bg-white/90 rounded-full" />
            <div className="w-3 h-0.5 bg-white/90 rounded-full group-hover:w-5 transition-all duration-300" />
          </div>
        </span>
      </button>
    </header>
  );
}
