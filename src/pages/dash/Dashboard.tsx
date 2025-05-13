import { AppSidebar } from "@/components/ui/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import BreadcrumpHeader from "@/components/ui/breakcrump-header";
import { ExpensesChart } from "@/components/custom/dashboard/expense-chart";
import TransactionsList from "@/components/custom/dashboard/transactions-list";
import { SectionCards } from "@/components/custom/dashboard/section-cards";

export default function Dashboard() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <BreadcrumpHeader
          base={{ title: "Dasboard", path: "/dashboard" }}
          page={null}
        />
        <div className="p-4 m-0">
          <div className="grid grid-cols-3 justify-stretch py-4 md:gap-6 md:py-6">
            <SectionCards />
            <SectionCards />
            <SectionCards />
          </div>
          <div className="grid gap-4 grid-cols-1 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <ExpensesChart />
            </div>
            <TransactionsList className="lg:col-span-2" />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
