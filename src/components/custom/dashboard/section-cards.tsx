import {
  TrendingDownIcon,
  EqualApproximately,
  IndianRupee,
  TrendingUp,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type averageType = {
  title: string;
  description: string;
  lastMonth: number;
  thisMonth: number;
};

export function SectionCards({ data }: { data: averageType }) {
  const average = data.thisMonth / data.lastMonth - 100;
  return (
    <Card className="@container/card p-4 px-0">
      <CardHeader className="relative">
        <div className="flex items-center justify-between">
          <CardDescription>{data.title}</CardDescription>
          <div className="">
            <Badge variant="outline" className="flex gap-1 rounded-lg text-xs">
              {(average > 0 && (
                <>
                  <TrendingUp className="size-3" />
                  <span>{average.toFixed(2)}</span>
                </>
              )) ||
                (average < 0 && (
                  <>
                    <TrendingDownIcon className="size-3" />
                    <span>{average.toFixed(2)}</span>
                  </>
                )) || (
                  <>
                    <EqualApproximately className="size-3" />
                    <span>0</span>
                  </>
                )}
            </Badge>
          </div>
        </div>
        <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
          <p className="flex items-center justify-start">
            <IndianRupee />
            {data.lastMonth}
          </p>
        </CardTitle>
      </CardHeader>
      <CardFooter className="flex-col items-start gap-1 text-sm">
        <div className="line-clamp-1 flex gap-2 font-medium">
          {(average > 0 && (
            <>
              Up {average.toFixed(2)}% this period
              <TrendingUp className="size-4" />
            </>
          )) ||
            (average < 0 && (
              <>
                Down {average.toFixed(2)}% this period
                <TrendingDownIcon className="size-4" />
              </>
            )) || (
              <>
                No change this period
                <EqualApproximately className="size-4" />
              </>
            )}
        </div>
        <div className="text-muted-foreground">{data.description}</div>
      </CardFooter>
    </Card>
  );
}
