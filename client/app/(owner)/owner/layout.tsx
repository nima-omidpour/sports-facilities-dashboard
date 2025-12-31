"use client";

import { useState } from "react";
import SideBar from "@/app/components/owner/layout/side-bar";
import Header from "@/app/components/owner/layout/header";
export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex h-screen w-full bg-bg-main overflow-hidden">
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden backdrop-blur-sm transition-opacity   "
          onClick={toggleMenu}
        />
      )}
      <SideBar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <main className="flex-1">
        <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        {children}
      </main>
    </div>
  );
}
