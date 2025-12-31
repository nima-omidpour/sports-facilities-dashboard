"use client";

import { useState } from "react";
import SideBar from "@/components/owner/layout/side-bar";
import Header from "@/components/owner/layout/header";
import BackDrop from "@/components/comon/back-drop";
import { useLockBodyScroll } from "@/hooks/use-lock-body-scroll";
import { useEscapeKey } from "@/hooks/use-escape-key";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  useLockBodyScroll(isMenuOpen && window.innerWidth < 768);
  useEscapeKey(closeMenu, isMenuOpen);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex h-screen w-full bg-bg-main overflow-hidden">
      <BackDrop show={isMenuOpen} onClick={toggleMenu} />
      <SideBar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <main className="flex-1">
        <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        {children}
      </main>
    </div>
  );
}
