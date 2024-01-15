import Navbar from "@/components/layout/navbar/Navbar";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <Navbar />
 
      {children}
    </section>
  )
}