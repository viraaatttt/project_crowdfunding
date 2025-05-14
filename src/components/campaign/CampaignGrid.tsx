import { useState } from "react";
import CampaignCard from "./CampaignCard";
import { Campaign } from "../../types";

interface CampaignGridProps {
  campaigns: Campaign[];
}

const CampaignGrid = ({ campaigns }: CampaignGridProps) => {
  const [filter, setFilter] = useState("all");
  
  const filterCampaigns = () => {
    if (filter === "all") return campaigns;
    if (filter === "active") return campaigns.filter(c => c.isActive);
    if (filter === "funded") {
      return campaigns.filter(c => c.raisedAmount >= c.targetAmount);
    }
    if (filter === "ending-soon") {
      const now = new Date().getTime();
      const threeDays = 3 * 24 * 60 * 60 * 1000;
      return campaigns.filter(
        c => c.isActive && c.deadline - now < threeDays
      );
    }
    return campaigns;
  };
  
  const filteredCampaigns = filterCampaigns();
  
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            filter === "all"
              ? "bg-primary-100 text-primary-700"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          All Campaigns
        </button>
        <button
          onClick={() => setFilter("active")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            filter === "active"
              ? "bg-primary-100 text-primary-700"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Active
        </button>
        <button
          onClick={() => setFilter("funded")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            filter === "funded"
              ? "bg-primary-100 text-primary-700"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Fully Funded
        </button>
        <button
          onClick={() => setFilter("ending-soon")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            filter === "ending-soon"
              ? "bg-primary-100 text-primary-700"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Ending Soon
        </button>
      </div>
      
      {filteredCampaigns.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-lg text-gray-600">No campaigns found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCampaigns.map((campaign) => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CampaignGrid;