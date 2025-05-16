/* eslint-disable */
import { AppSidebar } from "@/components/ui/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import BreadcrumpHeader from "@/components/ui/breakcrump-header";
import { ExpensesChart } from "@/components/custom/dashboard/expense-chart";
import TransactionsList from "@/components/custom/dashboard/transactions-list";
import { SectionCards } from "@/components/custom/dashboard/section-cards";
import { useTransaction } from "@/providers/transaction-providers";
import { useAuthContext } from "@/providers/auth-providers";
import { useEffect } from "react";

export default function Dashboard() {
  const { averageTransactions, getAverageTransactions } = useTransaction();
  const { auth } = useAuthContext();
  useEffect(() => {
    getAverageTransactions();
  }, [auth]);
  const average = {
    credit: {
      title: "Credit Transactions",
      description: "Money added to your account.",
      lastMonth: averageTransactions?.last_month_average_credit_transactions,
      thisMonth: averageTransactions?.this_month_average_credit_transactions,
    },
    debit: {
      title: "Debit Transactions",
      description: "Money taken from your account.",
      lastMonth: averageTransactions?.last_month_average_debit_transactions,
      thisMonth: averageTransactions?.this_month_average_debit_transactions,
    },
    transfer: {
      title: "Transfer Transactions",
      description: "Money moved between accounts.",
      lastMonth: averageTransactions?.last_month_average_transfer_transactions,
      thisMonth: averageTransactions?.this_month_average_transfer_transactions,
    },
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <BreadcrumpHeader
          base={{ title: "Dasboard", path: "/dashboard" }}
          page={null}
        />
        <div className="p-4 m-0">
          <div className="grid grid-cols-3 justify-stretch py-4 md:gap-5 md:py-5">
            {(average && (
              <>
                <SectionCards data={average.credit} />
                <SectionCards data={average.debit} />
                <SectionCards data={average.transfer} />
              </>
            )) || (
              <>
                <div className="aspect-video rounded-xl bg-muted/50" />
                <div className="aspect-video rounded-xl bg-muted/50" />
                <div className="aspect-video rounded-xl bg-muted/50" />
              </>
            )}
          </div>
          <div className="grid gap-4 grid-cols-1 lg:grid-cols-5">
            <div className="lg:col-span-3 flex flex-col gap-4">
              <ExpensesChart />
              <ExpensesChart />
            </div>
            <TransactionsList className="lg:col-span-2" />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
