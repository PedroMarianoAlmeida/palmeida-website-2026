import { Island } from "@/Island";
import { MenuDrawer } from "@/components/MenuDrawer";

export function Header() {
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

          {/* Menu Drawer - Only this interactive part is wrapped in Island */}
          <Island>
            <MenuDrawer />
          </Island>
        </div>
      </header>
      {/* Spacer to prevent content from sliding under fixed header */}
      <div className="h-24 bg-black" />
    </>
  );
}
