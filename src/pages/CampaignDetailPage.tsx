import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, Users, ArrowLeft, ExternalLink, Share2 } from "lucide-react";
import Card from "../components/ui/Card";
import ProgressBar from "../components/ui/ProgressBar";
import Button from "../components/ui/Button";
import DonationForm from "../components/campaign/DonationForm";
import { mockCampaigns } from "../data/mockData";
import { mockTransactions } from "../data/mockData";
import { Campaign, Transaction } from "../types";

const CampaignDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [campaign, setCampaign] = useState<Campaign | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API call to fetch campaign details
    const fetchCampaign = () => {
      setIsLoading(true);
      // Find campaign in mock data
      const foundCampaign = mockCampaigns.find((c) => c.id === id);
      
      if (foundCampaign) {
        setCampaign(foundCampaign);
        
        // Filter transactions for this campaign
        const campaignTransactions = mockTransactions
          .filter((t) => t.to === foundCampaign.id)
          .sort((a, b) => b.timestamp - a.timestamp);
        
        setTransactions(campaignTransactions);
      }
      
      setIsLoading(false);
    };
    
    fetchCampaign();
  }, [id]);
  
  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
  
  const calculateDaysLeft = (deadline: number) => {
    const now = new Date().getTime();
    const diff = deadline - now;
    
    if (diff <= 0) return "Ended";
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    return days === 1 ? "1 day left" : `${days} days left`;
  };
  
  const handleShareClick = () => {
    if (navigator.share) {
      navigator.share({
        title: campaign?.title,
        text: campaign?.description,
        url: window.location.href,
      }).catch((error) => console.log('Error sharing', error));
    } else {
      // Fallback
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };
  
  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex justify-center">
        <div className="animate-pulse flex flex-col w-full max-w-4xl">
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
          <div className="h-64 bg-gray-200 rounded mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <div className="h-4 bg-gray-200 rounded w-full mb-3"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-3"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6 mb-3"></div>
            </div>
            <div className="h-40 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }
  
  if (!campaign) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Campaign Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          The campaign you're looking for doesn't exist or has been removed.
        </p>
        <Link to="/campaigns">
          <Button>View All Campaigns</Button>
        </Link>
      </div>
    );
  }
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
      <Link to="/campaigns" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6">
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back to campaigns
      </Link>
      
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{campaign.title}</h1>
        <div className="flex items-center text-gray-600">
          <span>by {campaign.creator.slice(0, 6)}...{campaign.creator.slice(-4)}</span>
          <span className="mx-2">•</span>
          <span>Created on {formatDate(campaign.deadline - 30 * 24 * 60 * 60 * 1000)}</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-xl overflow-hidden">
            <img 
              src={campaign.imageUrl} 
              alt={campaign.title}
              className="w-full h-auto object-cover"
            />
          </div>
          
          <Card>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-900">About this campaign</h2>
              <Button 
                variant="ghost" 
                size="sm" 
                className="flex items-center"
                onClick={handleShareClick}
              >
                <Share2 className="h-4 w-4 mr-1" />
                Share
              </Button>
            </div>
            <p className="text-gray-700 whitespace-pre-line">{campaign.description}</p>
          </Card>
          
          <Card>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Recent Supporters</h2>
            {transactions.length === 0 ? (
              <p className="text-gray-600">No contributions yet. Be the first to support!</p>
            ) : (
              <div className="space-y-4">
                {transactions.slice(0, 5).map((tx) => (
                  <div key={tx.transactionHash} className="flex justify-between items-center pb-3 border-b border-gray-200 last:border-0">
                    <div>
                      <div className="text-gray-900 font-medium">
                        {tx.from.slice(0, 6)}...{tx.from.slice(-4)}
                      </div>
                      <div className="text-gray-500 text-sm">
                        {formatDate(tx.timestamp)}
                      </div>
                    </div>
                    <div className="text-accent-600 font-semibold">
                      {tx.amount.toFixed(4)} ETH
                    </div>
                  </div>
                ))}
                
                {transactions.length > 5 && (
                  <div className="text-center pt-2">
                    <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                      View all {transactions.length} supporters
                    </button>
                  </div>
                )}
              </div>
            )}
          </Card>
        </div>
        
        <div className="space-y-6">
          <Card>
            <div className="mb-6">
              <ProgressBar
                value={campaign.raisedAmount}
                max={campaign.targetAmount}
                className="mb-4"
              />
              
              <div className="flex justify-between items-baseline mb-1">
                <div className="text-2xl font-bold text-gray-900">
                  {campaign.raisedAmount.toFixed(2)} ETH
                </div>
                <div className="text-gray-600">
                  of {campaign.targetAmount.toFixed(2)} ETH
                </div>
              </div>
            </div>
            
            <div className="flex justify-between text-gray-600 text-sm mb-6">
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-1" />
                <span>{campaign.contributors} supporters</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{calculateDaysLeft(campaign.deadline)}</span>
              </div>
            </div>
            
            <DonationForm campaignId={campaign.id} />
          </Card>
          
          <Card>
            <h3 className="text-lg font-semibold mb-4">Campaign Details</h3>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Creator</span>
                <a
                  href={`https://etherscan.io/address/${campaign.creator}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-primary-600 hover:text-primary-700"
                >
                  {campaign.creator.slice(0, 6)}...{campaign.creator.slice(-4)}
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Launch Date</span>
                <span>{formatDate(campaign.deadline - 30 * 24 * 60 * 60 * 1000)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Deadline</span>
                <span>{formatDate(campaign.deadline)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Campaign ID</span>
                <a
                  href={`https://etherscan.io/tx/${campaign.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-primary-600 hover:text-primary-700"
                >
                  #{campaign.id.slice(0, 8)}
                  <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetailPage;