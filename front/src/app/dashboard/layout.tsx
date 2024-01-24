import Navbar from "@/components/layout/navbar/Navbar";
import ContentLayout from "@/components/layout/contentLayout";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <Navbar />
 
      <ContentLayout>
        {children}
      </ContentLayout>
    </section>
  )
}