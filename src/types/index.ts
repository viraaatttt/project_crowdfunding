export interface Campaign {
  id: string;
  title: string;
  description: string;
  creator: string;
  imageUrl: string;
  targetAmount: number;
  raisedAmount: number;
  deadline: number;
  isActive: boolean;
  contributors: number;
}

export interface User {
  address: string;
  balance: string;
}

export interface Transaction {
  from: string;
  to: string;
  amount: number;
  timestamp: number;
  transactionHash: string;
}