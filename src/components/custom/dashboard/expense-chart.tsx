"use client";

import React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useTransaction } from "@/providers/transaction-providers";
import { chartDataType } from "@/utils/types";
import Loader from "@/components/ui/loader";
const chartConfig = {
  value: {
    label: "Amount",
    color: "#9c40ff",
  },
} satisfies ChartConfig;

export function ExpensesChart() {
  const [timeRange, setTimeRange] = React.useState("7d");
  const { expenseReport, getExpenseReport } = useTransaction();
  const [chartData, setChartData] = React.useState<chartDataType>();
  React.useEffect(() => {
    if (!expenseReport) {
      getExpenseReport();
    }
    setChartData(expenseReport?.seven_days);
  }, [expenseReport, getExpenseReport]);

  const handleValueChange = (value: string) => {
    setTimeRange(value);
    if (value === "7d") {
      setChartData(expenseReport?.seven_days);
    } else if (value === "28d") {
      setChartData(expenseReport?.one_month);
    } else {
      setChartData(expenseReport?.three_month);
    }
  };
  return (
    <Card className="flex flex-col gap-6 py-6 h-100">
      <CardHeader className="flex justify-center items-start flex-col md:flex-row gap-2 md:justify-between md:items-center">
        <div className="flex flex-col gap-1">
          <CardTitle>Total Expenses</CardTitle>
          <CardDescription>
            <span className="@[540px]/card:block">Analyse your expenses.</span>
          </CardDescription>
        </div>
        <div className="flex gap-2">
          <ToggleGroup
            type="single"
            value={timeRange}
            onValueChange={setTimeRange}
            variant="outline"
            className="@[767px]/card:flex hidden"
          >
            <ToggleGroupItem value="3m" className="h-8 px-2.5">
              Last 3 Months
            </ToggleGroupItem>
            <ToggleGroupItem value="28d" className="h-8 px-2.5">
              Last 28 days
            </ToggleGroupItem>
            <ToggleGroupItem value="7d" className="h-8 px-2.5">
              Last 7 days
            </ToggleGroupItem>
          </ToggleGroup>
          <Select value={timeRange} onValueChange={handleValueChange}>
            <SelectTrigger
              className="@[767px]/card:hidden flex w-40"
              aria-label="Select a value"
            >
              <SelectValue placeholder="Last 3 months" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="3m" className="rounded-lg">
                Last 3 Months
              </SelectItem>
              <SelectItem value="28d" className="rounded-lg">
                Last 28 days
              </SelectItem>
              <SelectItem value="7d" className="rounded-lg">
                Last 7 days
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      {
        /**
         * Chart Content
         */
        (chartData && (
          <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
            <ChartContainer
              config={chartConfig}
              className="aspect-auto h-[250px] w-full"
            >
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="fillValue" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="var(--color-value)"
                      stopOpacity={1.0}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--color-value)"
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={10}
                  minTickGap={32}
                  tickFormatter={(value) => {
                    const date = new Date(value);
                    return date.toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                />
                <ChartTooltip
                  cursor={false}
                  content={
                    <ChartTooltipContent
                      labelFormatter={(value) => {
                        return new Date(value).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        });
                      }}
                      indicator="dot"
                    />
                  }
                />
                <Area
                  dataKey="value"
                  type="natural"
                  fill="url(#fillValue)"
                  stroke="var(--color-value)"
                  stackId="a"
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        )) || (
          <>
            <div className="flex flex-row items-center justify-center">
              <Loader />
            </div>
          </>
        )
      }
    </Card>
  );
}
