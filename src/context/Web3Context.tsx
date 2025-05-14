import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { ethers } from "ethers";
import { connectWallet, getUserBalance } from "../lib/contractHelpers";
import { User } from "../types";

interface Web3ContextType {
  user: User | null;
  isConnecting: boolean;
  error: string | null;
  connect: () => Promise<void>;
  disconnect: () => void;
  provider: ethers.providers.Web3Provider | null;
}

const Web3Context = createContext<Web3ContextType>({
  user: null,
  isConnecting: false,
  error: null,
  connect: async () => {},
  disconnect: () => {},
  provider: null,
});

export const useWeb3 = () => useContext(Web3Context);

interface Web3ProviderProps {
  children: ReactNode;
}

export const Web3Provider = ({ children }: Web3ProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(null);

  // Initialize provider
  useEffect(() => {
    if (window.ethereum) {
      const ethProvider = new ethers.providers.Web3Provider(window.ethereum);
      setProvider(ethProvider);
      
      // Check if user is already connected
      const checkConnection = async () => {
        try {
          const accounts = await ethProvider.listAccounts();
          if (accounts.length > 0) {
            const balance = await getUserBalance(accounts[0]);
            setUser({
              address: accounts[0],
              balance: balance || "0",
            });
          }
        } catch (error) {
          console.error("Failed to check connection", error);
          setError("Failed to check wallet connection");
        }
      };
      
      checkConnection();
      
      // Listen for account changes
      const handleAccountsChanged = (accounts: string[]) => {
        if (accounts.length === 0) {
          setUser(null);
        } else {
          getUserBalance(accounts[0]).then((balance) => {
            setUser({
              address: accounts[0],
              balance: balance || "0",
            });
          });
        }
      };
      
      window.ethereum.on("accountsChanged", handleAccountsChanged);
      
      return () => {
        window.ethereum.removeListener("accountsChanged", handleAccountsChanged);
      };
    }
  }, []);
  
  const connect = async () => {
    setIsConnecting(true);
    setError(null);
    try {
      const address = await connectWallet();
      if (!address) {
        setError("Wallet connection was rejected");
        return;
      }
      const balance = await getUserBalance(address);
      setUser({
        address,
        balance: balance || "0",
      });
    } catch (error: any) {
      console.error("Connection failed", error);
      setError(error.message || "Failed to connect wallet");
    } finally {
      setIsConnecting(false);
    }
  };
  
  const disconnect = () => {
    setUser(null);
    setError(null);
  };
  
  return (
    <Web3Context.Provider
      value={{
        user,
        isConnecting,
        error,
        connect,
        disconnect,
        provider,
      }}
    >
      {children}
    </Web3Context.Provider>
  );
};