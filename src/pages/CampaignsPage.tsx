import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Plus } from "lucide-react";
import CampaignGrid from "../components/campaign/CampaignGrid";
import Button from "../components/ui/Button";
import { mockCampaigns } from "../data/mockData";

const CampaignsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sort, setSort] = useState("newest");
  
  const filteredCampaigns = mockCampaigns.filter((campaign) =>
    campaign.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    campaign.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const sortedCampaigns = [...filteredCampaigns].sort((a, b) => {
    if (sort === "newest") {
      return b.deadline - a.deadline;
    }
    if (sort === "mostFunded") {
      return b.raisedAmount - a.raisedAmount;
    }
    if (sort === "endingSoon") {
      return a.deadline - b.deadline;
    }
    // Default to newest
    return b.deadline - a.deadline;
  });
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Explore Campaigns
          </h1>
          <p className="text-gray-600 mt-1">
            Discover and support innovative projects on the blockchain
          </p>
        </div>
        
        <Link to="/create">
          <Button className="flex items-center">
            <Plus className="mr-2 h-5 w-5" />
            Start a Campaign
          </Button>
        </Link>
      </div>
      
      <div className="flex flex-col md:flex-row gap-4 items-center mb-8">
        <div className="relative w-full md:w-auto flex-grow">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Search campaigns..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="w-full md:w-auto">
          <select
            className="block w-full px-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="newest">Newest</option>
            <option value="mostFunded">Most Funded</option>
            <option value="endingSoon">Ending Soon</option>
          </select>
        </div>
      </div>
      
      {sortedCampaigns.length === 0 ? (
        <div className="text-center py-16 bg-gray-50 rounded-lg">
          <p className="text-xl text-gray-600 mb-4">
            No campaigns found matching your search
          </p>
          <Link to="/create">
            <Button>Start Your Own Campaign</Button>
          </Link>
        </div>
      ) : (
        <CampaignGrid campaigns={sortedCampaigns} />
      )}
    </div>
  );
};

export default CampaignsPage;