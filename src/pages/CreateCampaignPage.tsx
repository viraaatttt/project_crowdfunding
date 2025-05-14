import { useWeb3 } from "../context/Web3Context";
import { Link } from "react-router-dom";
import CampaignForm from "../components/campaign/CampaignForm";
import Button from "../components/ui/Button";

const CreateCampaignPage = () => {
  const { user, connect, isConnecting } = useWeb3();
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Create a New Campaign</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Start your journey by creating a campaign to bring your ideas to life with the power of decentralized crowdfunding
        </p>
      </div>
      
      {!user ? (
        <div className="max-w-md mx-auto text-center bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-xl font-semibold mb-4">Connect your wallet first</h2>
          <p className="text-gray-600 mb-6">
            You need to connect your Ethereum wallet before you can create a campaign.
          </p>
          <Button 
            onClick={connect} 
            isLoading={isConnecting}
            disabled={isConnecting}
            fullWidth
          >
            Connect Wallet
          </Button>
        </div>
      ) : (
        <CampaignForm />
      )}
      
      <div className="mt-10 text-center">
        <p className="text-gray-600 mb-2">Not ready to create a campaign?</p>
        <Link to="/campaigns" className="text-primary-600 hover:text-primary-700 font-medium">
          Browse existing campaigns
        </Link>
      </div>
    </div>
  );
};

export default CreateCampaignPage;