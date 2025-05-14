import { Link } from "react-router-dom";
import { Clock, Users } from "lucide-react";
import Card from "../ui/Card";
import ProgressBar from "../ui/ProgressBar";
import { Campaign } from "../../types";

interface CampaignCardProps {
  campaign: Campaign;
}

const CampaignCard = ({ campaign }: CampaignCardProps) => {
  const daysLeft = () => {
    const now = new Date().getTime();
    const deadline = campaign.deadline;
    const diff = deadline - now;
    
    if (diff <= 0) return "Ended";
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    return days === 1 ? "1 day left" : `${days} days left`;
  };
  
  const formatAmount = (amount: number) => {
    return amount.toFixed(2);
  };
  
  return (
    <Link to={`/campaign/${campaign.id}`}>
      <Card hoverEffect className="h-full flex flex-col animate-slide-up">
        <div className="relative w-full pt-[56.25%] rounded-lg overflow-hidden mb-4">
          <img
            src={campaign.imageUrl}
            alt={campaign.title}
            className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {campaign.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3">
          {campaign.description}
        </p>
        
        <ProgressBar
          value={campaign.raisedAmount}
          max={campaign.targetAmount}
          className="mb-3"
        />
        
        <div className="flex justify-between items-center text-sm text-gray-500">
          <div className="font-medium">
            {formatAmount(campaign.raisedAmount)} / {formatAmount(campaign.targetAmount)} ETH
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{daysLeft()}</span>
            </div>
            
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              <span>{campaign.contributors}</span>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default CampaignCard;