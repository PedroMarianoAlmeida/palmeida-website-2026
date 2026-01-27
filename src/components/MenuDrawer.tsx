import { useState } from "react";
import { Drawer } from "vaul";
import { HomeIcon, LightbulbIcon, DollarSignIcon } from "lucide-react";
import { siGithub, siReaddotcv } from "simple-icons";
import GlareHover from "@/components/reactBits/GlareHover";

export function MenuDrawer() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    {
      label: "Home",
      href: "./index.html",
      icon: <HomeIcon />,
    },
    {
      label: "Insights",
      href: "./insights.html",
      icon: <LightbulbIcon />,
    },
  ];

  return (
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
        <Drawer.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Drawer.Content className="fixed top-0 right-0 bottom-0 z-50 bg-zinc-900/40 backdrop-blur-xl flex flex-col rounded-l-[24px] w-[85vw] max-w-md border-l border-white/10 shadow-2xl">
          <div className="p-6 rounded-l-[24px] flex-1 overflow-y-auto flex flex-col">
            {/* Close Button */}
            <Drawer.Close asChild>
              <button
                className="absolute top-6 right-6 p-2 hover:bg-zinc-800 rounded-lg transition-colors group"
                aria-label="Close menu"
              >
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </Drawer.Close>

            {/* Menu Title */}
            <div className="mb-8 mt-2">
              <Drawer.Title className="text-2xl font-bold text-white mb-2">
                Menu
              </Drawer.Title>
              <Drawer.Description className="text-gray-400 text-sm">
                Navigate through the site and{" "}
                <span className="text-secondary">beyond</span>
              </Drawer.Description>
            </div>

            {/* Menu Items */}
            <nav className="flex flex-col gap-2 flex-grow">
              {menuItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-8 py-2 text-lg font-medium text-white/90 hover:bg-primary/10 rounded-2xl transition-all flex items-center gap-4 group/item animate-in slide-in-from-right fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setOpen(false)}
                >
                  <span className="transition-all group-hover/item:scale-110 group-hover/item:rotate-12 text-primary">
                    {item.icon}
                  </span>
                  {item.label}
                  <span className="ml-auto text-xs font-mono text-gray-600 group-hover/item:text-primary/60">
                    // {String(index + 1).padStart(2, '0')}
                  </span>
                </a>
              ))}

              {/* Featured Card - USD Latam Jobs */}
              <a
                href="https://usd-latam-jobs.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block animate-in slide-in-from-right fade-in"
                style={{ animationDelay: '150ms' }}
                onClick={() => setOpen(false)}
              >
                <GlareHover
                  width="100%"
                  height="auto"
                  background="rgba(196, 240, 255, 0.05)"
                  borderRadius="1rem"
                  borderColor="rgba(196, 240, 255, 0.2)"
                  glareColor="#C4F0FF"
                  glareOpacity={0.3}
                  glareAngle={-45}
                  glareSize={200}
                  transitionDuration={500}
                  className="backdrop-blur-sm px-8 py-4"
                >
                  <div className="flex items-center gap-4 group/item w-full">
                    <span className="transition-all group-hover/item:scale-110 group-hover/item:rotate-12 text-secondary">
                      <DollarSignIcon />
                    </span>
                    <div className="flex-1">
                      <div className="text-lg font-medium text-white">Usd Latam Jobs</div>
                      <div className="text-xs text-gray-500 font-mono">Live Product</div>
                    </div>
                    <span className="text-xs font-mono text-secondary/60 group-hover/item:text-secondary/80">
                      // 03
                    </span>
                  </div>
                </GlareHover>
              </a>
            </nav>

            {/* Menu Footer - Utility Zone */}
            <div className="pt-6 border-t border-white/10">
              <div className="flex justify-between items-center">
                {/* Social Links - Left */}
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/palmeida-dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 text-gray-400 hover:text-white rounded-lg transition-all hover:scale-110 hover:rotate-12"
                    aria-label="LinkedIn"
                  >
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/PedroMarianoAlmeida"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 text-gray-400 hover:text-white rounded-lg transition-all hover:scale-110 hover:rotate-12"
                    aria-label="GitHub"
                  >
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                    >
                      <path d={siGithub.path} />
                    </svg>
                  </a>
                </div>

                {/* Download CV - Right */}
                <a
                  href="./assets/pedro-almeida-cv.docx"
                  download
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all flex items-center gap-2 text-sm font-medium group"
                  aria-label="Download CV"
                >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="transition-transform group-hover:scale-110"
                  >
                    <path d={siReaddotcv.path} />
                  </svg>
                  <span>CV</span>
                </a>
              </div>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
