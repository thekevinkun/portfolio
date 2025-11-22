import Sidebar from "@/components/Sidebar";
import MainContent from "@/components/MainContent";
import MobileNav from "@/components/MobileNav";
import FloatingNav from "@/components/FloatingNav";
import ScrollIndicator from "@/components/ScrollIndicator";

export default function Home() {
  return (
    <>
      <MobileNav />
      <FloatingNav /> 
      <ScrollIndicator />
      <main className="cv-layout">
        <Sidebar />
        <MainContent />
      </main>
    </>
  );
}
