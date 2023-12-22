import Navbar from "@/components/layout/navbar/Navbar";
import {
  TokenBalanceBoard,
  ICOStatusBoard,
  AccountStatusBoard,
  WelcomeBoard,
  ProgressBoard,
} from "@/components/layout/dashboard/Dashboard";

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