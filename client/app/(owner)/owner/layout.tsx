import SideBar from "@/app/components/owner/layout/side-bar";
import Header from "@/app/components/owner/layout/header";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full bg-bg-main overflow-hidden">
      <SideBar />
      <main className="flex-1">
        <Header />
        {children}
      </main>
    </div>
  );
}
