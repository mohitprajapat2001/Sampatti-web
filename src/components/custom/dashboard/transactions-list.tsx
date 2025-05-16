import React, { useEffect } from "react";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useTransaction } from "@/providers/transaction-providers";
import { useStaticContext } from "@/providers/static-providers";
import { ArrowRight, IndianRupee } from "lucide-react";
import ListSkeleton from "@/components/ui/skeleton-list";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { Link } from "react-router-dom";
const TransactionsList = ({ className }: React.ComponentProps<"div">) => {
  const { transactions, getTransactions } = useTransaction();
  const { transactionTypes, getTransactionTypes } = useStaticContext();

  /**Handle Transaction Type Change */
  const handleChange = (value: string) => {
    if (value === "all") {
      getTransactions();
      return;
    }
    getTransactions(value);
  };

  useEffect(() => {
    if (!transactions) {
      getTransactions();
    }
    if (!transactionTypes) {
      getTransactionTypes();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transactions, transactionTypes]);
  return (
    <Card className={className + " flex flex-col gap-4 p-4"}>
      <div className="flex justify-end md:justify-between items-center">
        <div className="hidden md:block">Transactions</div>
        <Select defaultValue="all" onValueChange={handleChange}>
          <Tooltip>
            <TooltipTrigger asChild>
              <SelectTrigger className="w-min">
                <SelectValue placeholder="Transactions" />
              </SelectTrigger>
            </TooltipTrigger>
            <TooltipContent>filter transaction by type</TooltipContent>
          </Tooltip>
          <SelectContent>
            {transactionTypes &&
              transactionTypes.map((type: { text: string; value: string }) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.text}
                </SelectItem>
              ))}
            <SelectItem value="all">All</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <ScrollArea className="h-175 py-4">
        {transactions ? (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Date</TableHead>
                <TableHead>Type</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {(transactions &&
                transactions.results?.map(
                  (transaction: { [key: string]: string }) => (
                    <TableRow key={transaction.id}>
                      <TableCell>
                        <div className="flex flex-col items-start justify-center">
                          <p className="">
                            {new Date(transaction.modified).toLocaleDateString(
                              "en-US",
                              {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              }
                            )}
                          </p>
                          <p className="text-xs text-gray-500">
                            {new Date(transaction.modified).toLocaleTimeString(
                              "en-US",
                              {
                                hour: "numeric",
                                minute: "numeric",
                              }
                            )}
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        {transactionTypes &&
                          transactionTypes.map(
                            (type: { text: string; value: string }) => {
                              if (type.value === transaction.transaction_type) {
                                return type.text;
                              }
                            }
                          )}
                      </TableCell>
                      <TableCell className="text-right">
                        <span className="flex items-center">
                          <IndianRupee className="size-3" />
                          {transaction.amount}
                        </span>
                      </TableCell>
                    </TableRow>
                  )
                )) || (
                <TableRow>
                  <TableCell colSpan={3} className="text-center">
                    No transactions
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        ) : (
          <>
            <Table>
              <TableBody>
                {[...Array(10)].map((_, index) => (
                  <TableRow key={index}>
                    <TableCell colSpan={3} className="text-center">
                      <ListSkeleton />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </>
        )}
      </ScrollArea>
      <div className="flex justify-start mb-3">
        <Link to="/transactions">
          <RainbowButton className="group flex justify-start items-center gap-3">
            <span>View all transactions</span>
            <span>
              <ArrowRight className="size-3 group-hover:translate-x-2 group-hover:size-4 transition-all duration-300" />
            </span>
          </RainbowButton>
        </Link>
      </div>
    </Card>
  );
};

export default TransactionsList;
