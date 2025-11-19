import Sidebar from "@/components/Sidebar";
import MainContent from "@/components/MainContent";
import MobileNav from "@/components/MobileNav";

export default function Home() {
  return (
    <>
      <MobileNav />
      <main className="cv-layout">
        <Sidebar />
        <MainContent />
      </main>
    </>
  );
}
