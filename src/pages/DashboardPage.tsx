import { useEffect, useState } from "react";
import { useWeb3 } from "../context/Web3Context";
import { useNavigate, Link } from "react-router-dom";
import { ExternalLink, TrendingUp, Clock, PlusCircle } from "lucide-react";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import ProgressBar from "../components/ui/ProgressBar";
import { mockCampaigns } from "../data/mockData";
import { mockTransactions } from "../data/mockData";
import { Campaign, Transaction } from "../types";

const DashboardPage = () => {
  const { user } = useWeb3();
  const navigate = useNavigate();
  const [userCampaigns, setUserCampaigns] = useState<Campaign[]>([]);
  const [contributions, setContributions] = useState<Transaction[]>([]);
  
  useEffect(() => {
    if (!user) {
      navigate("/");
      return;
    }
    
    // Get user's campaigns from mock data
    const campaigns = mockCampaigns.filter(
      (campaign) => campaign.creator === user.address
    );
    setUserCampaigns(campaigns);
    
    // Get user's contributions from mock data
    const userContributions = mockTransactions.filter(
      (tx) => tx.from === user.address
    );
    setContributions(userContributions);
  }, [user, navigate]);
  
  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };
  
  const calculateDaysLeft = (deadline: number) => {
    const now = new Date().getTime();
    const diff = deadline - now;
    
    if (diff <= 0) return "Ended";
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    return days === 1 ? "1 day left" : `${days} days left`;
  };
  
  if (!user) {
    return null; // Will redirect in useEffect
  }
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">
            Manage your campaigns and track your contributions
          </p>
        </div>
        <Link to="/create">
          <Button className="mt-4 md:mt-0">
            <PlusCircle className="mr-2 h-5 w-5" />
            Create Campaign
          </Button>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
        <Card>
          <div className="flex items-center">
            <div className="bg-primary-100 p-3 rounded-full">
              <TrendingUp className="h-6 w-6 text-primary-600" />
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-500">Total Campaigns</div>
              <div className="text-2xl font-bold">{userCampaigns.length}</div>
            </div>
          </div>
        </Card>
        
        <Card>
          <div className="flex items-center">
            <div className="bg-primary-100 p-3 rounded-full">
              <Clock className="h-6 w-6 text-primary-600" />
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-500">Active Campaigns</div>
              <div className="text-2xl font-bold">
                {userCampaigns.filter(c => c.isActive).length}
              </div>
            </div>
          </div>
        </Card>
        
        <Card>
          <div className="flex items-center">
            <div className="flex items-center">
              <div className="bg-primary-100 p-3 rounded-full">
                <svg className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-500">Contributions Made</div>
                <div className="text-2xl font-bold">{contributions.length}</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
      
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Your Campaigns</h2>
        </div>
        
        {userCampaigns.length === 0 ? (
          <Card className="text-center py-8">
            <p className="text-gray-600 mb-4">You haven't created any campaigns yet</p>
            <Link to="/create">
              <Button>Create Your First Campaign</Button>
            </Link>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userCampaigns.map((campaign) => (
              <Card key={campaign.id} className="flex flex-col">
                <div className="relative w-full pt-[56.25%] rounded-lg overflow-hidden mb-4">
                  <img
                    src={campaign.imageUrl}
                    alt={campaign.title}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-grow mb-4">
                  <h3 className="text-lg font-semibold mb-2">{campaign.title}</h3>
                  <ProgressBar
                    value={campaign.raisedAmount}
                    max={campaign.targetAmount}
                    className="mb-2"
                  />
                  
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Raised:</span>
                    <span className="font-medium">
                      {campaign.raisedAmount.toFixed(2)} / {campaign.targetAmount.toFixed(2)} ETH
                    </span>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Status:</span>
                    <span className={`font-medium ${campaign.isActive ? "text-green-600" : "text-red-600"}`}>
                      {campaign.isActive ? calculateDaysLeft(campaign.deadline) : "Ended"}
                    </span>
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <Link to={`/campaign/${campaign.id}`}>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </Link>
                  <Button variant="ghost" size="sm">
                    Manage
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
      
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Your Contributions</h2>
        </div>
        
        {contributions.length === 0 ? (
          <Card className="text-center py-8">
            <p className="text-gray-600 mb-4">You haven't made any contributions yet</p>
            <Link to="/campaigns">
              <Button>Explore Campaigns</Button>
            </Link>
          </Card>
        ) : (
          <Card>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Campaign
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Transaction
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {contributions.map((tx) => {
                    const campaign = mockCampaigns.find(c => c.id === tx.to);
                    return (
                      <tr key={tx.transactionHash}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Link 
                            to={`/campaign/${tx.to}`} 
                            className="text-primary-600 hover:text-primary-700"
                          >
                            {campaign ? campaign.title : tx.to}
                          </Link>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap font-medium">
                          {tx.amount.toFixed(4)} ETH
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                          {formatDate(tx.timestamp)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <a
                            href={`https://etherscan.io/tx/${tx.transactionHash}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-primary-600 hover:text-primary-700"
                          >
                            {tx.transactionHash.slice(0, 8)}...{tx.transactionHash.slice(-6)}
                            <ExternalLink className="h-3 w-3 ml-1" />
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;