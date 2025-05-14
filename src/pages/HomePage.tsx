import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Shield, Users } from "lucide-react";
import Button from "../components/ui/Button";
import CampaignGrid from "../components/campaign/CampaignGrid";
import { mockCampaigns } from "../data/mockData";

const HomePage = () => {
  const featuredCampaigns = mockCampaigns.slice(0, 3);
  
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7015034/pexels-photo-7015034.jpeg')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Fund the Future with Blockchain
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mb-8">
              Launch campaigns, support ideas, and track every contribution with
              complete transparency on our decentralized crowdfunding platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/campaigns">
                <Button size="lg">
                  Explore Campaigns
                </Button>
              </Link>
              <Link to="/create">
                <Button variant="outline" size="lg" className="bg-white/10 border-white">
                  Start a Campaign
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How BlockFund Works
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A transparent crowdfunding experience powered by blockchain technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center px-4 py-6">
              <div className="bg-primary-100 p-4 rounded-full mb-4">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Connect Wallet</h3>
              <p className="text-gray-600">
                Connect your Ethereum wallet to securely access the platform
                and manage your campaigns and contributions.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center px-4 py-6">
              <div className="bg-primary-100 p-4 rounded-full mb-4">
                <TrendingUp className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Create or Fund</h3>
              <p className="text-gray-600">
                Launch your own campaign with a few clicks or browse existing
                campaigns to support projects you believe in.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center px-4 py-6">
              <div className="bg-primary-100 p-4 rounded-full mb-4">
                <Shield className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Track & Verify</h3>
              <p className="text-gray-600">
                Every transaction is recorded on the blockchain, providing
                complete transparency and accountability.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/how-it-works">
              <Button variant="ghost" className="inline-flex items-center">
                Learn more about our platform
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Campaigns Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Featured Campaigns
              </h2>
              <p className="text-lg text-gray-600">
                Discover and support these inspiring projects
              </p>
            </div>
            <Link to="/campaigns">
              <Button variant="outline" className="hidden sm:flex items-center">
                View all campaigns
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <CampaignGrid campaigns={featuredCampaigns} />
          
          <div className="text-center mt-12 sm:hidden">
            <Link to="/campaigns">
              <Button variant="outline" className="inline-flex items-center">
                View all campaigns
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-accent-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to bring your idea to life?
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Start your campaign today and connect with supporters who believe in your vision.
            No hidden fees, full transparency, and complete control over your funds.
          </p>
          <Link to="/create">
            <Button size="lg" className="bg-white text-accent-600 hover:bg-gray-100">
              Start a Campaign
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;