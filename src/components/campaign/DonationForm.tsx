import { useState } from "react";
import { useWeb3 } from "../../context/Web3Context";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Card from "../ui/Card";
import { donateToCampaign } from "../../lib/contractHelpers";

interface DonationFormProps {
  campaignId: string;
  onSuccess?: () => void;
}

const DonationForm = ({ campaignId, onSuccess }: DonationFormProps) => {
  const { user, provider } = useWeb3();
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user || !provider) {
      setError("Please connect your wallet first");
      return;
    }
    
    if (!amount || parseFloat(amount) <= 0) {
      setError("Please enter a valid amount");
      return;
    }
    
    const userBalance = parseFloat(user.balance);
    if (parseFloat(amount) > userBalance) {
      setError(`Insufficient balance. You have ${userBalance.toFixed(4)} ETH`);
      return;
    }
    
    setIsSubmitting(true);
    setError("");
    
    try {
      const success = await donateToCampaign(
        campaignId,
        parseFloat(amount),
        provider
      );
      
      if (success) {
        setAmount("");
        if (onSuccess) onSuccess();
      } else {
        setError("Transaction failed. Please try again.");
      }
    } catch (error) {
      console.error("Error donating:", error);
      setError("An error occurred during donation.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAmount(value);
    setError("");
  };
  
  const presetAmounts = [0.01, 0.05, 0.1, 0.5];
  
  return (
    <Card className="w-full">
      <h3 className="text-lg font-semibold mb-4">Support this campaign</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          id="donationAmount"
          name="amount"
          label="Amount (ETH)"
          type="number"
          step="0.001"
          min="0.001"
          placeholder="0.05"
          value={amount}
          onChange={handleAmountChange}
          error={error}
          required
        />
        
        <div className="grid grid-cols-4 gap-2">
          {presetAmounts.map((preset) => (
            <button
              key={preset}
              type="button"
              onClick={() => setAmount(preset.toString())}
              className="py-2 px-3 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors text-sm text-center"
            >
              {preset} ETH
            </button>
          ))}
        </div>
        
        <Button
          type="submit"
          fullWidth
          isLoading={isSubmitting}
          disabled={isSubmitting || !user}
        >
          Donate Now
        </Button>
        
        {!user && (
          <p className="text-center text-sm text-red-600">
            Please connect your wallet to make a donation
          </p>
        )}
        
        <p className="text-xs text-gray-500 mt-2">
          All donations are made directly to the creator's wallet through
          the blockchain. Once confirmed, transactions cannot be reversed.
        </p>
      </form>
    </Card>
  );
};

export default DonationForm;