import { Island } from "@/Island";
import { MenuDrawer } from "@/components/MenuDrawer";
import { GlassLogo } from "@/components/GlassLogo";

export function Header() {
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 px-6 pt-6 pb-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Branding - Left Aligned with glass surface effect */}
          <Island>
            <GlassLogo />
          </Island>

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
