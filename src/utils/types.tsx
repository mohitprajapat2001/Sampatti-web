export type TransactionsType = {
  count: number;
  next: string | null;
  previous: string | null;
  results: [];
};

export type averageTransactionsType = {
  id: number;
  username: string;
  get_full_name: string;
  email: string;
  status: string;
  last_month_average_credit_transactions: number;
  last_month_average_debit_transactions: number;
  last_month_average_transfer_transactions: number;
  this_month_average_credit_transactions: number;
  this_month_average_debit_transactions: number;
  this_month_average_transfer_transactions: number;
};

export type citiesType = {
  count: number;
  next: string | null;
  previous: string | null;
  results: [];
};

export type staticType = [{ text: string; value: string }];
