/**
 * Transaction Provider
 */

import { createContext, useContext, useState } from "react";
import { getApiUrl, ApiUrl } from "@/utils/constants";
import { getRequest } from "@/utils/axios-request";
import { useAuthContext } from "./auth-providers";
import {
  TransactionsType,
  averageTransactionsType,
  expenseReportType,
} from "@/utils/types";
const transactionUrl = getApiUrl("TRANSACTION");

interface TransactionContextType {
  transactions: TransactionsType | null;
  getTransactions: (transactionType?: string) => Promise<void>;
  averageTransactions: averageTransactionsType | null;
  getAverageTransactions: () => Promise<void>;
  expenseReport: expenseReportType | null;
  getExpenseReport: () => Promise<void>;
}

const TransactionContext = createContext<TransactionContextType | null>(null);

export const TransactionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { auth } = useAuthContext();
  const [transactions, setTransactions] = useState(null);
  const [averageTransactions, setAverageTransactions] = useState(null);
  const [expenseReport, setExpenseReport] = useState(null);

  /**
   * Fetches transactions from the API based on the specified transaction type.
   * If no transaction type is provided, fetches all transactions.
   * Updates the transactions state with the response data.
   *
   * @param {string} transactionType - The type of transactions to fetch. Defaults to an empty string, which fetches all transactions.
   */
  const getTransactions = async (transactionType: string | null = "") => {
    const response = await getRequest(
      transactionUrl + `?transaction_type=${transactionType}`,
      null,
      true,
      null
    );
    if (response?.status === 200) {
      setTransactions(response?.data);
    }
  };

  const getAverageTransactions = async () => {
    if (auth) {
      const response = await getRequest(
        ApiUrl + `api/v1/users/${auth?.id}/transaction_average/`,
        null,
        true,
        null
      );
      setAverageTransactions(response?.data);
    }
  };

  const getExpenseReport = async () => {
    if (!auth) return;
    const response = await getRequest(
      ApiUrl + `api/v1/users/${auth?.id}/expense_report/`,
      null,
      true,
      null
    );
    if (response?.status === 200) {
      setExpenseReport(response?.data);
    }
  };

  const data = {
    transactions,
    getTransactions,
    averageTransactions,
    getAverageTransactions,
    expenseReport,
    getExpenseReport,
  };
  return (
    <TransactionContext.Provider value={data}>
      {children}
    </TransactionContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTransaction = () => {
  const context = useContext(TransactionContext);
  if (!context) {
    throw new Error("useTransaction must be used within a TransactionProvider");
  }
  return context;
};
