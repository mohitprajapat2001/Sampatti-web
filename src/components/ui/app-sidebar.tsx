"use client";

import * as React from "react";
import {
  ShieldCheck,
  Landmark,
  BookLock,
  LayoutDashboard,
  Banknote,
  CreditCard,
  HandCoins,
} from "lucide-react";

import { NavMain } from "@/components/ui/nav-main";
import { NavProjects } from "@/components/ui/nav-projects";
import { NavUser } from "@/components/ui/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
      isActive: false,
      items: null,
    },
    {
      title: "Banking",
      url: "#",
      icon: Banknote,
      isActive: true,
      items: [
        {
          title: "Money Transfer",
          url: "money-transfer",
        },
        {
          title: "UPI",
          url: "upi",
        },
        {
          title: "Transactions",
          url: "transactions",
        },
      ],
    },
    {
      title: "Cards",
      url: "#",
      icon: CreditCard,
      isActive: false,
      items: [
        {
          title: "Credit Card",
          url: "cards-credit",
        },
        {
          title: "Debit Card",
          url: "cards-debit",
        },
        {
          title: "Card Offers",
          url: "cards-offer",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Fixed Deposts",
      url: "fixed-deposit",
      icon: BookLock,
    },
    {
      name: "Cibil Score",
      url: "cibil-score",
      icon: ShieldCheck,
    },
    {
      name: "Loan",
      url: "loan",
      icon: HandCoins,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Landmark className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Sampatti</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
