import Sidebar from "@/components/Sidebar";
import MainContent from "@/components/MainContent";
import MobileNav from "@/components/MobileNav";
import ScrollIndicator from "@/components/ScrollIndicator";

export default function Home() {
  return (
    <>
      <MobileNav />
      <ScrollIndicator />
      <main className="cv-layout">
        <Sidebar />
        <MainContent />
      </main>
    </>
  );
}
