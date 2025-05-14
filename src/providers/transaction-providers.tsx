/**
 * Transaction Provider
 */

import { createContext, useContext, useEffect, useState } from "react";
import { getApiUrl, ApiUrl } from "@/utils/constants";
import { getRequest } from "@/utils/axios-request";
import { useAuthContext } from "./auth-providers";
const transactionUrl = getApiUrl("TRANSACTION");

interface TransactionContextType {
  transactions: object | null;
  getTransactions: () => Promise<void>;
  averageTransactions: object | null;
  getAverageTransactions: () => Promise<void>;
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

  const getTransactions = async () => {
    const response = await getRequest(transactionUrl, null, true, null);
    setTransactions(response?.data);
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
  useEffect(() => {
    getTransactions();
  }, []);
  const data = {
    transactions,
    getTransactions,
    averageTransactions,
    getAverageTransactions,
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
