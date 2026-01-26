import { useState } from "react";
import { Drawer } from "vaul";

export function Header() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "./index.html" },
    { label: "About", href: "./about.html" },
    { label: "Insights", href: "./insights.html" },
    { label: "Open Source", href: "./open-source.html" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 px-6 pt-6 pb-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Branding - Left Aligned with backdrop blur */}
          <a href="./index.html" className="group flex flex-col w-fit bg-background px-4 py-3 rounded-full hover:bg-primary/20 transition-colors cursor-pointer">
            <span className="text-xl font-bold tracking-tighter text-white/90 group-hover:text-primary transition-colors">
              palmeida
            </span>
            <span className="text-[10px] text-gray-300 uppercase tracking-[0.2em] font-medium leading-none group-hover:text-primary transition-colors">
              Product Engineer
            </span>
          </a>

          {/* Single Glass Menu Trigger - Right Aligned */}
          <Drawer.Root open={open} onOpenChange={setOpen} direction="right">
            <Drawer.Trigger asChild>
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
            </Drawer.Trigger>

            <Drawer.Portal>
              <Drawer.Overlay className="fixed inset-0 bg-black/60 z-40" />
              <Drawer.Content className="fixed top-0 right-0 bottom-0 z-50 bg-zinc-900 flex flex-col rounded-l-[24px] w-[85vw] max-w-md">
                <div className="p-6 bg-zinc-900 rounded-l-[24px] flex-1 overflow-y-auto">
                  {/* Drawer Handle */}
                  <div className="w-1.5 h-12 rounded-full bg-zinc-700 mb-8" />

                  {/* Menu Title */}
                  <div className="mb-8">
                    <Drawer.Title className="text-2xl font-bold text-white mb-2">
                      Menu
                    </Drawer.Title>
                    <Drawer.Description className="text-gray-400 text-sm">
                      Navigate through the site
                    </Drawer.Description>
                  </div>

                  {/* Menu Items */}
                  <nav className="flex flex-col gap-2">
                    {menuItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="px-6 py-4 text-lg font-medium text-white/90 hover:text-primary hover:bg-primary/10 rounded-2xl transition-all"
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>
                </div>
              </Drawer.Content>
            </Drawer.Portal>
          </Drawer.Root>
        </div>
      </header>
      {/* Spacer to prevent content from sliding under fixed header */}
      <div className="h-24 bg-black" />
    </>
  );
}
