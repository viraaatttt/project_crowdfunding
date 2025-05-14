import { ethers } from "ethers";

// ABI (Application Binary Interface) for the smart contract
// This would usually come from your compiled contract
const contractABI = [
  // This is a simplified ABI for demonstration purposes
  // In a real application, you would import the complete ABI from your compiled contract
  "function createCampaign(string memory title, string memory description, string memory imageUrl, uint256 targetAmount, uint256 deadline) public returns (uint256)",
  "function getCampaigns() public view returns (uint256[] memory)",
  "function getCampaign(uint256 campaignId) public view returns (string memory, string memory, string memory, address, uint256, uint256, uint256, bool, uint256)",
  "function donate(uint256 campaignId) public payable",
  "function withdrawFunds(uint256 campaignId) public",
];

// This would be your deployed contract address
const contractAddress = "0x0000000000000000000000000000000000000000";

// Get contract instance
export const getContractInstance = (provider: ethers.providers.Web3Provider) => {
  const signer = provider.getSigner();
  return new ethers.Contract(contractAddress, contractABI, signer);
};

// Connect to wallet
export const connectWallet = async (): Promise<string | null> => {
  if (!window.ethereum) {
    console.error("Ethereum wallet not detected");
    throw new Error("No Ethereum wallet detected. Please install MetaMask.");
  }

  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const accounts = await provider.send("eth_requestAccounts", []);
    return accounts[0];
  } catch (error: any) {
    if (error.code === 4001) {
      // User rejected the connection request
      console.log("User denied account access");
      return null;
    }
    // Handle other errors
    console.error("Error connecting wallet:", error);
    throw error;
  }
};

// Get user balance
export const getUserBalance = async (
  address: string
): Promise<string | null> => {
  if (window.ethereum) {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const balance = await provider.getBalance(address);
      return ethers.utils.formatEther(balance);
    } catch (error) {
      console.error("Error getting balance", error);
      return null;
    }
  }
  return null;
};

// Placeholder function to mock creating a campaign
// In a real app, this would interact with your smart contract
export const createCampaign = async (
  title: string,
  description: string,
  imageUrl: string,
  targetAmount: number,
  deadline: number,
  provider: ethers.providers.Web3Provider
): Promise<boolean> => {
  try {
    const contract = getContractInstance(provider);
    const tx = await contract.createCampaign(
      title,
      description,
      imageUrl,
      ethers.utils.parseEther(targetAmount.toString()),
      deadline
    );
    await tx.wait();
    return true;
  } catch (error) {
    console.error("Error creating campaign", error);
    return false;
  }
};

// Placeholder function to mock donating to a campaign
// In a real app, this would interact with your smart contract
export const donateToCampaign = async (
  campaignId: string,
  amount: number,
  provider: ethers.providers.Web3Provider
): Promise<boolean> => {
  try {
    const contract = getContractInstance(provider);
    const tx = await contract.donate(campaignId, {
      value: ethers.utils.parseEther(amount.toString()),
    });
    await tx.wait();
    return true;
  } catch (error) {
    console.error("Error donating to campaign", error);
    return false;
  }
};

// Type declaration for window.ethereum
declare global {
  interface Window {
    ethereum: any;
  }
}