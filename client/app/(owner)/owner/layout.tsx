import SideBar from "@/app/components/owner/layout/side-bar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full bg-bg-main overflow-hidden">
      <SideBar />
      <main className="flex-1">{children}</main>
    </div>
  );
}
