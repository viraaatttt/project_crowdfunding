import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

const HowItWorksPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">How BlockFund Works</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          A transparent and decentralized crowdfunding platform powered by blockchain technology
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <div>
          <img 
            src="https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg" 
            alt="Blockchain Technology" 
            className="rounded-xl shadow-lg"
          />
        </div>
        
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Blockchain-Powered Crowdfunding
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            BlockFund leverages blockchain technology to create a transparent,
            secure, and efficient crowdfunding experience. Unlike traditional
            platforms, every transaction is recorded on the blockchain, providing
            complete transparency and accountability.
          </p>
          <p className="text-lg text-gray-700">
            Smart contracts automate the entire process, from campaign creation
            to fund distribution, eliminating intermediaries and reducing fees.
            This means more of your contributions go directly to the creators and
            projects you support.
          </p>
        </div>
      </div>
      
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          The BlockFund Process
        </h2>
        
        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary-100 -translate-x-1/2"></div>
          
          <div className="space-y-12">
            <div className="md:flex items-center">
              <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0">
                <div className="md:text-right">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">1. Connect Your Wallet</h3>
                  <p className="text-gray-700">
                    Start by connecting your Ethereum wallet. This will be your
                    identity on the platform and allow you to create campaigns
                    or contribute to existing ones securely.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12 flex justify-center md:justify-start">
                <div className="bg-primary-100 rounded-full p-4 relative z-10">
                  <svg className="h-10 w-10 text-primary-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <path d="M8 17h.01"></path>
                    <path d="M12 17h.01"></path>
                    <path d="M16 17h.01"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="md:flex items-center">
              <div className="md:w-1/2 md:pr-12 order-2 mb-6 md:mb-0">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">2. Create or Discover Campaigns</h3>
                  <p className="text-gray-700">
                    Launch your own campaign with a funding goal and timeline,
                    or browse existing projects to find initiatives that align
                    with your interests and values.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12 order-1 flex justify-center md:justify-end">
                <div className="bg-primary-100 rounded-full p-4 relative z-10">
                  <svg className="h-10 w-10 text-primary-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="md:flex items-center">
              <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0">
                <div className="md:text-right">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">3. Fund Projects Securely</h3>
                  <p className="text-gray-700">
                    Contribute directly to campaigns using cryptocurrency. Every
                    transaction is secure, transparent, and recorded on the
                    blockchain, giving you complete peace of mind.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12 flex justify-center md:justify-start">
                <div className="bg-primary-100 rounded-full p-4 relative z-10">
                  <svg className="h-10 w-10 text-primary-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="16"></line>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="md:flex items-center">
              <div className="md:w-1/2 md:pr-12 order-2">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">4. Track Progress Transparently</h3>
                  <p className="text-gray-700">
                    Watch campaigns grow in real-time with complete transparency.
                    All transactions are publicly verifiable on the blockchain,
                    ensuring accountability and trust.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12 order-1 flex justify-center md:justify-end">
                <div className="bg-primary-100 rounded-full p-4 relative z-10">
                  <svg className="h-10 w-10 text-primary-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-20">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose BlockFund?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our decentralized approach offers unique advantages over traditional crowdfunding platforms
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="bg-primary-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
              <svg className="h-6 w-6 text-primary-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Complete Transparency
            </h3>
            <p className="text-gray-700">
              Every transaction and fund movement is recorded on the blockchain
              and publicly verifiable, ensuring complete transparency and trust.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="bg-primary-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
              <svg className="h-6 w-6 text-primary-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Enhanced Security
            </h3>
            <p className="text-gray-700">
              Smart contracts and blockchain technology provide top-tier security,
              protecting both creators and contributors from fraud and misuse.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="bg-primary-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
              <svg className="h-6 w-6 text-primary-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                <line x1="9" y1="9" x2="9.01" y2="9"></line>
                <line x1="15" y1="9" x2="15.01" y2="9"></line>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Lower Fees
            </h3>
            <p className="text-gray-700">
              By eliminating intermediaries, we significantly reduce platform fees,
              ensuring more funds reach the projects and creators you support.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="bg-primary-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
              <svg className="h-6 w-6 text-primary-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Global Accessibility
            </h3>
            <p className="text-gray-700">
              Anyone with an internet connection and a crypto wallet can participate,
              regardless of location or traditional banking limitations.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="bg-primary-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
              <svg className="h-6 w-6 text-primary-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 4 23 10 17 10"></polyline>
                <polyline points="1 20 1 14 7 14"></polyline>
                <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Automated Processes
            </h3>
            <p className="text-gray-700">
              Smart contracts automate the entire fundraising process, from campaign
              creation to fund distribution, making everything more efficient.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="bg-primary-100 rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
              <svg className="h-6 w-6 text-primary-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Community Ownership
            </h3>
            <p className="text-gray-700">
              The platform is designed for the community, by the community, with
              decentralized governance allowing users to help shape its future.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-primary-600 text-white rounded-2xl overflow-hidden shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-6">
              Join BlockFund today and be part of the decentralized funding revolution.
              Create your campaign or support innovative projects with complete
              transparency and security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/campaigns">
                <Button className="bg-white text-primary-600 hover:bg-gray-100 shadow-sm">
                  Explore Campaigns
                </Button>
              </Link>
              <Link to="/create">
                <Button className="bg-primary-700 hover:bg-primary-800 text-white shadow-sm">
                  Create a Campaign
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="https://images.pexels.com/photos/7821487/pexels-photo-7821487.jpeg"
              alt="Start your campaign"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksPage;