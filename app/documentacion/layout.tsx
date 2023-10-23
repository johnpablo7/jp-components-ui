import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";

export default function PanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-[200px_1fr] sm:gap-6 min-h-[90vh]">
        <Sidebar />
        {children}
      </div>
    </>
  );
}
